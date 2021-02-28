<?php

namespace App\Http\Controllers\Api\Rental;

use App\Http\Controllers\Controller;
use App\UseCases\Rental\ReturnBook as ReturnBookUseCases;
use App\Http\Requests\ReturnBookRequest;
use App\Exceptions\NotExistsRentalBorrowBookException;
use Carbon\Carbon;

class ReturnBook extends Controller
{
    public function __invoke(ReturnBookRequest $request, ReturnBookUseCases $useCase)
    {
        try {
            return $useCase->invoke(
                $request->user()->id,
                $request->get('bookId'),
                Carbon::now()
            );
        } catch (NotExistsRentalBorrowBookException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        }
    }
}
