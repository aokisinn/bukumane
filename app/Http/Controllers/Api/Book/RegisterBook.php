<?php

namespace App\Http\Controllers\Api\Book;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterBookRequest;
use App\Models\Book;
use App\UseCases\Book\RegisterBook as RegisterBookUseCase;
use App\Exceptions\RegistBookException;
use App\Http\Resources\Book as BookResources;
use GuzzleHttp\Client;

class RegisterBook extends Controller
{
    public function __invoke(RegisterBookRequest $request, RegisterBookUseCase $useCase)
    {
        try {
            $book = $useCase->invoke(
                "1",
                $request->get('title'),
                $request->get('author'),
                $request->get('caption'),
                $request->get('publisher'),
                $request->get('isbn'),
                $request->get('largeImageUrl'),
                $request->get('mediumImageUrl'),
                $request->get('smallImageUrl'),
                $request->get('itemUrl'),
                $request->get('salesDate'),
                $request->get('price'),
                $request->get('size'),
            );

            return $book;
        } catch (RegistBookException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        } catch (\Exception $e) {
            \Log::alert($e);
            return response()->apiError("原因不明のエラーが発生しました。", [], 401);
        }
    }
}
