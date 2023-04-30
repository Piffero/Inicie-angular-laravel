<?php

namespace Api\Comments\Domain\Repository;

use Api\Comments\Domain\Interfaces\CommentRepositoryInterface;
use Api\Comments\Domain\Validation\ChangeCommentValidate;
use Api\Comments\Domain\Validation\IdCommentValidate;
use Api\Comments\Domain\Validation\StoredCommentValidate;
use Api\Comments\Services\CommentApiService;
use Api\Comments\Services\PostCommentApiService;
use Illuminate\Http\Request;

class CommentRepository implements CommentRepositoryInterface
{
    private CommentApiService $_service;
    private PostCommentApiService $_post_service;

    public function __construct()    
    {
        $this->_service = new CommentApiService();
        $this->_post_service = new PostCommentApiService();
    }

    // --------------------------------------------------------------------------------------------------
    // ----------------------------------- METODOS PARA COMMENT SEM POST --------------------------------
    // --------------------------------------------------------------------------------------------------

    // Get All Comments
    public function allComments(): mixed {
        return $this->_service->listComments();
    }

    // Get Comment details
    public function findComment(int $id): mixed {
        return $this->_service->viewCommentsDetails($id);
    }

    // --------------------------------------------------------------------------------------------------
    // ---------------------------- METODOS PARA COMMENT POR POST VALIDAÇÃO --------------------------
    // --------------------------------------------------------------------------------------------------

    // Get All Comments
    public function allPostComments(int $post_id): mixed {
        return $this->_post_service->listComments($post_id);
    }    

    // Create a new Comment
    public function storedPostComment(Request $request): mixed {
        $data = StoredCommentValidate::exec($request);
        return $this->_post_service->createNewComment($data);
    }    

    // Delete Comment Post
    public function ExcludePostComment(int $post_id, int $id): mixed {
        $id = IdCommentValidate::exec($id)['id'];
        $post_id = IdCommentValidate::exec($post_id)['id'];
        return $this->_post_service->ExcludeComment($post_id, $id);
    }

}