<?php

namespace App\Exceptions;

use Exception;

class RegistUserExistException extends Exception
{
    public function __construct()
    {
        $message = "既に存在するユーザーです。";

        parent::__construct($message);
    }
}
