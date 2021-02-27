<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\UseCases\User\UserList as UserListUseCases;
use Illuminate\Http\Request;
use App\Exceptions\RegistUserRoleException;

class UserList extends Controller
{
    public function __invoke(Request $request, UserListUseCases $useCase)
    {
        try {
            $users = $useCase->invoke($request->user()->role);

            return new UserCollection($users);
        } catch (RegistUserRoleException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        }
    }
}
