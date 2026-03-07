<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookingRequestController;

$renderWebsite6 = fn (string $activePage, string $pageTitle) => Inertia::render(
    'Websites/Website6/Index',
    [
        'activePage' => $activePage,
        'pageTitle' => $pageTitle,
    ],
);

Route::get('/', fn () => $renderWebsite6('home', 'Home'))->name('home');
Route::get('/profile', fn () => $renderWebsite6('profile', 'Profile'))->name('profile');
Route::get('/services', fn () => $renderWebsite6('services', 'Services'))->name('services');
Route::get('/team', fn () => $renderWebsite6('team', 'Team'))->name('team');
Route::get('/tours', fn () => $renderWebsite6('tours', 'Tours'))->name('tours');
Route::get('/contact', fn () => $renderWebsite6('contact', 'Contact'))->name('contact');
Route::post('/booking-requests', [BookingRequestController::class, 'store'])->name('booking-requests.store');

Route::get('/sitemap.xml', function () {
    $urls = [
        route('home'),
        route('profile'),
        route('services'),
        route('team'),
        route('tours'),
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
