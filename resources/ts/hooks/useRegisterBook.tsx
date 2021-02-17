import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { BookType } from "../types/BookType";

export const useRegisterBook = () => {
    const [searchBook, setSearchBook] = useState<BookType | undefined>(
        undefined
    );
    const [searchLoading, setSearchLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>();

    // TODO 変数名
    const searchRegisterBook = useCallback(async (isbn: string): Promise<
        void
    > => {
        setSearchLoading(true);
        setError(undefined);
        apiClient
            .post("/api/searchRegisterBook", {
                isbn
            })
            .then(res => {
                setSearchLoading(false);
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

                setSearchBook(book);
            })
            .catch(err => {
                console.log(err.response);
                setSearchLoading(false);
                setError(
                    new Error(
                        err.response.data?.message ??
                            "原因不明のエラーが発生しました"
                    )
                );
            });
    }, []);

    const registerBook = useCallback(async (): Promise<void> => {
        // TODO 登録処理実装
        // setLoading(true);
        // apiClient
        //     .post("/api/bookRegister")
        //     .then(res => {
        //         setLoading(false);
        //         const books = res.data.books.map(function(book) {
        //             return;
        //         });
        //         setBookList(books);
        //     })
        //     .catch(err => {
        //         console.log(err.response);
        //         setLoading(false);
        //         // TODO 例外処理 分岐
        //         setError(new Error("書籍情報の登録に失敗しました"));
        //         // setError(new Error("既に登録に失敗しました"));
        //     });
    }, []);

    return {
        searchRegisterBook,
        registerBook,
        searchBook,
        searchLoading,
        error
    };
};
