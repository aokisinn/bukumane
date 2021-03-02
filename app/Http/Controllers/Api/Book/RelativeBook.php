<?php

namespace App\Http\Controllers\Api\Book;

use App\Http\Controllers\Controller;
use App\Http\Requests\RelativeBookRequest;
use App\UseCases\Book\RelativeBook as RelativeBookUseCase;
use App\Http\Resources\BookCollection;

class RelativeBook extends Controller
{
    public function __invoke(RelativeBookRequest $request, RelativeBookUseCase $useCase)
    {
        try {
            $book = $useCase->invoke(
                $request->get("title"),
            );

            return new BookCollection($book);
        } catch (\Exception $e) {
            return response()->apiError("原因不明のエラーが発生しました。", [], 401);
        }
    }
}
