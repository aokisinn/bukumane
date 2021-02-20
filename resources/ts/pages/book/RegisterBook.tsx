import React, { useState, useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import { Container, Button, Jumbotron, Spinner, Alert } from "react-bootstrap";
import { useRegisterBook } from "../../hooks/useRegisterBook";

const RegisterBook = (props: any) => {
    const { authUser } = useAuth();
    const [searchIsbn, setSearchIsbn] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [caption, setCaption] = useState("");
    const [publisher, setPublisher] = useState("");
    const [isbn, setIsbn] = useState("");
    const [largeImageUrl, setLargeImageUrl] = useState("/images/no_image.png");
    const [mediumImageUrl, setMediumImageUrl] = useState(
        "/images/no_image.png"
    );
    const [smallImageUrl, setSmallmageUrl] = useState("/images/no_image.png");
    const [itemUrl, setItemUrl] = useState("");
    const [salesDate, setSalesDate] = useState("");
    const [price, setPrice] = useState<number | string>(0);
    const [size, setSize] = useState("");

    const {
        registerBook,
        searchRegisterBook,
        searchBook,
        searchLoading,
        registerLoading,
        isRegister,
        error
    } = useRegisterBook();

    useEffect(() => {
        if (!authUser) return props.history.push("/login");
    }, [authUser]);

    useEffect(() => {
        if (!searchBook) return;

        setIsbn(searchBook?.isbn ?? "");
        setTitle(searchBook?.title ?? "");
        setAuthor(searchBook?.author ?? "");
        setCaption(searchBook?.caption ?? "");
        setPublisher(searchBook?.publisher ?? "");
        setLargeImageUrl(searchBook?.large_image_url ?? "");
        setMediumImageUrl(searchBook?.medium_image_url ?? "");
        setSmallmageUrl(searchBook?.small_image_url ?? "");
        setItemUrl(searchBook?.item_url ?? "");
        setSalesDate(searchBook?.sales_date ?? "");
        setPrice(searchBook?.price ?? 0);
        setSize(searchBook?.size ?? "");
    }, [searchBook]);

    useEffect(() => {
        if (!isRegister) return;
        setSearchIsbn("");
        setIsbn("");
        setTitle("");
        setAuthor("");
        setCaption("");
        setPublisher("");
        setLargeImageUrl("");
        setMediumImageUrl("");
        setSmallmageUrl("");
        setItemUrl("");
        setSalesDate("");
        setPrice("");
        setSize("");
    }, [isRegister]);

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
                {isRegister ? (
                    <>
                        <Alert variant={"success"}>登録に成功しました</Alert>
                    </>
                ) : (
                    <></>
                )}
                {error ? (
                    <>
                        <Alert variant={"danger"}>{error.message}</Alert>
                    </>
                ) : (
                    <></>
                )}
                <Button
                    variant="primary"
                    onClick={() => {
                        props.history.push("/");
                    }}
                >
                    戻る
                </Button>
                <hr />
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">書籍検索</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="書籍のBarCodeを入力してね"
                            value={searchIsbn}
                            onChange={e => setSearchIsbn(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-2">
                        {searchLoading || registerLoading ? (
                            <Button variant="primary" disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Loading...
                            </Button>
                        ) : (
                            <Button
                                variant="primary"
                                onClick={() => {
                                    if (!searchIsbn) {
                                        alert("コードが入力されていません");
                                        setSearchIsbn("");
                                        return;
                                    }
                                    searchRegisterBook(searchIsbn);
                                }}
                                disabled={searchLoading}
                            >
                                検索
                            </Button>
                        )}
                    </div>
                </div>
                <hr />
                <div className="form-group row">
                    <img src={largeImageUrl} />
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">タイトル</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="〇〇入門"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">著者</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="上田次郎"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">出版</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="竹書房"
                            value={publisher}
                            onChange={e => setPublisher(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">説明</label>
                    <div className="col-sm-10">
                        <textarea
                            id="textarea1"
                            className="form-control"
                            value={caption}
                            onChange={e => setCaption(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">ISBN13</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="1234678910"
                            value={isbn}
                            onChange={e => setIsbn(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">商品URL</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="https://〇〇〇〇〇〇"
                            value={itemUrl}
                            onChange={e => setItemUrl(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">発売日</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="2020/01頃"
                            value={salesDate}
                            onChange={e => setSalesDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">値段</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="500円"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">サイズ</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="文庫本"
                            value={size}
                            onChange={e => setSize(e.target.value)}
                        />
                    </div>
                </div>
                {searchLoading || registerLoading ? (
                    <Button variant="primary" disabled block={true}>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                ) : (
                    <Button
                        variant="primary"
                        onClick={async () => {
                            await registerBook(
                                title,
                                author,
                                caption,
                                publisher,
                                isbn,
                                largeImageUrl,
                                mediumImageUrl,
                                smallImageUrl,
                                itemUrl,
                                salesDate,
                                price,
                                size
                            );
                        }}
                        block={true}
                    >
                        登録
                    </Button>
                )}
            </Container>
        </>
    );
};

export default RegisterBook;
