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
     * @param string $email
     * @param string $name
     * @param string $password
     * @param string $role
     * @return User
     * @throws RegistUserExistException
     * @throws RegistUserRoleException
     */
    public function invoke(int $currentUserRole, string $email, string $name, string $password, string $role): User
    {
        if ($currentUserRole != UserRoleType::ADMIN) {
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
        $user->password = Hash::make($password);
        $user->save();

        return $user;
    }
}
