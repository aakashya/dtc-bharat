<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $email = (string) env('SEED_SUPER_ADMIN_EMAIL', 'superadmin@example.com');
        $password = (string) env('SEED_SUPER_ADMIN_PASSWORD', 'ChangeMe123!@#');

        $user = User::firstOrCreate(
            ['email' => $email],
            [
                'name' => (string) env('SEED_SUPER_ADMIN_NAME', 'Super Admin Placeholder'),
                'password' => Hash::make($password),
                'email_verified_at' => now(),
                'phone' => '+91 90000 00000',
                'location' => 'New Delhi, India',
                'bio' => 'Replace this seeded account details before production launch.',
                'avatar_url' => 'https://api.dicebear.com/7.x/avataaars/svg?seed=SuperAdmin',
            ]
        );

        if (! $user->hasRole('super_admin')) {
            $user->assignRole('super_admin');
        }
    }
}
