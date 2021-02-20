<?php

namespace App\UseCases\Book;

use App\Models\Book;
use App\Exceptions\RegistBookException;

class RegisterBook
{

    /**
     * TODO　引数多い問題
     * @param string $createdUserId
     * @param string $title
     * @param string $author
     * @param string $caption
     * @param string $publisher
     * @param string $isbn
     * @param string $largeImageUrl
     * @param string $mediumImageUrl
     * @param string $smallImageUrl
     * @param string $itemUrl
     * @param string $salesDate
     * @param string $price
     * @param string $size
     * @return Book
     * @throws NotFoundBookException
     */
    public function invoke(
        string $createdUserId,
        string $title,
        string $author,
        string $caption,
        string $publisher,
        string $isbn,
        string $largeImageUrl,
        string $mediumImageUrl,
        string $smallImageUrl,
        string $itemUrl,
        string $salesDate,
        string $price,
        string $size
    ): Book {

        if ($this->isRegistBook($isbn)) {
            throw new RegistBookException();
        }

        return Book::create([
            'isbn' => $isbn,
            'title' => $title,
            'author' => $author,
            'caption' => $caption,
            'publisher' => $publisher,
            'large_image_url' => $largeImageUrl,
            'medium_image_url' => $mediumImageUrl,
            'small_image_url' => $smallImageUrl,
            'item_url' => $itemUrl,
            'sales_date' => $salesDate,
            'price' => $price,
            'size' => $size,
            'created_user_id' => $createdUserId
        ]);
    }

    /**
     * 書籍が既にDBに登録されているか？
     * @param string $isbn
     * @return boolean
     */
    public function isRegistBook(string $isbn): bool
    {
        return Book::query()
            ->where('isbn', '=', $isbn)
            ->exists();
    }
}
