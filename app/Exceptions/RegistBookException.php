<?php

namespace App\Exceptions;

use Exception;

class RegistBookException extends Exception
{
    public function __construct()
    {
        $message = "書籍情報がDBに登録されています。";

        parent::__construct($message);
    }
}
