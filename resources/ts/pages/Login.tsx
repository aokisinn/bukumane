import React, { useState } from "react";
import RightMotion from "../components/motion/RightMotion";
import apiClient from "../utils/apiClient";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/auth/useAuth";

const Login = (props: any) => {
    const { signIn, user } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [IsReadOnly, setIsReadOnly] = useState(false);

    const login = () => {
        console.log(email);
        console.log(password);

        apiClient.get("/sanctum/csrf-cookie").then(response => {
            apiClient
                .post("/api/login", {
                    email,
                    password
                })
                .then(res => {
                    console.log(res.data);
                    console.log("[login]ログイン成功");
                })
                .catch(err => {
                    console.log(err.response);
                    console.log("[login]ログイン失敗");
                });
        });
    };

    const userLogin = () => {
        apiClient.get(`/api/user`, {}).then(res => {
            console.log(res);
            console.log(res.data);
        });
    };
    return (
        <RightMotion>
            <div>
                <h1>{user?.name}</h1>
                <h1>Login</h1>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="test@mediaxis.jp"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-6">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="パスワード"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <Button
                    variant="primary"
                    onClick={() => {
                        // TODO フロントバリデーションどうするか様検討
                        signIn(email, password);
                    }}
                >
                    ログイン
                </Button>
                <Button variant="primary" onClick={userLogin}>
                    ユーザ情報取得
                </Button>
            </div>
        </RightMotion>
    );
};

export default Login;
