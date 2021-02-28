import React, { useState, useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import { useRelativeBook } from "../../hooks/useRelativeBook";
import BookCard from "../../components/BookCard";
import NavBar from "../../components/NavBar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { TextField, Button, Paper } from "@material-ui/core";

const RelativeBook = (props: any) => {
    const { authUser, setCurrentUser } = useAuth();
    const { relativeBook, bookList, loading } = useRelativeBook();
    const [title, setTitle] = useState("");

    useEffect(() => {
        setCurrentUser().then(currentUser => {
            if (!currentUser) {
                return props.history.push("/login");
            }
        });
    }, []);

    useEffect(() => {
        if (!title) {
            return;
        }
        relativeBook(title);
    }, [title]);

    return (
        <React.Fragment>
            <NavBar />
            <RightMotion>
                <Grid container spacing={1}>
                    <TextField
                        label="tile"
                        placeholder="書籍のTitle"
                        style={{ width: "100%" }}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    {bookList?.map(function(book) {
                        return (
                            <Grid item xs={12} md={3} lg={3} xl={2}>
                                <BookCard book={book} />
                            </Grid>
                        );
                    })}
                </Grid>
            </RightMotion>
        </React.Fragment>
    );
};

export default RelativeBook;
