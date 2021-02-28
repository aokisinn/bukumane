<?php

namespace App\UseCases\Rental;

use App\Models\Rental;
use App\Enums\RentalStateType;
use App\Exceptions\ExistsRentalBorrowBookException;
use Carbon\Carbon;

class BorrowBook
{
    /**
     * @param integer $currentUserId
     * @param integer $bookId
     * @param Carbon $borrowDate
     * @return bool
     * @throws ExistsRentalBorrowBookException
     */
    public function invoke(int $currentUserId, string $bookId, Carbon $borrowDate): bool
    {

        if ($this->isBorrowing($currentUserId, $bookId)) {
            throw new ExistsRentalBorrowBookException();
        }

        $rental = new Rental();
        $rental->user_id = $currentUserId;
        $rental->book_id = $bookId;
        $rental->state = RentalStateType::BORROW;
        $rental->borrow_date = $borrowDate;
        $rental->save();
        return true;
    }

    private function isBorrowing(int $currentUserId, string $bookId): bool
    {
        return Rental::where('user_id', $currentUserId)
            ->where('book_id', $bookId)
            ->where('state', RentalStateType::BORROW)
            ->exists();
    }
}
