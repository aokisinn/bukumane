import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { BookType } from "../types/BookType";

export const useFindBook = () => {
    const [book, setBook] = useState<BookType | undefined>(undefined);
    const [error, setError] = useState<Error | undefined>();

    const findBook = useCallback(async (bookId: any): Promise<void> => {
        setError(undefined);
        console.log(bookId);
        
        apiClient
            .post("/api/findBook", {bookId})
            .then(res => {
                console.log(res);
                
                const book = {
                    id: res.data.book?.id,
                    title: res.data.book?.title,
                    author: res.data.book?.author,
                    caption: res.data.book?.caption,
                    publisher: res.data.book?.publisher,
                    isbn: res.data.book?.isbn,
                    large_image_url: res.data.book?.large_image_url,
                    medium_image_url: res.data.book?.medium_image_url,
                    small_image_url: res.data.book?.small_image_url,
                    item_url: res.data.book?.item_url,
                    sales_date: res.data.book?.sales_date,
                    price: res.data.book?.price,
                    size: res.data.book?.size,
                    created_at: res.data.book?.created_at,
                    updated_at: res.data.book?.updated_at
                };
                // console.log(book);
                setBook(book);
            })
            .catch(err => {
                console.log(err.response);
                setError(
                    new Error(
                        err.response.data?.message ??
                            "原因不明のエラーが発生しました"
                    )
                );
            });
    }, []);

    return { findBook, book, error };
};