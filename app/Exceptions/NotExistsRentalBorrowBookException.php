<?php

namespace App\Exceptions;

use Exception;

class NotExistsRentalBorrowBookException extends Exception
{
    public function __construct()
    {
        $message = "貸し出し中の書籍は存在しません";

        parent::__construct($message);
    }
}
