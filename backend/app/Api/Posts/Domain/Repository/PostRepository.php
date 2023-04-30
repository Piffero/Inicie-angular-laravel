<?php

namespace Api\Posts\Domain\Repository;

use Api\Posts\Domain\Interfaces\PostRepositoryInterface;
use Api\Posts\Domain\Validation\ChangePostValidate;
use Api\Posts\Domain\Validation\IdPostValidate;
use Api\Posts\Domain\Validation\StoredPostValidate;
use Api\Posts\Services\PostApiService;
use Api\Posts\Services\UserPostApiService;
use Illuminate\Http\Request;

class PostRepository implements PostRepositoryInterface
{    
    private PostApiService $_service;
    private UserPostApiService $_user_service;


    public function __construct()    
    {
        $this->_service = new PostApiService();
        $this->_user_service = new UserPostApiService();
    }

    // --------------------------------------------------------------------------------------------------
    // ----------------------------------- METODOS PARA POST SEM USUARIO --------------------------------
    // --------------------------------------------------------------------------------------------------

    // Get All Posts
    public function allPosts(): mixed {
        return $this->_service->listPosts();
    }

    // Get Post User details
    public function findPost(int $id): mixed {
        return $this->_service->viewPostsDetails($id);
    }
    

    // --------------------------------------------------------------------------------------------------
    // ------------------------------ METODOS PARA POST POR USUARIO VALIDAÇÃO ---------------------------
    // --------------------------------------------------------------------------------------------------

    // Get All User Posts
    public function allUserPosts(int $user_id): mixed {
        return $this->_user_service->listPosts($user_id);
    }  
    
    // Create a new Post
    public function storedUserPost(Request $request): mixed {
        $data = StoredPostValidate::exec($request);        
        return $this->_user_service->createNewPost($data);
    }
}