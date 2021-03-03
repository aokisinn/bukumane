<?php

namespace App\Http\Controllers\Api\Book;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Http\Resources\BookCollection;

class BookList extends Controller
{
    public function __invoke()
    {
        return new BookCollection(Book::paginate(30));
    }
}
