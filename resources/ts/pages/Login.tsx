import React, { useState } from "react";
import RightMotion from "../components/motion/RightMotion";
import apiClient from "../utils/apiClient";

const Login = (props: any) => {
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
                <button onClick={login} className="btn btn-primary mb-2">
                    ログイン
                </button>
                <button onClick={userLogin} className="btn btn-primary mb-2">
                    ユーザ情報取得
                </button>
            </div>
        </RightMotion>
    );
};

export default Login;
