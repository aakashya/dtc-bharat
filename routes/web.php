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
    'future-of-corporate-mobility-2024' => [
        'title' => 'The Future of Corporate Mobility in 2024',
        'description' => 'How AI and sustainable energy are reshaping the way enterprises manage employee transportation.',
        'image' => 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
    ],
    'female-safety-our-top-priority' => [
        'title' => 'Female Safety: Our Top Priority',
        'description' => 'A deep dive into the protocols and technology we use to ensure every night drop is 100% safe.',
        'image' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop',
    ],
    'optimizing-fleet-efficiency-with-ai' => [
        'title' => 'Optimizing Fleet Efficiency with AI',
        'description' => 'How our proprietary routing algorithms reduce travel time by up to 25% for our corporate partners.',
        'image' => 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    ],
    'choosing-the-right-fleet-for-your-office' => [
        'title' => 'Choosing the Right Fleet for Your Office',
        'description' => 'A guide to selecting between hatchbacks, sedans, and buses based on employee density and routes.',
        'image' => 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop',
    ],
    'rise-of-electric-vehicles-in-corporate-travel' => [
        'title' => 'The Rise of Electric Vehicles in Corporate Travel',
        'description' => 'Why DTC Bharat is investing heavily in EV infrastructure for a greener tomorrow.',
        'image' => 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop',
    ],
    'maintaining-professionalism-driver-training' => [
        'title' => 'Maintaining Professionalism: Driver Training',
        'description' => 'Behind the scenes of our rigorous in-house training programs for our mobility partners.',
        'image' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop',
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
