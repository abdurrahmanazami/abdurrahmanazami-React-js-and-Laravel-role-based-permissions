<?php


namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class RolesAndPermissionsSeeder extends Seeder
{
public function run()
{
app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();


$permissions = [
'create post','edit post','delete post',
'create category','edit category','delete category'
];


foreach ($permissions as $p) {
Permission::firstOrCreate(['name'=>$p]);
}


Role::firstOrCreate(['name'=>'admin'])->givePermissionTo(Permission::all());
Role::firstOrCreate(['name'=>'manager']);
Role::firstOrCreate(['name'=>'user']);
}
}