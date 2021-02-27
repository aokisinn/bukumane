<?php

namespace App\Exceptions;

use Exception;

class NotUserUpdatepPrmissionException extends Exception
{
    public function __construct()
    {
        $message = "ユーザ情報を更新する権限がありません";

        parent::__construct($message);
    }
}
