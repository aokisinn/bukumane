import React, { useState, useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import { useFindBook } from "../../hooks/useFindBook";
import Fab from "@material-ui/core/Fab";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { BookType } from "../types/BookType";

const useStyles = makeStyles({
        paperStyle: {
            padding: 20,
            width: "80%",
            margin: "20px auto"
        },
        detailBox: {
            maxWidth: 800,
            margin: '0 auto',
            marginTop: 50
        },
        bookMedia: {
            height: 0,
            paddingTop: '56.25%', // 16:9
            margin: '0 auto',
            marginTop: 10,
            width: '326px'
        },
        subTextBox: {
            padding: '0 16px'
        },
        subText: {
            fontSize: '1rem'
        },
        priceText: {
            textAlign: 'right',
            fontSize: '20px'
        },
        registerDate: {
            marginTop: 10,
            marginRight: '16px',
            textAlign: 'right',
            fontSize: '0.9rem'
        }
});

const paperStyle = {
};

const DetailBook = (props: any) => {
    const { authUser, setCurrentUser } = useAuth();
    const { findBook, book } = useFindBook();
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
    // console.log('book', book);
    
    return (
        <React.Fragment>
            <RightMotion>
                {/* TODO:見た目こっち使ったほうが統一感出るかも */}
                {/* <Grid container spacing={1}>
                    <Paper elevation={8} className={classes.paperStyle}>
                    </Paper>
                </Grid> */}
                <Card className={classes.detailBox}>
                    <Typography className={classes.registerDate} variant="body2" color="textSecondary" component="p">
                            登録日：2021/02/27
                    </Typography>
                    <CardHeader
                        title={book?.title}
                    />

                    <CardContent className={classes.subTextBox}>
                        <Typography className={classes.subText} variant="body2" color="textSecondary" component="p">
                            安達 稜/武田 諭
                        </Typography>
                        <Typography className={classes.subText} variant="body2" color="textSecondary" component="p">
                            秀和システム  単行本-2020年10月09日頃
                        </Typography>
                        <Typography className={classes.priceText} variant="body2" color="primary" component="p">
                            ¥3,080
                        </Typography>
                    </CardContent>

                    <Divider />

                    <CardMedia
                        className={classes.bookMedia}
                        image="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1771/9784798061771.jpg?_ex=200x200"
                        title="フロントエンド開発入門 プロフェッショナルな開発ツールと設計・実装"
                    />

                    <CardContent>
                        <Typography className={classes.subText} variant="body2" color="textSecondary" component="p">
                            支援ツールを使いこなし効率的に実装をする基礎知識。複数の支援ツールから「なぜそれを使うのか」選択する基準を理解する。
                        </Typography>
                    </CardContent>

                </Card>
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

export default DetailBook;
