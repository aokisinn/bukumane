<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\UseCases\User\UpdateUser as UpdateUserUseCases;
use App\Http\Requests\UpdateUserRequest;
use App\Exceptions\NotUserUpdatepPrmissionException;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class UpdateUser extends Controller
{
    public function __invoke(UpdateUserRequest $request, UpdateUserUseCases $useCase)
    {
        try {
            return $useCase->invoke(
                $request->user()->id,
                $request->get('userId'),
                $request->get('name')
            );
        } catch (NotUserUpdatepPrmissionException | ModelNotFoundException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        }
    }
}
