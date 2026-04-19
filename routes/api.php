<?php

use App\Http\Controllers\Api\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Api\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Api\Auth\NewPasswordController;
use App\Http\Controllers\Api\Auth\PasswordResetLinkController;
use App\Http\Controllers\Api\Auth\UserController;
use App\Http\Controllers\Api\Auth\VerifyEmailController;
use App\Http\Controllers\Api\BlogPostController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function (): void {
    Route::middleware('guest')->group(function (): void {
        Route::post('/login', [AuthenticatedSessionController::class, 'store'])
            ->name('api.auth.login');
        Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
            ->middleware('throttle:6,1')
            ->name('api.password.email');
        Route::post('/reset-password', [NewPasswordController::class, 'store'])
            ->middleware('throttle:6,1')
            ->name('api.password.store');
    });

    Route::middleware('auth:sanctum')->group(function (): void {
        Route::get('/user', [UserController::class, 'show'])->name('api.auth.user');
        Route::put('/user', [UserController::class, 'update'])->name('api.auth.user.update');
        Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('api.auth.logout');
        Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
            ->middleware('throttle:6,1')
            ->name('verification.send');
        Route::get('/email/verify/{id}/{hash}', VerifyEmailController::class)
            ->middleware(['signed', 'throttle:6,1'])
            ->name('verification.verify');
    });
});

Route::middleware(['auth:sanctum', 'permission:view dashboard'])->prefix('cms')->group(function (): void {
    Route::get('/blog-posts', [BlogPostController::class, 'index'])->name('api.cms.blog-posts.index');
    Route::post('/blog-posts', [BlogPostController::class, 'store'])
        ->middleware('permission:create posts')
        ->name('api.cms.blog-posts.store');
    Route::put('/blog-posts/{blogPost}', [BlogPostController::class, 'update'])
        ->middleware('permission:edit posts')
        ->name('api.cms.blog-posts.update');
    Route::patch('/blog-posts/{blogPost}/status', [BlogPostController::class, 'updateStatus'])
        ->name('api.cms.blog-posts.status');
    Route::delete('/blog-posts/{blogPost}', [BlogPostController::class, 'destroy'])
        ->middleware('permission:delete posts')
        ->name('api.cms.blog-posts.destroy');
});

Route::get('/public/blog-posts', [BlogPostController::class, 'publicIndex'])
    ->name('api.public.blog-posts.index');
