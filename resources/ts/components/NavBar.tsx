import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Settings from "@material-ui/icons/Settings";
import Search from "@material-ui/icons/Search";
import Book from "@material-ui/icons/Book";
import { Grid } from "@material-ui/core";

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
                <BottomNavigationAction label="一覧" icon={<Book />} />
                <BottomNavigationAction label="検索" icon={<Search />} />
                <BottomNavigationAction label="設定" icon={<Settings />} />
            </BottomNavigation>
        </Grid>
    );
};

export default NavBar;
