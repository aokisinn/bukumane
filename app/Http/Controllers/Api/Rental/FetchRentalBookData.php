<?php

namespace App\Http\Controllers\Api\Rental;

use App\Http\Controllers\Controller;
use App\Http\Requests\FetchRentalBookDataRequest;
use App\UseCases\Rental\FetchRentalBookData as FetchRentalBookDataCase;
use App\Http\Resources\RentalCollection;

class FetchRentalBookData extends Controller
{
    public function __invoke(FetchRentalBookDataRequest $request, FetchRentalBookDataCase $useCase)
    {
        $rentals = $useCase->invoke(
            $request->get('bookId')
        );
        return new RentalCollection($rentals);
    }
}
