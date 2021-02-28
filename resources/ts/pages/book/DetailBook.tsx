import React, { useState, useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import { useRegisterBook } from "../../hooks/useRegisterBook";
import { Grid, TextField, Button, Paper } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import ArrowBack from "@material-ui/icons/ArrowBack";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CardMedia from "@material-ui/core/CardMedia";

const RegisterBook = (props: any) => {
    const { authUser, setCurrentUser } = useAuth();
    // const { getBookList, bookList } = useBookList();

    const paperStyle = {
        padding: 20,
        width: "80%",
        margin: "20px auto"
    };

    useEffect(() => {
        setCurrentUser().then(currentUser => {
            if (!currentUser) {
                return props.history.push("/login");
            }
        });
    }, []);

    return (
        <React.Fragment>
            <RightMotion>
                <Grid container spacing={1}>
                    <Paper elevation={8} style={paperStyle}></Paper>
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
                    color="secondary"
                    aria-label="add"
                    onClick={() => {
                        props.history.push("/");
                    }}
                >
                    <ArrowBack />
                </Fab>
            </div>
        </React.Fragment>
    );
};

export default RegisterBook;
