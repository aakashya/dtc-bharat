<?php

namespace App\Policies;

use App\Enums\BlogPostStatus;
use App\Models\BlogPost;
use App\Models\User;

class BlogPostPolicy
{
    public function before(User $user, string $ability): bool|null
    {
        return $user->hasRole('super_admin') ? true : null;
    }

    public function viewAny(User $user): bool
    {
        return $user->can('view dashboard');
    }

    public function create(User $user): bool
    {
        return $user->can('create posts');
    }

    public function update(User $user, BlogPost $blogPost): bool
    {
        return $user->can('edit posts');
    }

    public function delete(User $user, BlogPost $blogPost): bool
    {
        return $user->can('delete posts');
    }

    public function transitionStatus(User $user, BlogPost $blogPost, BlogPostStatus $status): bool
    {
        return match ($status) {
            BlogPostStatus::PUBLISHED, BlogPostStatus::DRAFT => $user->can('publish posts'),
            BlogPostStatus::ARCHIVED => $user->can('archive posts'),
        };
    }
}
