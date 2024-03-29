<?php

namespace Api\Users\Domain\Interfaces;

use Illuminate\Http\Request;

Interface UserRepositoryInterface 
{
    public function allUsers(): mixed;
    public function storedUser(Request $request): mixed;
    public function findUser(int $id): mixed;
    public function changeUser(Request $request, int $id): mixed;
    public function ExcludeUser(int $id): mixed;
}
