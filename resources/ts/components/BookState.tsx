import React, { useEffect } from "react";
import { useFetchRentalBookData } from "../hooks/useFetchRentalBookData";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  statusButton: {
      margin: '5px 5px'
  }
});

const BookState: React.FC<{
  currentUserId: number | undefined;
  bookId: number;
}> = ({ currentUserId, bookId }) => {

  const classes = useStyles();
  const {fetchRentalBookData, rentalList, isBorrow } = useFetchRentalBookData();

  useEffect(() => {
    if (!currentUserId) return;
    fetchRentalBookData(bookId, currentUserId);
  }, [currentUserId, bookId]);
  
  return (
    <>
    { isBorrow && (
        <Button 
          variant="contained" 
          className={classes.statusButton}
          color="secondary"
        >
          貸出中
        </Button>
    )}
    </>
  )
}

export default BookState