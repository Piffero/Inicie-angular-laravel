<?php

namespace Api\Posts\Services;

use App\Models\ApiToken;
use GuzzleHttp\Client;

class UserPostApiService
{
    private string $baseUrl = 'https://gorest.co.in/public/v2/users';

    /** Get All Post 
     * Obtem a lista de todos os post de um determinado usuários
     * @return mixed 
     */ 
    public function listPosts(int $user_id) {        
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $user_id . '/posts';

        $request = $httpClient->get($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    // Create a new Post
    public function createNewPost(array $data) {
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $data['user_id'] . '/posts';

        $request = $httpClient->post($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()],
            'form_params' => $data
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }   

}
