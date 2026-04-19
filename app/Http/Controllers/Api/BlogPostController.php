<?php

namespace App\Http\Controllers\Api;

use App\Enums\BlogPostStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBlogPostRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Http\Requests\UpdateBlogPostStatusRequest;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlogPostController extends Controller
{
    public function publicIndex(): JsonResponse
    {
        $posts = BlogPost::query()
            ->publiclyVisible()
            ->with('user')
            ->latest('published_at')
            ->get();

        return response()->json([
            'posts' => BlogPostResource::collection($posts)->resolve(),
        ]);
    }

    public function index(): JsonResponse
    {
        $this->authorize('viewAny', BlogPost::class);

        $statusFilter = request()->string('status')->toString();
        $query = BlogPost::query()->with('user');

        if (in_array($statusFilter, BlogPostStatus::values(), true)) {
            $query->where('status', $statusFilter);
        }

        $posts = $query->latest('updated_at')->get();

        $counts = [
            BlogPostStatus::DRAFT->value => 0,
            BlogPostStatus::PUBLISHED->value => 0,
            BlogPostStatus::ARCHIVED->value => 0,
        ];

        foreach (BlogPost::query()->selectRaw('status, COUNT(*) as aggregate')->groupBy('status')->get() as $row) {
            $statusKey = $row->status instanceof BlogPostStatus
                ? $row->status->value
                : (string) $row->status;

            if (array_key_exists($statusKey, $counts)) {
                $counts[$statusKey] = (int) $row->aggregate;
            }
        }

        return response()->json([
            'posts' => BlogPostResource::collection($posts)->resolve(),
            'counts' => $counts,
        ]);
    }

    public function store(StoreBlogPostRequest $request): JsonResponse
    {
        $this->authorize('create', BlogPost::class);

        $validated = $request->validated();
        $status = BlogPostStatus::from($validated['status'] ?? BlogPostStatus::DRAFT->value);
        $post = new BlogPost();

        $post->user_id = $request->user()->id;
        $post->title = $validated['title'];
        $post->slug = $this->generateUniqueSlug($validated['title']);
        $post->excerpt = $validated['excerpt'];
        $post->category = $validated['category'] ?: null;
        $post->content = $this->normalizeContent($validated['content']);
        $this->applyStatus($post, $status);

        if ($request->hasFile('featured_image')) {
            $post->featured_image_path = $request->file('featured_image')->store('blog-posts', 'public');
        }

        $post->save();

        return response()->json([
            'message' => 'Post created successfully.',
            'post' => BlogPostResource::make($post->load('user'))->resolve(),
        ], 201);
    }

    public function update(UpdateBlogPostRequest $request, BlogPost $blogPost): JsonResponse
    {
        $this->authorize('update', $blogPost);

        $validated = $request->validated();
        $status = BlogPostStatus::from($validated['status'] ?? $blogPost->status->value);

        if ($blogPost->status !== $status) {
            $this->authorize('transitionStatus', [$blogPost, $status]);
        }

        $blogPost->title = $validated['title'];
        $blogPost->slug = $this->generateUniqueSlug($validated['title'], $blogPost->id);
        $blogPost->excerpt = $validated['excerpt'];
        $blogPost->category = $validated['category'] ?: null;
        $blogPost->content = $this->normalizeContent($validated['content']);
        $this->applyStatus($blogPost, $status);

        if ($request->hasFile('featured_image')) {
            if ($blogPost->featured_image_path) {
                Storage::disk('public')->delete($blogPost->featured_image_path);
            }

            $blogPost->featured_image_path = $request->file('featured_image')->store('blog-posts', 'public');
        } elseif (! empty($validated['remove_featured_image']) && $blogPost->featured_image_path) {
            Storage::disk('public')->delete($blogPost->featured_image_path);
            $blogPost->featured_image_path = null;
        }

        $blogPost->save();

        return response()->json([
            'message' => 'Post updated successfully.',
            'post' => BlogPostResource::make($blogPost->fresh()->load('user'))->resolve(),
        ]);
    }

    public function updateStatus(UpdateBlogPostStatusRequest $request, BlogPost $blogPost): JsonResponse
    {
        $status = BlogPostStatus::from($request->validated('status'));

        $this->authorize('transitionStatus', [$blogPost, $status]);

        $this->applyStatus($blogPost, $status);
        $blogPost->save();

        return response()->json([
            'message' => 'Post status updated.',
            'post' => BlogPostResource::make($blogPost->fresh()->load('user'))->resolve(),
        ]);
    }

    public function destroy(BlogPost $blogPost): JsonResponse
    {
        $this->authorize('delete', $blogPost);

        if ($blogPost->featured_image_path) {
            Storage::disk('public')->delete($blogPost->featured_image_path);
        }

        $blogPost->delete();

        return response()->json([
            'message' => 'Post deleted successfully.',
        ]);
    }

    private function applyStatus(BlogPost $blogPost, BlogPostStatus $status): void
    {
        $existingPublishedAt = $blogPost->published_at;
        $existingArchivedAt = $blogPost->archived_at;

        $blogPost->status = $status;
        $blogPost->published_at = null;
        $blogPost->archived_at = null;

        if ($status === BlogPostStatus::PUBLISHED) {
            $blogPost->published_at = $existingPublishedAt ?: Carbon::now();
        }

        if ($status === BlogPostStatus::ARCHIVED) {
            $blogPost->archived_at = $existingArchivedAt ?: Carbon::now();
        }
    }

    /**
     * @param  array<string, mixed>  $content
     * @return array<string, mixed>
     */
    private function normalizeContent(array $content): array
    {
        $blocks = collect($content['blocks'] ?? [])
            ->map(function ($block): ?array {
                if (! is_array($block)) {
                    return null;
                }

                $type = (string) ($block['type'] ?? '');

                if ($type === 'paragraph') {
                    return [
                        'type' => 'paragraph',
                        'text' => trim((string) ($block['text'] ?? '')),
                    ];
                }

                if ($type === 'list') {
                    return [
                        'type' => 'list',
                        'items' => collect($block['items'] ?? [])
                            ->map(static fn ($item): string => trim((string) $item))
                            ->filter()
                            ->values()
                            ->all(),
                    ];
                }

                return null;
            })
            ->filter()
            ->values()
            ->all();

        return [
            'heading' => trim((string) ($content['heading'] ?? '')),
            'blocks' => $blocks,
        ];
    }

    private function generateUniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $baseSlug = Str::slug($title);
        $baseSlug = $baseSlug === '' ? 'post' : $baseSlug;
        $slug = $baseSlug;
        $counter = 1;

        while (
            BlogPost::query()
                ->where('slug', $slug)
                ->when($ignoreId, fn ($query) => $query->whereKeyNot($ignoreId))
                ->exists()
        ) {
            $slug = $baseSlug.'-'.$counter;
            $counter++;
        }

        return $slug;
    }
}
