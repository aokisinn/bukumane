import React, { useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { useBookList } from "../hooks/useBookList";
import BookCard from "../components/BookCard";
// import NavBar from "../components/NavBar";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
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
    const { setCurrentUser } = useAuth();
    const { getBookList, bookList, isLastPage, currentPage } = useBookList();

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
            {/* <NavBar /> */}
            <RightMotion>

                {/* 書籍検索 */}
                <Grid className={classes.searchBox}>
                    <TextField 
                        label="書籍タイトル"
                        className={classes.searchField}        
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControlLabel
                        value="borrowing"
                        control={<Checkbox color="secondary" />}
                        label="貸出中"
                        labelPlacement="end"
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
                                <BookCard book={book} />
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
