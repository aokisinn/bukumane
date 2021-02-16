<?php

namespace App\UseCases\Book;

use App\Exceptions\NotFoundBookException;
use GuzzleHttp\Client;
use App\Models\Book;

class SearchRegisterBook
{
    /**
     * @param Client $client
     * @param string $applicationId
     * @param string $isbnCode
     * @return Book
     * @throws NotFoundBookException
     */
    public function invoke(Client $client, string $applicationId, string $isbn): Book
    {
        $response = $client->request(
            "GET",
            "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=" . $applicationId . "&isbn=" . $isbn,
            [
                'headers' => [
                    'Content-Type' => 'application/json',
                ]
            ]
        );
        $posts = $response->getBody();
        $posts = json_decode($posts, true);

        if (isset($posts['Items'][0])) {
            $book = new Book();
            $book->title = $posts['Items'][0]["Item"]['title'] ?? "";
            $book->caption = $posts['Items'][0]["Item"]['itemCaption'] ?? "";
            $book->authors = $posts['Items'][0]["Item"]['author'] ?? "";
            $book->publisher = $posts['Items'][0]["Item"]['publisherName'] ?? "";
            $book->isbn = $posts['Items'][0]["Item"]['isbn'] ?? "";
            $book->large_image_url = $posts['Items'][0]["Item"]['largeImageUrl'] ?? "";
            $book->medium_image_url = $posts['Items'][0]["Item"]['mediumImageUrl'] ?? "";
            $book->small_image_url = $posts['Items'][0]["Item"]['smallImageUrl'] ?? "";
            $book->sales_date = $posts['Items'][0]["Item"]['salesDate'] ?? "";
            $book->price = $posts['Items'][0]["Item"]['itemPrice'] ?? "";
            $book->size = $posts['Items'][0]["Item"]['size'] ?? "";
            $book->item_url = $posts['Items'][0]["Item"]['itemUrl'] ?? "";

            return $book;
        } else {
            throw new NotFoundBookException();
        }
    }
}
