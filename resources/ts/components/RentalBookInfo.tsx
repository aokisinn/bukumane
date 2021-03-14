import React, { useState, useEffect } from "react";
import { useFetchRentalBookData } from "../hooks/useFetchRentalBookData";
import Grid from "@material-ui/core/Grid";

const RentalBookInfo: React.FC<{
    currentUserId: number | undefined;
    bookId: number;
}> = ({ currentUserId, bookId }) => {
    const { fetchRentalBookData, rentalList } = useFetchRentalBookData();

    useEffect(() => {
        if (!currentUserId) return;
        fetchRentalBookData(bookId);
    }, [currentUserId, bookId]);

    return (
        <Grid>
            {/* TODO レイアウト周り設定 */}
            {rentalList?.map(function(rental) {
                return (
                    <Grid item key={rental.id}>
                        貸出状況 : {rental.state} 貸出ユーザー : {rental.userId}
                        貸出日 : {rental.borrowDate?.substr(0, 10)}
                        返却日 : {rental?.returnDate?.substr(0, 10)}
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default RentalBookInfo;
