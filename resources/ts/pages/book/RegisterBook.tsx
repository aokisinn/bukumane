import React, { useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import { Container, Col, Row, Jumbotron } from "react-bootstrap";
import { useRegisterBook } from "../../hooks/useRegisterBook";

const RegisterBook = (props: any) => {
    const { authUser } = useAuth();
    const { searchRegisterBook } = useRegisterBook();

    useEffect(() => {
        if (authUser === null) {
            return props.history.push("/login");
        }
        console.log("000000000000");
        searchRegisterBook("9784798063737");
    }, [authUser]);

    return (
        <>
            <Jumbotron>
                <RightMotion>
                    <Container>
                        <h1 className="display-1">書籍新規登録</h1>
                    </Container>
                </RightMotion>
            </Jumbotron>
            <Container>
                <Row>
                    <h1>書籍登録</h1>
                </Row>
            </Container>
        </>
    );
};

export default RegisterBook;
