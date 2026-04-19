<?php

use App\Http\Controllers\BookingRequestController;
use App\Models\BlogPost;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

$renderWebsite6 = fn (string $activePage, string $pageTitle, array $props = []) => Inertia::render(
    'Websites/Website6/Index',
    array_merge([
        'activePage' => $activePage,
        'pageTitle' => $pageTitle,
    ], $props),
);

Route::get('/', fn () => $renderWebsite6('home', 'Home'))->name('home');
Route::get('/admin/login', fn () => Inertia::render('Admin/Login'))
    ->middleware('guest')
    ->name('login');
Route::get('/login', fn () => redirect()->route('login'));
Route::get('/admin/dashboard', fn () => Inertia::render('Admin/Dashboard'))
    ->middleware('auth')
    ->name('dashboard');
Route::get('/dashboard', fn () => redirect()->route('dashboard'))
    ->middleware('auth');
Route::get('/profile', fn () => $renderWebsite6('profile', 'Profile'))->name('profile');
Route::get('/services', fn () => $renderWebsite6('services', 'Services'))->name('services');
Route::get('/team', fn () => $renderWebsite6('team', 'Team'))->name('team');
Route::get('/tours', fn () => $renderWebsite6('tours', 'Tours'))->name('tours');

Route::get('/blogs', function () use ($renderWebsite6) {
    $blogPosts = BlogPost::query()
        ->publiclyVisible()
        ->latest('published_at')
        ->get(['title', 'slug', 'excerpt', 'category', 'featured_image_path', 'content', 'published_at'])
        ->map(fn (BlogPost $post): array => [
            'title' => $post->title,
            'slug' => $post->slug,
            'excerpt' => $post->excerpt,
            'category' => $post->category ?: 'General',
            'image' => $post->featured_image_path ?: '/images/logo/full-logo-no-bg.png',
            'content' => $post->content ?: ['heading' => '', 'blocks' => []],
            'published_at' => optional($post->published_at)?->toDateString(),
        ])
        ->values()
        ->all();

    return $renderWebsite6('blogs', 'Blogs', [
        'blogPosts' => $blogPosts,
    ]);
})->name('blogs');

Route::get('/blogs/{slug}', function (string $slug) use ($renderWebsite6) {
    $selectedPost = BlogPost::query()
        ->publiclyVisible()
        ->where('slug', $slug)
        ->firstOrFail(['title', 'slug', 'excerpt', 'featured_image_path']);

    $blogPosts = BlogPost::query()
        ->publiclyVisible()
        ->latest('published_at')
        ->get(['title', 'slug', 'excerpt', 'category', 'featured_image_path', 'content', 'published_at'])
        ->map(fn (BlogPost $post): array => [
            'title' => $post->title,
            'slug' => $post->slug,
            'excerpt' => $post->excerpt,
            'category' => $post->category ?: 'General',
            'image' => $post->featured_image_path ?: '/images/logo/full-logo-no-bg.png',
            'content' => $post->content ?: ['heading' => '', 'blocks' => []],
            'published_at' => optional($post->published_at)?->toDateString(),
        ])
        ->values()
        ->all();

    return $renderWebsite6('blogs', $selectedPost->title, [
        'blogSlug' => $slug,
        'blogPosts' => $blogPosts,
        'blogMeta' => [
            'title' => $selectedPost->title,
            'description' => $selectedPost->excerpt,
            'path' => "/blogs/{$slug}",
            'image' => $selectedPost->featured_image_path ?: '/images/logo/full-logo-no-bg.png',
            'type' => 'article',
        ],
    ]);
})->name('blogs.show');

Route::get('/contact', fn () => $renderWebsite6('contact', 'Contact'))->name('contact');
Route::post('/booking-requests', [BookingRequestController::class, 'store'])->name('booking-requests.store');

Route::get('/sitemap.xml', function () {
    $blogSlugs = BlogPost::query()
        ->publiclyVisible()
        ->pluck('slug')
        ->all();

    $urls = [
        route('home'),
        route('profile'),
        route('services'),
        route('team'),
        route('tours'),
        route('blogs'),
        ...array_map(fn (string $slug) => route('blogs.show', ['slug' => $slug]), $blogSlugs),
        route('contact'),
    ];

    return response()
        ->view('sitemap', [
            'urls' => $urls,
            'lastmod' => now()->toDateString(),
        ])
        ->header('Content-Type', 'application/xml');
})->name('sitemap');

foreach (['1', '2', '3', '4', '5', '6'] as $legacyPath) {
    Route::redirect("/{$legacyPath}", '/', 301);
}

Route::fallback(function () {
    return Inertia::render('Errors/NotFound')
        ->toResponse(request())
        ->setStatusCode(404);
});
