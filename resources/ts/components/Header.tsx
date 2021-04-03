import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1,
            "&:hover": {
                cursor: "pointer"
            }
        }
    })
);

export default function Header(props: any) {
    const classes = useStyles();
    const hisotry = useHistory();
    const { authUser } = useAuth();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <MenuIcon className={classes.menuButton} />
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => {
                            hisotry.push("/");
                        }}
                    >
                        ブクマネ!
                    </Typography>
                    {authUser ? (
                        <>
                            <Typography>{authUser.loginId}</Typography>
                            <Avatar
                                alt="プロフィール画像"
                                src="/images/no_user.png"
                            />
                        </>
                    ) : null}
                </Toolbar>
            </AppBar>
        </div>
    );
}
