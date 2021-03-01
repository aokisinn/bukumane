<?php

namespace App\UseCases\User;

use App\Models\User;
use App\Exceptions\NotUserUpdatepPrmissionException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UpdateUser
{
    /**
     * @param integer $currentUserId
     * @param integer $updateUserId
     * @param string $name
     * @return User
     * @throws NotUserUpdatepPrmissionException
     * @throws ModelNotFoundException
     */
    public function invoke(int $currentUserId, int $updateUserId): User
    {
        if ($currentUserId != $updateUserId) {
            throw new NotUserUpdatepPrmissionException();
        }

        $user = User::findorfail($updateUserId);
        $user->update();

        return $user;
    }
}
