import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { BookType } from "../types/BookType";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    bookCard: {
        height: 450
    },
    media: {
        height: 320,
        backgroundSize: "contain",
        marginTop: '10px'
    },
    titile: {
        fontSize: '20px'
    }
});

const BookCard: React.FC<{
    book: BookType;
}> = ({ book }) => {
    const classes = useStyles();
    const hisotry = useHistory();

    return (
        <Card
            className={classes.bookCard}
            onClick={() => {
                hisotry.push("/book/detail/" + book.id);
            }}
        >
            <CardMedia
                className={classes.media}
                image={book.large_image_url ?? "/images/no_image.png"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.titile}>
                    {book.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default withRouter(BookCard);
