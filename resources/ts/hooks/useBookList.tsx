import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { BookType } from "../types/BookType";

export const useBookList = () => {
    const [bookList, setBookList] = useState<Array<BookType>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | undefined>();

    const getBookList = useCallback(async (): Promise<void> => {
        setLoading(true);
        apiClient
            .get("/api/bookList")
            .then(res => {
                setLoading(false);
                const books = res.data.books.map(function(book) {
                    return {
                        id: book?.id,
                        name: book?.name,
                        description: book?.description,
                        publisher: book?.publisher,
                        photo_url: book?.photo_url,
                        authors: book?.authors,
                        isbn10: book?.isbn10,
                        isbn13: book?.isbn13,
                        release_date: book?.release_date,
                        created_user_id: book?.created_user_id,
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

    return { getBookList, bookList, loading, error };
};
