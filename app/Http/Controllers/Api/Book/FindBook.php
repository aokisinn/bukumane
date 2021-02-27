<?php

namespace App\Http\Controllers\Api\Book;

use App\Http\Controllers\Controller;
use App\Http\Requests\FindBookRequest;
use App\Models\Book;
use App\Http\Resources\Book as BookResources;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FindBook extends Controller
{
    public function __invoke(FindBookRequest $request)
    {
        try {
            return new BookResources(Book::findorfail($request->get('bookId')));
        } catch (ModelNotFoundException $e) {
            return response()->apiError($e->getMessage(), [], 401);
        }
    }
}
