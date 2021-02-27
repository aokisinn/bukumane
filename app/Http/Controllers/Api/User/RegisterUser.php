<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use App\UseCases\User\RegisterUser as RegisterUserUseCases;
use App\Http\Resources\User as UserResources;
use App\Exceptions\RegistUserExistException;
use App\Exceptions\RegistUserRoleException;
use App\Models\User;
use App\Enums\UserRoleType;

class RegisterUser extends Controller
{
    public function __invoke(RegisterUserRequest $request, RegisterUserUseCases $useCase)
    {
        try {
            $user = $useCase->invoke(
                UserRoleType::ADMIN,
                $request->get('email'),
                $request->get('name'),
                $request->get('password')
            );

            return response()
                ->json(['user' => new UserResources($user)]);
        } catch (RegistUserRoleException | RegistUserExistException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        }
    }
}
