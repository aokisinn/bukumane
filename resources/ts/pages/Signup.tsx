import React, { useState, useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { Button } from "react-bootstrap";

const Signup = (props: any) => {
    const { authUser } = useAuth();

    useEffect(() => {
        authUser && props.history.push("/");
    }, [authUser]);

    return (
        <RightMotion>
            <div>
                <h1>Signup</h1>
                <Button
                    variant="primary"
                    onClick={() => {
                        props.history.push("/login");
                    }}
                >
                    戻る
                </Button>
            </div>
        </RightMotion>
    );
};

export default Signup;
