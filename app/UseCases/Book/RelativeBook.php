<?php

namespace App\UseCases\Book;

use GuzzleHttp\Client;
use App\Models\Book;
use Illuminate\Support\Collection;

class RelativeBook
{
    /**
     * @param string $titile
     * @return Collection
     */
    public function invoke(string $titile): ?Collection
    {
        return Book::where('title', 'like', '%' . $titile . '%')->get();
    }
}
