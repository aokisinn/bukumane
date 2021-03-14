import React, { useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import Loading from "../../components/Loading";
import { useAuth } from "../../context/auth/useAuth";
import { useFindBook } from "../../hooks/useFindBook";
import Fab from "@material-ui/core/Fab";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import RentalBookInfo from "../../components/RentalBookInfo";

const useStyles = makeStyles({
    paperStyle: {
        padding: 20,
        width: "80%",
        margin: "20px auto"
    },
    detailBox: {
        maxWidth: 800,
        margin: "0 auto",
        marginTop: 50
    },
    bookMedia: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        margin: "0 auto",
        marginTop: 10,
        width: "326px"
    },
    subTextBox: {
        padding: "0 16px"
    },
    subText: {
        fontSize: "1rem"
    },
    priceText: {
        textAlign: "right",
        fontSize: "20px"
    },
    registerDate: {
        marginTop: 10,
        marginRight: "16px",
        textAlign: "right",
        fontSize: "0.9rem"
    }
});

const DetailBook = (props: any) => {
    const { authUser, setCurrentUser } = useAuth();
    const { findBook, book, loading } = useFindBook();
    const classes = useStyles();
    const bookId = props.match.params.id;

    useEffect(() => {
        setCurrentUser().then(currentUser => {
            if (!currentUser) {
                return props.history.push("/login");
            }
        });
        findBook(bookId);
    }, []);

    //登録日(YYYY-MM-DD)
    const registerDate = book?.created_at?.slice(0, 10);

    //金額(3桁区切り)
    const bookPrice = String(book?.price).replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        "$1,"
    );

    return (
        <React.Fragment>
            {loading ? (
                <Loading />
            ) : (
                <RightMotion>
                    <Card className={classes.detailBox}>
                        <Typography
                            className={classes.registerDate}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            登録日：{registerDate}
                        </Typography>
                        <CardHeader title={book?.title} />

                        <CardContent className={classes.subTextBox}>
                            <Typography
                                className={classes.subText}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {book?.author}
                            </Typography>
                            <Typography
                                className={classes.subText}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {book?.publisher} / {book?.size} -{" "}
                                {book?.sales_date}
                            </Typography>
                            <Typography
                                className={classes.priceText}
                                variant="body2"
                                color="primary"
                                component="p"
                            >
                                ￥{bookPrice}
                            </Typography>
                        </CardContent>

                        <Divider />

                        <CardMedia
                            className={classes.bookMedia}
                            image={
                                book?.large_image_url ??
                                "../images/no_image.png"
                            }
                            title="画像"
                        />

                        <CardContent>
                            <Typography
                                className={classes.subText}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {book?.caption}
                            </Typography>
                        </CardContent>
                        <RentalBookInfo
                            currentUserId={authUser?.id}
                            bookId={bookId}
                        />
                    </Card>
                </RightMotion>
            )}
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

export default DetailBook;
