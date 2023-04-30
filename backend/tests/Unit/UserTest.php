<?php

namespace Tests\Unit;

use Tests\TestCase;

class UserTest extends TestCase
{
    public function testGettingUserThirdPartyApi() 
    {
        $response = $this->json('GET', '/api/users');
        $response->assertStatus(200);        
        $response->assertJsonStructure(
            [
                [
                    'id',
                    'name',
                    'email',
                    'gender',
                    'status'
                ]
            ]
        );
    }

    public function testGettingUserDetailsThirdPartyApi() 
    {
        $response = $this->json('GET', '/api/users/?id=1269210');
        $response->assertStatus(200);        

        $response->assertJsonStructure(
            [
                [
                    'id',
                    'name',
                    'email',
                    'gender',
                    'status'
                ]
            ]
        );
    }

    public function testCreateUserThirdPartyApi()
    {
        $numberRand = rand();
        $data = [
            'name' => 'New User Name '.$numberRand,
            'email' => 'inicie.test.'.$numberRand.'@mailinator.com',
            'gender' => 'male',
            'status' => 'active'
        ];

        $response = $this->json('POST', '/api/users', $data);
        $response->assertStatus(200);

        $response->assertJsonStructure(
            [
                'id',
                'name',
                'email',
                'gender',
                'status'
            ]
        );
    }

    public function testUpdateUserThirdPartyApi()
    {
        $numberRand = rand();
        $data = [
            'id' => 1269210,
            'name' => 'Update User Name',
            'email' => 'inicie.update.'.$numberRand.'@mailinator.com',
            'gender' => 'male',
            'status' => 'active'
        ];

        $response = $this->json('PUT', '/api/users/1269210', $data);
        $response->assertStatus(200);

        $response->assertJsonStructure([
                "email",
                "name",
                "gender",
                "status",
                "id"
        ]);
    }

    public function testDeleteUserThirdPartyApi()
    {
        // a API GO Rest não tem esse Metodo
        $response = $this->json('DELETE', '/api/users/1269210');
        $response->assertStatus(404);
    }
}