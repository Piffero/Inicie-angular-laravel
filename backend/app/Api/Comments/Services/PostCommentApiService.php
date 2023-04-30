<?php

namespace Api\Comments\Services;

use App\Models\ApiToken;
use GuzzleHttp\Client;

class PostCommentApiService
{
    private string $baseUrl = 'https://gorest.co.in/public/v2/posts';

    /** Get All Comment 
     * Obtem a lista de todos os Comment de um determinado usuários
     * @return mixed 
     */ 
    public function listComments(int $post_id) {        
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $post_id . '/comments';
        
        $request = $httpClient->get($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    // Create a new Comment
    public function createNewComment(array $data) {
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $data['post_id'] . '/comments';

        $request = $httpClient->post($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()],
            'form_params' => $data
        ]);

        $response = json_decode($request->getBody()->getContents());
        return $response;
    }

    // Delete Comment
    public function ExcludeComment(int $post_id, int $id) {
        $httpClient = new Client();
        $url = $this->baseUrl . '/' . $post_id . '/comments' . '/' . $id;

        $request = $httpClient->delete($url, [
            'headers' => ['Authorization' => 'Bearer ' . ApiToken::getToken()]
        ]);
        $response = json_decode($request->getBody()->getContents());
        return $response;
    }
    
}
