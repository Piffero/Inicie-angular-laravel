<?php

namespace Api\Comments\Actions;

use App\Http\Controllers\CommentController;

class ExcludeCommentController extends CommentController
{
    public function action(int $post_id, int $id)
    {
        return $this->repository->ExcludePostComment($post_id, $id);
    }
}
