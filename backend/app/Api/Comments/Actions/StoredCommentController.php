<?php

namespace Api\Comments\Actions;

use App\Http\Controllers\CommentController;
use Illuminate\Http\Request;

class StoredCommentController extends CommentController
{
    public function action(Request $request)
    {
        return $this->repository->storedPostComment($request);
    }
}
