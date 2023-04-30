<?php

namespace App\Http\Controllers;

use Api\Posts\Domain\Repository\PostRepository;

class PostController extends Controller
{
    protected PostRepository $repository;

    public function __construct()
    {
        $this->repository = new PostRepository();
    }
}