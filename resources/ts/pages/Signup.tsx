import React, { useState, useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { Button, Container, Jumbotron } from "react-bootstrap";

const Signup = (props: any) => {
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
                            <h1 className="display-1">アカウント作成</h1>
                        </Container>
                    </Jumbotron>
                    <Container>
                        <div>
                            <h1>アカウント作成</h1>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    props.history.push("/login");
                                }}
                            >
                                戻る
                            </Button>
                        </div>
                    </Container>
                </>
            </RightMotion>
        </>
    );
};

export default Signup;
