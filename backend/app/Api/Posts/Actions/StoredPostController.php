<?php

namespace Api\Posts\Actions;

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;

class StoredPostController extends PostController
{
    public function action(Request $request, int $user_id)
    {
        return $this->repository->storedUserPost($request, $user_id);
    }
}
