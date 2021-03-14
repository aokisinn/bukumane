import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { RentalType } from "../types/RentalType";

export const useFetchRentalBookData = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>();
    const [rentalList, setRentalList] = useState<Array<RentalType>>([]);
    // TODO 別でもつ
    const [isBorrow, setIsBorrow] = useState<boolean>(false);

    const fetchRentalBookData = useCallback(
        async (bookId: number, currentUserId: number): Promise<void> => {
            setLoading(true);
            setIsBorrow(false);

            apiClient
                .post("/api/fetchRentalBookData", {
                    bookId
                })
                .then(res => {
                    console.log(res.data);
                    console.log(res.data.rentals[0].user.login_id);

                    const rentals = res.data.rentals.map(function(rental) {
                        console.log("currentUserId");
                        console.log(currentUserId);
                        if (
                            currentUserId == rental?.user.id &&
                            rental?.state == 0
                        ) {
                            setIsBorrow(true);
                        }
                        return {
                            id: rental?.id,
                            bookId: rental?.book_id,
                            // TODO　貸出判別処理は別で持たせる
                            state:
                                rental?.state === 10 ? "返却中" : "貸し出し中",
                            userId: rental?.user.login_id,
                            borrowDate: rental?.borrow_date,
                            returnDate: rental?.return_date,
                            createdAt: rental?.created_at,
                            updatedAt: rental?.updated_at
                        };
                    });

                    setRentalList(rentals);
                    setLoading(false);
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
        },
        []
    );

    return { fetchRentalBookData, isBorrow, rentalList, loading, error };
};
