<?php

namespace Api\Users\Actions;

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;

class ChangeUserController extends UserController
{
    public function action(Request $request, int $id)
    {
        return $this->repository->changeUser($request, $id);
    }
}
