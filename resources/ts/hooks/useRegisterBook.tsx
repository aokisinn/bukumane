import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { BookType } from "../types/BookType";

export const useRegisterBook = () => {
    const [book, setBook] = useState<BookType | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | undefined>();

    // TODO 変数名
    const searchRegisterBook = useCallback(async (isbn: string): Promise<
        void
    > => {
        // TODO 検索して取得する処理実装
        setLoading(true);
        apiClient
            .post("/api/searchRegisterBook", {
                isbn
            })
            .then(res => {
                setLoading(false);
                console.log("-----------");
                console.log(res);
                console.log(res.data.book);
                // const books = res.data.books.map(function(book) {
                //     return;
                // });
                // setBook(books);
            })
            .catch(err => {
                console.log(err.response);
                setLoading(false);
                // TODO 例外処理 分岐
                setError(new Error(err.message));
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

    return { searchRegisterBook, registerBook, book, loading, error };
};
