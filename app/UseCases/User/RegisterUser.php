<?php

namespace App\UseCases\User;

use App\Models\User;
use App\Enums\UserRoleType;
use App\Exceptions\RegistUserExistException;
use App\Exceptions\RegistUserRoleException;
use Illuminate\Support\Facades\Hash;

class RegisterUser
{
    /**
     * @param int $currentUserRole
     * @param string $loginId
     * @param string $password
     * @param string $role
     * @return User
     * @throws RegistUserExistException
     * @throws RegistUserRoleException
     */
    public function invoke(int $currentUserRole, string $loginId, string $password, string $role): User
    {
        if ($currentUserRole != UserRoleType::ADMIN) {
            throw new RegistUserRoleException();
        }

        if (User::query()
            ->where('login_id', '=', $loginId)->exists()
        ) {
            throw new RegistUserExistException();
        }

        $user = new User();
        $user->role = $role;
        $user->login_id = $loginId;
        $user->password = Hash::make($password);
        $user->save();

        return $user;
    }
}
