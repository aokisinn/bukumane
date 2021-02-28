<?php

namespace App\UseCases\Book;

use App\Models\Book;
use App\Exceptions\NotFoundBookException;

class FindBook 
{
    /**
     * @param integer $bookId
     * @return Book
     * @throws NotFoundBookException
     */
    public function invoke(int $bookId): Book
    {
        $book = $this->fetchBook($bookId);
        if (!$book) {
            throw new NotFoundBookException();
        }
        return $book;
    }

    /**
     * @param integer $id
     * @return Book|null
     */
    private function fetchBook(int $bookId): ?Book
    {
        return Book::where('id', $bookId)
            ->first();
    }

}