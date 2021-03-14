import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useFetchRentalBookData } from "../hooks/useFetchRentalBookData";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useBorrowBook } from "../hooks/useBorrowBook";
import { useReturnBook } from "../hooks/useReturnBook";

const RentalBookInfo: React.FC<{
    currentUserId: number | undefined;
    bookId: number;
}> = ({ currentUserId, bookId }) => {
    const {
        fetchRentalBookData,
        rentalList,
        isBorrow
    } = useFetchRentalBookData();

    const { borrowBook } = useBorrowBook();
    const { returnBook } = useReturnBook();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!currentUserId) return;
        fetchRentalBookData(bookId, currentUserId);
    }, [currentUserId, bookId]);

    useEffect(() => {
        console.log(rentalList);
    }, [rentalList]);

    return (
        <Grid>
            {isBorrow ? (
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={async () => {
                        if (!currentUserId) return;

                        await returnBook(bookId);
                        fetchRentalBookData(bookId, currentUserId);
                    }}
                >
                    返却
                </Button>
            ) : (
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={async () => {
                        if (!currentUserId) return;

                        await borrowBook(bookId);
                        fetchRentalBookData(bookId, currentUserId);
                    }}
                >
                    借りる
                </Button>
            )}
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
