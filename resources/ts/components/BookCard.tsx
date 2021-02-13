import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BookType } from "../types/BookType";

const BookCard: React.FC<{
    book: BookType;
}> = ({ book }) => {
    return (
        <Card style={{ width: "18rem" }} key={book.id}>
            <Card.Img variant="top" src={book.photo_url} />
            <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>{book.description?.substr(0, 20)}</Card.Text>
                <Button variant="primary" block={true}>
                    詳細
                </Button>
            </Card.Body>
        </Card>
    );
};

export default BookCard;
