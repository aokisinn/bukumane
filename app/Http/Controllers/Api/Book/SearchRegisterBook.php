<?php

namespace App\Http\Controllers\Api\Book;

use App\Http\Controllers\Controller;
use App\Http\Requests\SearchRegisterBookRequest;
use App\Models\Book;
use App\UseCases\Book\SearchRegisterBook as SearchRegisterBookUseCase;
use App\Exceptions\NotFoundBookException;
use App\Http\Resources\Book as BookResources;
use GuzzleHttp\Client;

class SearchRegisterBook extends Controller
{
    public function __invoke(SearchRegisterBookRequest $request, SearchRegisterBookUseCase $useCase)
    {
        try {
            $book = $useCase->invoke(
                new Client,
                env('RAKUTEN_APPLICATION_ID'),
                $request->get("isbn")
            );

            return response()
                ->json(['book' => new BookResources($book)]);
        } catch (NotFoundBookException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        } catch (\Exception $e) {
            \Log::alert($e);
            return response()->apiError("原因不明のエラーが発生しました。", [], 401);
        }
    }
}
