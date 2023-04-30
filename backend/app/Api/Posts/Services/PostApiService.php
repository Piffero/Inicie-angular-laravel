<?php

namespace Api\Posts\Services;

use App\Models\ApiToken;
use GuzzleHttp\Client;

class PostApiService
{
    

    private string $baseUrl = 'https://gorest.co.in/public/v2/posts';

    /** Get All Post 
     * Obtem a lista de todos os usuários
     * @return mixed 
     */ 
    public function listPosts() {        
        $httpClient = new Client();

        $request = $httpClient->get($this->baseUrl, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    public function viewPostsDetails(int $id) {        
        $httpClient = new Client();

        $request = $httpClient->get($this->baseUrl.'/'.$id, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

}
