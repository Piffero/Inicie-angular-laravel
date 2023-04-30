<?php

namespace Api\Users\Services;

use App\Models\ApiToken;
use GuzzleHttp\Client;

class UserApiService
{
    private string $baseUrl = 'https://gorest.co.in/public/v2/users';

    /** Get All User 
     * Obtem a lista de todos os usuários
     * @return mixed 
     */ 
    public function listUsers() {
        $httpClient = new Client();        
        $request = $httpClient->get($this->baseUrl, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    // Create a new user
    public function createNewUser(array $data) {
        $httpClient = new Client();

        $request = $httpClient->post($this->baseUrl, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()],
            'form_params' => $data
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    // Get user details
    public function viewUsersDetails(int $id) {
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $id;

        $request = $httpClient->get($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()],
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    //Update user details
    public function changeUser(array $data, int $id) {
        $httpClient = new Client();        
        $url = $this->baseUrl . '/' . $id;

        $request = $httpClient->put($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()],
            'form_params' => $data
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    // Delete User
    public function ExcludeUser(int $id) {
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $id;

        $request = $httpClient->delete($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()],
        ]);
        
        $response = json_decode($request->getBody()->getContents());
        return $response;
    }
    
}
