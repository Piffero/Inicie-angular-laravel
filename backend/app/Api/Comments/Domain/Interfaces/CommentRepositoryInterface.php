<?php

namespace Api\Comments\Domain\Interfaces;

use Illuminate\Http\Request;

Interface CommentRepositoryInterface 
{
    public function allComments(): mixed;
    public function findComment(int $id): mixed;

    public function allPostComments(int $post_id): mixed;
    public function storedPostComment(Request $request): mixed;    
    public function ExcludePostComment(int $post_id, int $id): mixed;
}
