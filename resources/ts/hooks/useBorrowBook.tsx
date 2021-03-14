import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";

export const useBorrowBook = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>();
    const [isBorrow, setIsBorrow] = useState<boolean>(false);

    const borrowBook = useCallback(async (bookId: string | number): Promise<
        void
    > => {
        setLoading(true);
        apiClient
            .post("/api/borrowBook", {
                bookId
            })
            .then(res => {
                setLoading(false);
                setIsBorrow(true);
            })
            .catch(err => {
                console.log(err.response);
                setLoading(false);
                setError(
                    new Error(
                        err.response.data?.message ??
                            "原因不明のエラーが発生しました"
                    )
                );
            });
    }, []);

    return { borrowBook, loading, error, isBorrow };
};
