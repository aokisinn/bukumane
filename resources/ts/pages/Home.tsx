import React, { useState, useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { useBookList } from "../hooks/useBookList";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
    searchBox: {
        margin: '20px 5px'
    },
    searchField: {
        width: '60%'
    },
    searchIcon: {
        padding: 10,
    }
});

const Home = (props: any) => {
    const classes = useStyles();
    const [ title, setTitle ] = useState("");
    const { authUser, setCurrentUser } = useAuth();
    const { getBookList, bookList, loading, isLastPage, currentPage } = useBookList();

    useEffect(() => {
        setCurrentUser().then(currentUser => {
            if (!currentUser) {
                return props.history.push("/login");
            }
        });
        getBookList();
    }, []);


    //TODO：タイトル検索で書籍取得

    //貸出中チェック
    const getBooksListOfLending = e => {
        console.log('チェック状況',e.target.checked);
        if(e.target.checked) {
            //TODO:trueの時貸出中だけに絞って表示
        }
    }

    return (
        <React.Fragment>
            {loading ? (
                <Loading />
            ) : (
                <RightMotion>
                    <Grid>
                        <Grid className={classes.searchBox}>
                            <TextField 
                                label="書籍タイトル"
                                className={classes.searchField}
                                value={title}
                                onChange={e => setTitle(e.target.value)}        
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" />}
                                label="貸出中"
                                labelPlacement="end"
                                onChange={getBooksListOfLending}
                            />
                        </Grid>
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
                                        <BookCard id={book.id} book={book} currentUserId={authUser?.id} />
                                    </Grid>
                                );
                            })}
                            {currentPage === 0 || isLastPage ? null : (
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
                    </Grid>
                </RightMotion>
            )}
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
