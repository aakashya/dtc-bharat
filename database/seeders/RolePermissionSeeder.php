<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app(PermissionRegistrar::class)->forgetCachedPermissions();

        $permissions = [
            'view dashboard',
            'manage users',
            'manage roles',
            'manage permissions',
            'create posts',
            'edit posts',
            'publish posts',
            'archive posts',
            'delete posts',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate([
                'name' => $permission,
                'guard_name' => 'web',
            ]);
        }

        $superAdminRole = Role::firstOrCreate([
            'name' => 'super_admin',
            'guard_name' => 'web',
        ]);
        $adminRole = Role::firstOrCreate([
            'name' => 'admin',
            'guard_name' => 'web',
        ]);
        $editorRole = Role::firstOrCreate([
            'name' => 'editor',
            'guard_name' => 'web',
        ]);

        $allPermissions = Permission::query()->pluck('name')->all();

        $superAdminRole->syncPermissions($allPermissions);

        $adminRole->syncPermissions([
            'view dashboard',
            'manage users',
            'manage roles',
            'manage permissions',
            'create posts',
            'edit posts',
            'publish posts',
            'archive posts',
            'delete posts',
        ]);

        $editorRole->syncPermissions([
            'view dashboard',
            'create posts',
            'edit posts',
            'publish posts',
            'archive posts',
        ]);

        app(PermissionRegistrar::class)->forgetCachedPermissions();
    }
}
