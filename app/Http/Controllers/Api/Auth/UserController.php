<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\UpdateProfileRequest;
use App\Http\Resources\AuthUserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function show(Request $request): JsonResponse
    {
        return response()->json([
            'user' => AuthUserResource::make($request->user())->resolve(),
        ]);
    }

    public function update(UpdateProfileRequest $request): JsonResponse
    {
        $user = $request->user();
        $validated = $request->validated();
        unset($validated['avatar']);

        if ($validated['email'] !== $user->email) {
            $validated['email_verified_at'] = null;
        }

        if ($request->hasFile('avatar')) {
            if (Str::startsWith((string) $user->avatar_url, '/storage/')) {
                Storage::disk('public')->delete(Str::after((string) $user->avatar_url, '/storage/'));
            }

            $path = $request->file('avatar')->store('avatars', 'public');
            $validated['avatar_url'] = Storage::url($path);
        }

        $user->fill($validated);
        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully.',
            'user' => AuthUserResource::make($user->fresh())->resolve(),
        ]);
    }
}
