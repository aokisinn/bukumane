import React, { useState, useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import { useRegisterBook } from "../../hooks/useRegisterBook";
import { Grid, TextField, Button, Paper } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import ArrowBack from "@material-ui/icons/ArrowBack";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CardMedia from "@material-ui/core/CardMedia";

const RegisterBook = (props: any) => {
    const { authUser, setCurrentUser } = useAuth();
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

    const paperStyle = {
        padding: 20,
        width: "80%",
        margin: "20px auto"
    };

    useEffect(() => {
        setCurrentUser().then(currentUser => {
            if (!currentUser) {
                return props.history.push("/login");
            }
        });
    }, []);

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
        setLargeImageUrl("/images/no_image.png");
        setMediumImageUrl("/images/no_image.png");
        setSmallmageUrl("/images/no_image.png");
        setItemUrl("");
        setSalesDate("");
        setPrice("");
        setSize("");
    }, [isRegister]);

    return (
        <React.Fragment>
            <RightMotion>
                <Grid container spacing={1}>
                    <Paper elevation={12} style={paperStyle}>
                        {error ? (
                            <Alert severity="error">{error.message}</Alert>
                        ) : (
                            <></>
                        )}
                        {isRegister ? (
                            <Alert severity="success">
                                書籍の登録に成功しました！
                            </Alert>
                        ) : (
                            <></>
                        )}
                        <Grid container alignItems="center" justify="center">
                            <h2>書籍新規登録</h2>
                        </Grid>
                        <Grid container alignItems="center" justify="center">
                            <TextField
                                label="BarCode"
                                placeholder="書籍のBarCodeを入力してね"
                                style={{ width: "80%" }}
                                value={searchIsbn}
                                onChange={e => setSearchIsbn(e.target.value)}
                            />
                            <Button
                                color="primary"
                                variant="contained"
                                style={{ width: "20%" }}
                                onClick={() => {
                                    if (!searchIsbn) {
                                        alert("コードが入力されていません");
                                        setSearchIsbn("");
                                        return;
                                    }
                                    searchRegisterBook(searchIsbn);
                                }}
                                disabled={searchLoading || registerLoading}
                            >
                                {searchLoading || registerLoading ? (
                                    <CircularProgress />
                                ) : (
                                    "書籍検索"
                                )}
                            </Button>
                        </Grid>
                        <Grid>
                            <CardMedia
                                image={largeImageUrl}
                                style={{
                                    height: 320,
                                    backgroundSize: "contain"
                                }}
                            />
                        </Grid>
                        <TextField
                            label="タイトル"
                            placeholder="〇〇入門"
                            fullWidth
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <TextField
                            label="著者"
                            placeholder="上田次郎"
                            fullWidth
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                        />
                        <TextField
                            label="出版"
                            placeholder="竹書房"
                            fullWidth
                            value={publisher}
                            onChange={e => setPublisher(e.target.value)}
                        />
                        <TextField
                            label="説明"
                            placeholder=""
                            fullWidth
                            value={caption}
                            onChange={e => setCaption(e.target.value)}
                        />
                        <TextField
                            label="ISBN"
                            placeholder="1234678910"
                            fullWidth
                            value={isbn}
                            onChange={e => setIsbn(e.target.value)}
                        />
                        <TextField
                            label="商品URL"
                            placeholder="〇〇〇〇〇〇"
                            fullWidth
                            value={itemUrl}
                            onChange={e => setItemUrl(e.target.value)}
                        />
                        <TextField
                            label="発売日"
                            placeholder="2020/01頃"
                            fullWidth
                            value={salesDate}
                            onChange={e => setSalesDate(e.target.value)}
                        />
                        <TextField
                            label="値段"
                            placeholder="500円"
                            fullWidth
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <TextField
                            label="サイズ"
                            placeholder="文庫本"
                            fullWidth
                            value={size}
                            onChange={e => setSize(e.target.value)}
                        />

                        <Button
                            color="primary"
                            variant="contained"
                            fullWidth
                            onClick={async () => {
                                console.log(title);
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
                            style={{
                                top: 10
                            }}
                            disabled={searchLoading || registerLoading}
                        >
                            {searchLoading || registerLoading ? (
                                <CircularProgress />
                            ) : (
                                "登録"
                            )}
                        </Button>
                    </Paper>
                </Grid>
            </RightMotion>
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
                    color="secondary"
                    aria-label="add"
                    onClick={() => {
                        props.history.push("/");
                    }}
                >
                    <ArrowBack />
                </Fab>
            </div>
        </React.Fragment>
    );
};

export default RegisterBook;
