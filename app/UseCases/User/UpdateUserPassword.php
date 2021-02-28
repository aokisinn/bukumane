<?php

namespace App\UseCases\User;

use App\Models\User;
use App\Exceptions\NotUserUpdatepPrmissionException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Hash;

class UpdateUserPassword
{
    /**
     * @param integer $currentUserId
     * @param integer $updateUserId
     * @param string $password
     * @return bool
     * @throws NotUserUpdatepPrmissionException
     * @throws ModelNotFoundException
     */
    public function invoke(int $currentUserId, int $updateUserId, string $password): bool
    {
        if ($currentUserId != $updateUserId) {
            throw new NotUserUpdatepPrmissionException();
        }

        $user = User::findorfail($updateUserId);
        $user->password = Hash::make($password);
        $user->update();

        return true;
    }
}
