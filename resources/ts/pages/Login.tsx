import React, { useState, useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { useAuth } from "../context/auth/useAuth";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const Login = (props: any) => {
    const { signIn, authUser, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const paperStyle = {
        padding: 20,
        width: 280,
        margin: "20px auto"
    };
    const btnstyle = { margin: "8px 0" };

    useEffect(() => {
        authUser && props.history.push("/");
    }, [authUser]);

    return (
        <React.Fragment>
            <RightMotion>
                <Grid>
                    <Paper elevation={8} style={paperStyle}>
                        {error ? (
                            <Alert severity="error">{error.message}</Alert>
                        ) : (
                            <></>
                        )}

                        <Grid container alignItems="center" justify="center">
                            <h2>ログイン</h2>
                        </Grid>
                        <TextField
                            label="メールアドレス"
                            placeholder="メールアドレス"
                            fullWidth
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            label="パスワード"
                            placeholder="パスワード（8〜16文字の半角英数字）"
                            type="password"
                            fullWidth
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            style={btnstyle}
                            fullWidth
                            onClick={() => {
                                signIn(email, password);
                            }}
                        >
                            サインイン
                        </Button>
                    </Paper>
                </Grid>
            </RightMotion>
        </React.Fragment>
    );
};

export default Login;
