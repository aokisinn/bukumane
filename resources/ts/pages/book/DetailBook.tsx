import React from "react";
import { makeStyles} from "@material-ui/styles";
import Divider from '@material-ui/core/Divider'
import { Button } from  "@material-ui/core";

const useStyles = makeStyles({
    section: {
        margin: '0 auto',
        maxWidth: '950px',
        position: 'relative',
        padding: '0 1rem',
        textAlign: 'center',
        width: '100%',
        marginTop: '50px'
    },
    detailBox: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    imageArea: {
        margin: '0 auto',
        height: 400,
        width: 400
    },
    detail: {
        textAlign: 'left',
        margin: '0 auto',
        height: 'auto',
        width: 400
    }
})

const DetailBook = () => {
    const classes = useStyles();
    return(
    <section className={classes.section}>
        <div className={classes.detailBox}>
        <div className={classes.imageArea}>
            <img alt="画像" src="https://tshop.r10s.jp/book/cabinet/2120/9784088812120.jpg?fitin=200:300&composite-to=*,*|200:300"/>
        </div>
        <div className={classes.detail}>
            <Button variant="contained" color="secondary">
                貸出中
            </Button>
            <Button variant="contained" color="primary">
                貸出可
            </Button>
            <h1>書籍タイトル</h1>
            <p>著者名</p>
            <Divider />
            <p>ISBNコード</p>
            <p>出版社名</p>
            <p>発売日</p>
            <p>金額</p>
            <p>サイズ</p>
            <p>説明</p>
        </div>
        </div>
    </section>
    )
}

export default DetailBook;

