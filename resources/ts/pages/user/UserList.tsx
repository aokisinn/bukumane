import React, { useState, useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import { Button, Container, Jumbotron } from "react-bootstrap";

const UserList = (props: any) => {
    const { authUser } = useAuth();

    useEffect(() => {
        authUser && props.history.push("/");
    }, [authUser]);

    return (
        <>
            <RightMotion>
                <>
                    <Jumbotron>
                        <Container>
                            <h1 className="display-1">ユーザー一覧</h1>
                        </Container>
                    </Jumbotron>
                    <Container>
                        <div>未着手</div>
                    </Container>
                </>
            </RightMotion>
        </>
    );
};

export default UserList;
