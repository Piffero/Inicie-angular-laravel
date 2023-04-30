<?php

namespace Api\Posts\Domain\Interfaces;

use Illuminate\Http\Request;

Interface PostRepositoryInterface 
{
    public function allPosts(): mixed;
    public function findPost(int $id): mixed;
    
    public function allUserPosts(int $user_id): mixed;    
    public function storedUserPost(Request $request): mixed;    
}
