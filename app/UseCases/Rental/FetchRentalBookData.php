<?php

namespace App\UseCases\Rental;

use App\Models\Rental;
use Illuminate\Support\Collection;

class FetchRentalBookData
{
    /**
     * @param string $bookId
     * @return Collection
     */
    public function invoke(string $bookId): ?Collection
    {
        return Rental::with('user')->where('book_id', $bookId)
            ->orderBy('borrow_date', 'desc')
            ->get();
    }
}
