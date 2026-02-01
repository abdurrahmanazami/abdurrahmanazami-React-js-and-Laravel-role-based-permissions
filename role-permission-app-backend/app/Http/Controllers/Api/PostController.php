<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;


class PostController extends Controller
{
public function store(Request $r)
{
if (!auth()->user()->can('create post')) abort(403);


return Post::create([
'title'=>$r->title,
'content'=>$r->content,
'user_id'=>auth()->id()
]);
}


public function destroy(Post $post)
{
if (!auth()->user()->can('delete post')) abort(403);
$post->delete();
}
}