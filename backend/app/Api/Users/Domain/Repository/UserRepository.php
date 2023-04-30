<?php

namespace Api\Users\Domain\Repository;

use Api\Users\Domain\Interfaces\UserRepositoryInterface;
use Api\Users\Domain\Validation\ChangeUserValidate;
use Api\Users\Domain\Validation\IdUserValidate;
use Api\Users\Domain\Validation\StoredUserValidate;
use Api\Users\Services\UserApiService;
use Illuminate\Http\Request;

class UserRepository implements UserRepositoryInterface
{
    private UserApiService $_service;

    public function __construct()    
    {
        $this->_service = new UserApiService();
    }

    // Get All Users
    public function allUsers(): mixed {        
        return $this->_service->listUsers();
    }

    // Create a new user
    public function storedUser(Request $request): mixed {
        $data = StoredUserValidate::exec($request);
        return $this->_service->createNewUser($data);
    }

    // Get user details
    public function findUser(int $id): mixed {
        return $this->_service->viewUsersDetails($id);
    }

    // Update user details
    public function changeUser(Request $request, int $id): mixed {
        $data = ChangeUserValidate::exec($request);
        $id = IdUserValidate::exec($id)['id'];
        return $this->_service->changeUser($data, $id);
    }

    // Delete user
    public function ExcludeUser(int $id): mixed {
        $id = IdUserValidate::exec($id)['id'];
        return $this->_service->ExcludeUser($id);
    }

}