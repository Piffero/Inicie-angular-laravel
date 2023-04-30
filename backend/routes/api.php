<?php

use Api\Comments\Actions\ChangeCommentController;
use Api\Comments\Actions\ExcludeCommentController;
use Api\Comments\Actions\ListCommentController;
use Api\Comments\Actions\StoredCommentController;
use Api\Posts\Actions\ListPostController;
use Api\Posts\Actions\StoredPostController;
use Api\Users\Actions\ChangeUserController;
use Api\Users\Actions\ExcludeUserController;
use Api\Users\Actions\ListUserController;
use Api\Users\Actions\StoredUserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => ['cors']], function() {

    // --------------------------------------------------------------------------------------------------
    // ---------------------------------------- ROTAS MODULO USUARIO ------------------------------------
    // --------------------------------------------------------------------------------------------------

    Route::get('/users', [ListUserController::class, 'action']);
    Route::post('/users', [StoredUserController::class, 'action']);
    Route::get('/users/{id}', [ListUserController::class, 'action']);
    Route::put('/users/{id}', [ChangeUserController::class, 'action']);    
    Route::delete('/users/{id}', [ExcludeUserController::class, 'action']);


    // --------------------------------------------------------------------------------------------------
    // ----------------------------------------- ROTAS MODULO POSTS -------------------------------------
    // --------------------------------------------------------------------------------------------------

    Route::get('/posts', [ListPostController::class, 'action']);
    Route::get('/posts/{id}', [ListPostController::class, 'action']);
        
    Route::get('/posts/user/{user_id}/all', [ListPostController::class, 'actionUser']);    
    Route::post('/posts/user/{user_id}/create', [StoredPostController::class, 'action']);
    Route::get('/posts/user/{user_id}/post/{id?}', [ListPostController::class, 'actionUser']);        
    


    // --------------------------------------------------------------------------------------------------
    // ---------------------------------------- ROTAS MODULO COMMENTS -----------------------------------
    // --------------------------------------------------------------------------------------------------

    Route::get('/comments', [ListCommentController::class, 'action']);
    Route::put('/comments/{id}', [ChangeCommentController::class, 'action']);

    Route::get('/comments/post/{post_id}/all', [ListCommentController::class, 'actionPost']);
    Route::post('/comments/post/{post_id}/create', [StoredCommentController::class, 'action']);
    Route::delete('/comment/post/{post_id}/comment/{id}', [ExcludeCommentController::class, 'action']);

});