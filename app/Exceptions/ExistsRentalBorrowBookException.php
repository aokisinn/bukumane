<?php

namespace App\Exceptions;

use Exception;

class ExistsRentalBorrowBookException extends Exception
{
    public function __construct()
    {
        $message = "既に貸し出し中です";

        parent::__construct($message);
    }
}
