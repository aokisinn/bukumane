import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BookType } from "../types/BookType";

const BookCard: React.FC<{
    book: BookType;
}> = ({ book }) => {
    return (
        <Card style={{ width: "18rem" }} key={book.id}>
            <Card.Img
                variant="top"
                src={book.large_image_url ?? "/images/no_image.png"}
            />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.caption?.substr(0, 20)}</Card.Text>
                <Button variant="primary" block={true}>
                    詳細
                </Button>
            </Card.Body>
        </Card>
    );
};

export default BookCard;
