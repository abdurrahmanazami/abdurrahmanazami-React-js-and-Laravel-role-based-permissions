<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\PermissionController;
use App\Http\Controllers\Api\PostController;

Route::post('/login', function (Request $r) {
if (!Auth::attempt($r->only('email','password'))) {
return response()->json(['message'=>'Invalid credentials'],401);
}


$user = Auth::user();


return response()->json([
'token' => $user->createToken('auth')->plainTextToken,
'user' => $user->load('roles','permissions')
]);
});


Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return $request->user()->load('roles', 'permissions');
});


Route::middleware(['auth:sanctum','role:admin'])->group(function () {
Route::post('/admin/users',[UserController::class,'store']);
Route::post('/admin/users/{user}/permissions',[PermissionController::class,'assign']);
});


Route::middleware(['auth:sanctum','permission:create post'])->post('/posts',[PostController::class,'store']);
Route::middleware(['auth:sanctum','permission:delete post'])->delete('/posts/{post}',[PostController::class,'destroy']);
Route::middleware(['auth:sanctum','role:admin'])->group(function () {
    Route::post('/admin/users', [UserController::class, 'store']);
});