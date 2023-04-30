<?php

namespace Tests\Unit;

use Tests\TestCase;

class CommentTest extends TestCase
{
    public function testGettingCommentThirdPartyApi() 
    {
        $response = $this->json('GET', '/api/comments');
        $response->assertStatus(200);        
        $response->assertJsonStructure(
            [
                [
                    'id',
                    'post_id',
                    'name',
                    'email',
                    'body'
                ]
            ]
        );
    }

    public function testGettingCommentPostThirdPartyApi() 
    {
        $response = $this->json('GET', '/api/comments/post/16401/all');
        $response->assertStatus(200);        

        $response->assertJsonStructure(
            [
                [
                    'id',
                    'post_id',
                    'name',
                    'email',
                    'body'
                ]
            ]
        );
    }

    public function testCreateCommentThirdPartyApi()
    {
        $numberRand = rand();
        $data = [
            'post_id' => 16401,
            'name' => 'Fulano da Silva '.$numberRand,
            'email' => 'inicie.test.'.$numberRand.'@mailinator.com',
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ex vel nisl commodo posuere. Sed suscipit, purus in semper'
        ];

        $response = $this->json('POST', '/api/comments/post/16401/create', $data);
        $response->assertStatus(200);

        $response->assertJsonStructure(
            [
                'post_id',
                'name',
                'email',
                'body',
                'id'
            ]
        );
    }

    public function testDeleteCommentPostThirdPartyApi()
    {
        // a API GO Rest não tem esse Metodo
        $response = $this->json('DELETE', '/api/comment/post/16401/comment/23009');
        $response->assertStatus(404);
    }
}
