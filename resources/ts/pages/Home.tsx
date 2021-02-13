import React, { useState, useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { Container } from "react-bootstrap";

const Home = (props: any) => {
    const { authUser } = useAuth();

    useEffect(() => {
        authUser === null && props.history.push("/login");
    }, [authUser]);

    return (
        <Container>
            <RightMotion>
                <div>
                    <h1>home</h1>
                    <h2>ID: {authUser?.id}</h2>
                    <h2>名前 : {authUser?.name}</h2>
                    <h2>アドレス : {authUser?.address}</h2>
                </div>
            </RightMotion>
        </Container>
    );
};

export default Home;
