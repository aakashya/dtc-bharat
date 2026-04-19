<?php

namespace App\Http\Resources;

use App\Enums\BlogPostStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * @mixin \App\Models\BlogPost
 */
class BlogPostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $featuredImageUrl = null;
        if ($this->featured_image_path) {
            $path = (string) $this->featured_image_path;
            $featuredImageUrl = Str::startsWith($path, ['http://', 'https://', '/'])
                ? $path
                : Storage::url($path);
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'category' => $this->category,
            'content' => $this->content ?? [
                'heading' => '',
                'blocks' => [],
            ],
            'status' => ($this->status instanceof BlogPostStatus ? $this->status->value : (string) $this->status),
            'featured_image_url' => $featuredImageUrl,
            'published_at' => optional($this->published_at)?->toISOString(),
            'archived_at' => optional($this->archived_at)?->toISOString(),
            'created_at' => optional($this->created_at)?->toISOString(),
            'updated_at' => optional($this->updated_at)?->toISOString(),
            'author' => [
                'id' => $this->user?->id,
                'name' => $this->user?->name,
            ],
        ];
    }
}
