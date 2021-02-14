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
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // TODO とりあえず全取得 後日 ページネーション　実装 apiの名前見直し
    Route::get('/bookList', 'Api\Book\BookList')
        ->name('BookList');

    // TODO ルート名 書籍取得処理
    Route::get('/bookRetrieve', function (Request $request) {
        return ["未実装"];
    });

    // TODO ルート名 書籍登録処理
    Route::post('/bookRegister', function (Request $request) {
        return ["未実装"];
    });
});
