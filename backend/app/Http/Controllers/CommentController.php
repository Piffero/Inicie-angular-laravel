<?php

namespace App\Http\Controllers;

use Api\Comments\Domain\Repository\CommentRepository;

class CommentController extends Controller
{
    protected CommentRepository $repository;

    public function __construct()
    {
        $this->repository = new CommentRepository();
    }
}