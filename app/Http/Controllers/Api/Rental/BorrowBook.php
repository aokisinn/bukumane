<?php

namespace App\Http\Controllers\Api\Rental;

use App\Http\Controllers\Controller;
use App\UseCases\Rental\BorrowBook as BorrowBookUseCases;
use App\Http\Requests\BorrowBookRequest;
use App\Exceptions\ExistsRentalBorrowBookException;
use Carbon\Carbon;

class BorrowBook extends Controller
{
    public function __invoke(BorrowBookRequest $request, BorrowBookUseCases $useCase)
    {
        try {
            return $useCase->invoke(
                $request->user()->id,
                $request->get('bookId'),
                Carbon::now()
            );
        } catch (ExistsRentalBorrowBookException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        }
    }
}
