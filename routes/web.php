<?php

use App\Http\Controllers\BookingRequestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

$renderWebsite6 = fn (string $activePage, string $pageTitle, array $props = []) => Inertia::render(
    'Websites/Website6/Index',
    array_merge([
        'activePage' => $activePage,
        'pageTitle' => $pageTitle,
    ], $props),
);

$blogPosts = [
    'are-we-pushing-ev-adoption-too-early-in-indias-transport-ecosystem' => [
        'title' => 'Are We Pushing EV Adoption Too Early in India’s Transport Ecosystem?',
        'description' => 'On paper, EVs look perfect. On Indian roads, the reality is very different.',
        'image' => '/images/blogs/blog_ev.jpeg',
    ],
    'ev-push-by-mncs-green-vision-vs-ground-reality' => [
        'title' => 'EV Push by MNCs: Green Vision vs Ground Reality',
        'description' => 'The EV shift in employee transportation is progressive in intent, but the on-ground challenges for transport partners remain significant.',
        'image' => '/images/blogs/ev_push.jpeg',
    ],
    'womens-safety-in-corporate-transportation' => [
        'title' => 'Women’s Safety in Corporate Transportation',
        'description' => 'A safe journey is not a privilege for women. It is a necessity and a responsibility every company must uphold.',
        'image' => '/images/blogs/women_safety.jpeg',
    ],
    'what-keeps-a-modern-company-moving-efficiently' => [
        'title' => 'What Keeps a Modern Company Moving Efficiently?',
        'description' => 'A modern business runs better with mobility systems that are safe, reliable, and professionally managed.',
        'image' => '/images/blogs/cabs.jpeg',
    ],
    'why-driver-training-is-the-foundation-of-safe-mobility' => [
        'title' => 'Why Driver Training Is the Foundation of Safe Mobility',
        'description' => 'In corporate transportation, safety begins long before the vehicle starts moving. It begins with a well trained driver.',
        'image' => '/images/blogs/team_training.jpeg',
    ],
];

Route::get('/', fn () => $renderWebsite6('home', 'Home'))->name('home');
Route::get('/profile', fn () => $renderWebsite6('profile', 'Profile'))->name('profile');
Route::get('/services', fn () => $renderWebsite6('services', 'Services'))->name('services');
Route::get('/team', fn () => $renderWebsite6('team', 'Team'))->name('team');
Route::get('/tours', fn () => $renderWebsite6('tours', 'Tours'))->name('tours');
Route::get('/blogs', fn () => $renderWebsite6('blogs', 'Blogs'))->name('blogs');
Route::get('/blogs/{slug}', function (string $slug) use ($blogPosts, $renderWebsite6) {
    abort_unless(isset($blogPosts[$slug]), 404);

    $post = $blogPosts[$slug];

    return $renderWebsite6('blogs', $post['title'], [
        'blogSlug' => $slug,
        'blogMeta' => [
            'title' => $post['title'],
            'description' => $post['description'],
            'path' => "/blogs/{$slug}",
            'image' => $post['image'],
            'type' => 'article',
        ],
    ]);
})->name('blogs.show');
Route::get('/contact', fn () => $renderWebsite6('contact', 'Contact'))->name('contact');
Route::post('/booking-requests', [BookingRequestController::class, 'store'])->name('booking-requests.store');

Route::get('/sitemap.xml', function () use ($blogPosts) {
    $urls = [
        route('home'),
        route('profile'),
        route('services'),
        route('team'),
        route('tours'),
        route('blogs'),
        ...array_map(fn (string $slug) => route('blogs.show', ['slug' => $slug]), array_keys($blogPosts)),
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
