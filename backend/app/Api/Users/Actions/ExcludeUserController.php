<?php

namespace Api\Users\Actions;

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;

class ExcludeUserController extends UserController
{
    public function action(int $id)
    {
        return $this->repository->ExcludeUser($id);
    }
}
