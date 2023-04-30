<?php

namespace Api\Comments\Actions;

use App\Http\Controllers\CommentController;

class ListCommentController extends CommentController
{
    public function action(int $id = null)
    {       
        // Verifica se Id veio
        if (!empty($id)){                        
            return $this->repository->findComment($id);
        }
        
        return $this->repository->allComments();
    }

    public function actionPost(int $post_id) {
        return $this->repository->allPostComments($post_id);
    }
}
