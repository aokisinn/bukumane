import React, { useState, useEffect } from "react";
import RightMotion from "../components/motion/RightMotion";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/auth/useAuth";

const Login = (props: any) => {
    const { signIn, authUser } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        authUser && props.history.push("/");
    }, [authUser]);

    return (
        <RightMotion>
            <div>
                <h1>{authUser?.name}</h1>
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
                <Button
                    variant="primary"
                    onClick={() => {
                        props.history.push("/signup");
                    }}
                >
                    アカウント作成
                </Button>
            </div>
        </RightMotion>
    );
};

export default Login;
