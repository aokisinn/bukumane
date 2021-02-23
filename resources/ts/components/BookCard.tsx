import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { BookType } from "../types/BookType";

const useStyles = makeStyles({
    media: {
        height: 320,
        backgroundSize: "contain"
    }
});

const BookCard: React.FC<{
    book: BookType;
}> = ({ book }) => {
    const classes = useStyles();

    return (
        <Card
            onClick={() => {
                alert("詳細画面は未実装です");
            }}
        >
            <CardMedia
                className={classes.media}
                image={book.large_image_url ?? "/images/no_image.png"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {book.caption?.substr(0, 20)}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BookCard;
