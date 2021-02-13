<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\UseCases\Sanctum\UserLogin as UserLoginSanctum;

class UserLogin extends Controller
{
    public function __invoke(UserLoginRequest $request, UserLoginSanctum $useCase)
    {
        // TODO User 情報 例外処理追加
        return $useCase->invoke(
            $request->get('email'),
            $request->get('password')
        ) ? response()
            ->json(['user' => ""]) : response()->apiError("IDもしくはPASSWORDが間違っています。", [], 401);
    }
}
