<?php

namespace App\UseCases\User;

use App\Models\User;
use App\Enums\UserRoleType;
use App\Exceptions\RegistUserRoleException;
use Illuminate\Support\Collection;

class UserList
{
    /**
     * @param int $role
     * @return Collection
     * @throws RegistUserRoleException
     */
    public function invoke(int $role): Collection
    {
        // if ($role != UserRoleType::ADMIN) {
        //     throw new RegistUserRoleException();
        // }

        return User::all();
    }
}
