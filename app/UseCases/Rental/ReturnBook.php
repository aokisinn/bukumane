<?php

namespace App\UseCases\Rental;

use App\Models\User;
use App\Models\Rental;
use App\Enums\RentalStateType;
use App\Exceptions\NotExistsRentalBorrowBookException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Carbon\Carbon;

class ReturnBook
{
    /**
     * @param integer $currentUserId
     * @param integer $bookId
     * @param Carbon $returnDate
     * @return bool
     * @throws NotExistsRentalBorrowBookException
     */
    public function invoke(int $currentUserId, string $bookId, Carbon $returnDate): bool
    {
        $rental = $this->rerativeRental($currentUserId, $bookId);
        if (!$rental) {
            throw new NotExistsRentalBorrowBookException();
        }

        $rental->state = RentalStateType::RETURN;
        $rental->return_date = $returnDate;
        $rental->save();

        return true;
    }

    /**
     * @param integer $currentUserId
     * @param string $bookId
     * @return Rental|null
     */
    private function rerativeRental(int $currentUserId, string $bookId): ?Rental
    {
        return Rental::where('user_id', $currentUserId)
            ->where('book_id', $bookId)
            ->where('state', RentalStateType::BORROW)
            ->first();
    }
}
