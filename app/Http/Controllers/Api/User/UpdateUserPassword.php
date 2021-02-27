<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\UseCases\User\UpdateUserPassword as UpdateUserPasswordUseCases;
use App\Http\Requests\UpdateUserPasswordRequest;
use App\Exceptions\NotUserUpdatepPrmissionException;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class UpdateUserPassword extends Controller
{
    public function __invoke(UpdateUserPasswordRequest $request, UpdateUserPasswordUseCases $useCase)
    {
        try {
            return $useCase->invoke(
                $request->user()->id,
                $request->get('userId'),
                $request->get('password')
            );
        } catch (NotUserUpdatepPrmissionException | ModelNotFoundException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        }
    }
}
