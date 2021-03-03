import React, { useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { useBookList } from "../hooks/useBookList";
import BookCard from "../components/BookCard";
import NavBar from "../components/NavBar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const Home = (props: any) => {
    const { setCurrentUser } = useAuth();
    const { getBookList, bookList, isLastPage } = useBookList();

    useEffect(() => {
        setCurrentUser().then(currentUser => {
            if (!currentUser) {
                return props.history.push("/login");
            }
        });
        getBookList();
    }, []);

    return (
        <React.Fragment>
            <NavBar />
            <RightMotion>
                <Grid container spacing={1}>
                    {bookList?.map(function(book) {
                        return (
                            <Grid
                                item
                                xs={12}
                                md={3}
                                lg={3}
                                xl={2}
                                key={book.id}
                            >
                                <BookCard book={book} />
                            </Grid>
                        );
                    })}
                    {isLastPage && bookList ? null : (
                        <Button
                            color="primary"
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                getBookList();
                            }}
                        >
                            取得
                        </Button>
                    )}
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
