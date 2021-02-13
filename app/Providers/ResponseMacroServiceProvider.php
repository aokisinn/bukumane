<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class ResponseMacroServiceProvider extends ServiceProvider
{
    /**
     * アプリケーションのレスポンスマクロ登録
     *
     * @return void
     */
    public function boot(): void
    {
        Response::macro('apiError', function (string $message, array $errors = [], $httpStatus = 400) {
            return response()->json(
                [
                    'message' => $message,
                    'errors' => $errors
                ],
                $httpStatus
            );
        });
    }
}
