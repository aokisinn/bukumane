<?php

namespace App\UseCases\Sanctum;

class UserLogin
{
    /**
     * @param string $address
     * @param string $password
     * @throws bool
     */
    public function invoke(string $address, string $password): bool
    {
        return auth()->attempt([
            'email' => $address,
            'password' => $password
        ]);
    }
}
