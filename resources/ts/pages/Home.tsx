import React, { useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { useBookList } from "../hooks/useBookList";
import BookCard from "../components/BookCard";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Home = (props: any) => {
    const { authUser } = useAuth();
    const { getBookList, bookList } = useBookList();

    useEffect(() => {
        if (authUser === null) {
            return props.history.push("/login");
        }
        getBookList();
    }, [authUser]);

    return (
        <React.Fragment>
            <NavBar />
            <RightMotion>
                <Grid container spacing={1}>
                    {bookList?.map(function(book) {
                        return (
                            <Grid item xs={12} md={3} lg={3} xl={2}>
                                <BookCard book={book} />
                            </Grid>
                        );
                    })}
                </Grid>
            </RightMotion>
            <div
                style={{
                    margin: 0,
                    top: "auto",
                    right: 20,
                    bottom: 20,
                    left: "auto",
                    position: "fixed"
                }}
            >
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => {
                        props.history.push("/book/register");
                    }}
                >
                    <AddIcon />
                </Fab>
            </div>
        </React.Fragment>
    );
};

export default Home;
