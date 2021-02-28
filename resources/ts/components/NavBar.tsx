import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import Search from "@material-ui/icons/Search";
import Book from "@material-ui/icons/Book";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router";

const useStyles = makeStyles({
    root: {
        width: 500
    }
});

const NavBar = (props: any) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <Grid container alignItems="center" justify="center">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
                style={{
                    width: "100%"
                }}
            >
                <BottomNavigationAction
                    label="一覧"
                    icon={<Book />}
                    onClick={() => {
                        props.history.push("/");
                    }}
                />
                <BottomNavigationAction
                    label="検索"
                    icon={<Search />}
                    onClick={() => {
                        props.history.push("/book/relative");
                    }}
                />
                <BottomNavigationAction
                    label="ユーザー"
                    icon={<SupervisedUserCircle />}
                    onClick={() => {
                        props.history.push("/user/list");
                    }}
                />
            </BottomNavigation>
        </Grid>
    );
};

export default withRouter(NavBar);
