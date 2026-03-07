<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

foreach (['1', '2', '3', '4', '5', '6'] as $legacyPath) {
    Route::redirect("/{$legacyPath}", '/', 301);
}
