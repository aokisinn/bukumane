import React, { useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { Container, Col, Row, Jumbotron, Button } from "react-bootstrap";
import { useBookList } from "../hooks/useBookList";
import BookCard from "../components/BookCard";

const Home = (props: any) => {
    const { authUser } = useAuth();
    const { getBookList, bookList } = useBookList();

    useEffect(() => {
        if (authUser === null) {
            return props.history.push("/login");
        }
        // TODO 5秒ごとに取得する様に変更
        getBookList();
    }, [authUser]);

    return (
        <RightMotion>
            <>
                <Jumbotron>
                    <Container>
                        <h1 className="display-1">書籍一覧</h1>
                    </Container>
                </Jumbotron>
                <Container>
                    <Button
                        variant="primary"
                        onClick={() => {
                            props.history.push("/book/register");
                        }}
                    >
                        登録
                    </Button>
                    <Row>
                        {bookList?.map(function(book) {
                            return (
                                // TODO レイアウト調整
                                <Col sm={3} style={{ margin: "10px" }}>
                                    <BookCard book={book} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </>
        </RightMotion>
    );
};

export default Home;
