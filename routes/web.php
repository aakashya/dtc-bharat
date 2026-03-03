<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

$websitePages = [
    '1' => 'Websites/Website1/Index',
    '2' => 'Websites/Website2/Index',
    '3' => 'Websites/Website3/Index',
    '5' => 'Websites/Website5/Index',
];

foreach ($websitePages as $slug => $page) {
    Route::get("/{$slug}", function () use ($page) {
        return Inertia::render($page);
    })->name("websites.{$slug}");
}

Route::view('/4', 'dtc')->name('websites.4');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
