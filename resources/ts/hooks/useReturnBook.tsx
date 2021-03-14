import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";

export const useReturnBook = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>();
    const [isReturn, setIsReturn] = useState<boolean>(false);

    const returnBook = useCallback(async (bookId: string | number): Promise<
        void
    > => {
        setLoading(true);
        apiClient
            .post("/api/returnBook", {
                bookId
            })
            .then(res => {
                setLoading(false);
                setIsReturn(true);
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

    return { returnBook, loading, error, isReturn };
};
