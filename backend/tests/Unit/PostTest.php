<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
use Tests\TestCase;

class PostTest extends TestCase
{
    public function testGettingPostThirdPartyApi() 
    {
        $response = $this->json('GET', '/api/posts');
        $response->assertStatus(200);        
        $response->assertJsonStructure(
            [
                [
                    'id',
                    'user_id',
                    'title',
                    'body'                    
                ]
            ]
        );
    }

    public function testGettingPostDetailsThirdPartyApi() 
    {
        $response = $this->json('GET', '/api/posts/?id=16260');
        $response->assertStatus(200);        

        $response->assertJsonStructure(
            [
                [
                    'id',
                    'user_id',
                    'title',
                    'body'                    
                ]
            ]
        );
    }

    public function testGettingPostUserThirdPartyApi() 
    {
        $response = $this->json('GET', '/api/posts/user/1265848/all');
        $response->assertStatus(200);        
        $response->assertJsonStructure(
            [
                [
                    'id',
                    'user_id',
                    'title',
                    'body'                    
                ]
            ]
        );
    }

    public function testGettingPostUserDetailsThirdPartyApi() 
    {
        $response = $this->json('GET', '/api/posts/user/1265848/post/?id=16260');
        $response->assertStatus(200);        

        $response->assertJsonStructure(
            [
                [
                    'id',
                    'user_id',
                    'title',
                    'body'                    
                ]
            ]
        );
    }


    public function testCreatePostThirdPartyApi()
    {
        $numberRand = rand();
        $data = [
            'user_id' => 1265848,
            'title' => 'Marvel Melhor do que DC '.$numberRand,
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ex vel nisl commodo posuere. Sed suscipit, purus in semper'
        ];

        $response = $this->json('POST', '/api/posts/user/1265848/create', $data);
        $response->assertStatus(200);

        $response->assertJsonStructure(
            [
                'id',
                'user_id',
                'title',
                'body'
            ]
        );
    }   
}
