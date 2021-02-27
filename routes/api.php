<?php

use Illuminate\Http\Request;
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

Route::post('/login', 'Api\User\UserLogin')
    ->name('UserLogin');


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', 'Api\User\Me')
        ->name('Me');

    // TODO とりあえず全取得 後日 ページネーション　実装 apiの名前見直し
    Route::get('/bookList', 'Api\Book\BookList')
        ->name('BookList');

    Route::post('/searchRegisterBook', 'Api\Book\SearchRegisterBook')
        ->name('SearchRegisterBook');

    Route::post('/registerBook', 'Api\Book\RegisterBook')
        ->name('RegisterBook');

    Route::post('/registerUser', 'Api\User\RegisterUser')
        ->name('RegisterUser');

    Route::get('/userList', 'Api\User\UserList')
        ->name('UserList');

    Route::post('/updateUserPassword', 'Api\User\UpdateUserPassword')
        ->name('UpdateUserPassword');
});
