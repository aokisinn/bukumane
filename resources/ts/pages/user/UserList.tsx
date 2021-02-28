import React, { useState, useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import NavBar from "../../components/NavBar";
import UserCard from "../../components/UserCard";
import Grid from "@material-ui/core/Grid";
import { useUserList } from "../../hooks/useUserList";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { isAdmin } from "../../types/AuthUserType";

const UserList = (props: any) => {
    const { authUser, setCurrentUser } = useAuth();
    const { getUserList, userList } = useUserList();

    useEffect(() => {
        setCurrentUser().then(currentUser => {
            if (!currentUser) {
                return props.history.push("/login");
            }
        });
        getUserList();
    }, []);

    return (
        <React.Fragment>
            <NavBar />
            <RightMotion>
                <Grid container spacing={1}>
                    {userList?.map(function(user) {
                        return (
                            <Grid item xs={12} md={3} lg={3} xl={2}>
                                <UserCard user={user} />
                            </Grid>
                        );
                    })}
                </Grid>
            </RightMotion>
            {isAdmin(authUser?.role) ? (
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
                            props.history.push("/user/register");
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default UserList;
