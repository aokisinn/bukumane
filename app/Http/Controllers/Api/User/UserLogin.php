<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\UseCases\Sanctum\UserLogin as UserLoginSanctum;
use App\Http\Resources\User as UserResources;
use App\Exceptions\AuthenticationException;

class UserLogin extends Controller
{
    public function __invoke(UserLoginRequest $request, UserLoginSanctum $useCase)
    {
        try {
            $user = $useCase->invoke(
                $request->get('loginId'),
                $request->get('password')
            );

            return response()
                ->json(['user' => new UserResources($user)]);
        } catch (AuthenticationException $e) {
            return response()->apiError("IDもしくはPASSWORDが間違っています。", [], 401);
        }
    }
}
