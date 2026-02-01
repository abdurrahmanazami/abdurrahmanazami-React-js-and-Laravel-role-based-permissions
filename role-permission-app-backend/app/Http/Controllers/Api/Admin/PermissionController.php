<?php


namespace App\Http\Controllers\Api\Admin;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;


class PermissionController extends Controller
{
public function assign(Request $r, User $user)
{
$user->syncPermissions($r->permissions);
return response()->json(['message'=>'Permissions updated']);
}
}