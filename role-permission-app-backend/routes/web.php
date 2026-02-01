<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// OPTIONAL: only if you really need blade admin pages
Route::middleware(['role:admin'])->get('/admin/dashboard', function () {
    return "Admin Dashboard";
});
