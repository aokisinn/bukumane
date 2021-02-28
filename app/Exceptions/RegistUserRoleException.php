<?php

namespace App\Exceptions;

use Exception;

class RegistUserRoleException extends Exception
{
    public function __construct()
    {
        $message = "ユーザを作成する権限がありません";

        parent::__construct($message);
    }
}
