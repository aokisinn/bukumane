<?php

namespace App\UseCases\Sanctum;

use App\Models\User;
use App\Exceptions\AuthenticationException;

class UserLogin
{
    /**
     * @param string $email
     * @param string $password
     * @return User
     * @throws AuthenticationException
     */
    public function invoke(string $email, string $password): User
    {
        if (auth()->attempt([
            'email' => $email,
            'password' => $password
        ])) {
            return $this->retrieveUser($email, $password);
        } else {
            throw new AuthenticationException();
        }
    }

    /**
     * @param string $email
     * @param string $password
     * @return User
     */
    private function retrieveUser(string $email, string $password): User
    {
        $user = User::query()
            ->where('email', '=', $email)
            ->first();

        return $user;
    }
}
