<?php

namespace Api\Comments\Services;

use App\Models\ApiToken;
use GuzzleHttp\Client;

class CommentApiService
{
    

    private string $baseUrl = 'https://gorest.co.in/public/v2/comments';

    /** Get All Comment 
     * Obtem a lista de todos os usuários
     * @return mixed 
     */ 
    public function listComments() {        
        $httpClient = new Client();

        $request = $httpClient->get($this->baseUrl, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    // Get Comment details
    public function viewCommentsDetails(int $id) {
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $id;

        $request = $httpClient->get($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    // Delete Comment
    public function ExcludeComment(int $id) {
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $id;

        $request = $httpClient->put($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);
        $response = json_decode($request->getBody()->getContents());
        return $response;
    }
    
}
