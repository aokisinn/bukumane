import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { BookType } from "../types/BookType";

export const useRelativeBook = () => {
    const [bookList, setBookList] = useState<Array<BookType>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>();

    const relativeBook = useCallback(async (title: string): Promise<void> => {
        setLoading(true);
        apiClient
            .post("/api/relativeBook", {
                title
            })

            .then(res => {
                setLoading(false);
                const books = res.data.books.map(function(book) {
                    return {
                        id: book?.id,
                        title: book?.title,
                        author: book?.author,
                        caption: book?.caption,
                        publisher: book?.publisher,
                        isbn: book?.isbn,
                        large_image_url: book?.large_image_url,
                        medium_image_url: book?.medium_image_url,
                        small_image_url: book?.small_image_url,
                        item_url: book?.item_url,
                        sales_date: book?.sales_date,
                        price: book?.price,
                        size: book?.size,
                        created_at: book?.created_at,
                        updated_at: book?.updated_at
                    };
                });

                setBookList(books);
            })
            .catch(err => {
                console.log(err.response);
                setLoading(false);
                setError(new Error("書籍情報の取得に失敗しました"));
            });
    }, []);

    return { relativeBook, bookList, loading, error };
};
