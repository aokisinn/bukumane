import React, { useState, useEffect } from "react";
import RightMotion from "../../components/motion/RightMotion";
import { useAuth } from "../../context/auth/useAuth";
import {
    Grid,
    Paper,
    TextField,
    Button,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import Alert from "@material-ui/lab/Alert";
import { AdminRole, GeneralRole } from "../../types/AuthUserType";
import Fab from "@material-ui/core/Fab";
import ArrowBack from "@material-ui/icons/ArrowBack";

const RegisterUser = (props: any) => {
    const { setCurrentUser } = useAuth();
    const { registerUser, error, loading, isRegister } = useRegisterUser();

    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState<AdminRole | GeneralRole>("0");

    const paperStyle = {
        padding: 20,
        width: "50%",
        margin: "20px auto"
    };
    const btnstyle = { margin: "8px 0" };

    useEffect(() => {
        setCurrentUser().then(currentUser => {
            // TODO Adminかどうか判断する関数作成
            if (!currentUser) {
                return props.history.push("/login");
            }
        });
    }, []);

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
                                ユーザーの登録に成功しました！
                            </Alert>
                        ) : (
                            <></>
                        )}
                        <Grid container alignItems="center" justify="center">
                            <h2>アカウント作成</h2>
                        </Grid>
                        <TextField
                            label="ユーザーID"
                            placeholder="testID"
                            fullWidth
                            required
                            value={loginId}
                            onChange={e => setLoginId(e.target.value)}
                        />
                        <TextField
                            label="パスワード"
                            placeholder="パスワード"
                            fullWidth
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <InputLabel id="role-select">権限</InputLabel>
                        <Select
                            labelId="role-select-label"
                            id="role-select"
                            value={role}
                            onChange={e =>
                                setRole(
                                    e.target.value as AdminRole | GeneralRole
                                )
                            }
                        >
                            <MenuItem value={"0"}>一般</MenuItem>
                            <MenuItem value={"999"}>管理者</MenuItem>
                        </Select>
                        <Button
                            color="primary"
                            variant="contained"
                            style={btnstyle}
                            fullWidth
                            onClick={() => {
                                registerUser(loginId, password, role);
                            }}
                        >
                            サインイン
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
                        props.history.push("/user/list");
                    }}
                >
                    <ArrowBack />
                </Fab>
            </div>
        </React.Fragment>
    );
};

export default RegisterUser;
