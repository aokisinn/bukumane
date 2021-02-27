<?php

namespace App\UseCases\User;

use App\Models\User;
use App\Enums\UserRoleType;
use App\Exceptions\RegistUserExistException;
use App\Exceptions\RegistUserRoleException;

class RegisterUser
{
    /**
     * @param int $role
     * @param string $email
     * @param string $name
     * @param string $password
     * @return User
     * @throws RegistUserExistException
     * @throws RegistUserRoleException
     */
    public function invoke(int $role, string $email, string $name, string $password): User
    {
        if ($role != UserRoleType::ADMIN) {
            throw new RegistUserRoleException();
        }

        if (User::query()
            ->where('email', '=', $email)->exists()
        ) {
            throw new RegistUserExistException();
        }

        $user = new User();
        $user->role = UserRoleType::GENERAL;
        $user->name = $name;
        $user->email = $email;
        $user->password = \Hash::make($password);
        $user->save();

        return $user;
    }
}
