<?php

namespace App\Exceptions;

use Exception;

class NotFoundBookException extends Exception
{
    public function __construct()
    {
        $message = "書籍情報が見つかりませんでした。";

        parent::__construct($message);
    }
}
