<?php

namespace App\UseCases\Sanctum;

use App\Models\User;
use App\Exceptions\AuthenticationException;

class UserLogin
{
    /**
     * @param string $loginId
     * @param string $password
     * @return User
     * @throws AuthenticationException
     */
    public function invoke(string $loginId, string $password): User
    {
        if (auth()->attempt([
            'login_id' => $loginId,
            'password' => $password
        ])) {
            return $this->retrieveUser($loginId, $password);
        } else {
            throw new AuthenticationException();
        }
    }

    /**
     * @param string $loginId
     * @param string $password
     * @return User
     */
    private function retrieveUser(string $loginId, string $password): User
    {
        $user = User::query()
            ->where('login_id', '=', $loginId)
            ->first();

        return $user;
    }
}
