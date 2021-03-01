import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../../utils/apiClient";
import { AuthUserType } from "../../types/AuthUserType";

export type AuthType = {
    authUser: AuthUserType | null;
    signIn: (
        loginId: string | null | undefined,
        password: string | null | undefined
    ) => Promise<void>;
    setCurrentUser: () => Promise<AuthUserType | void>;
    loading: boolean;
    error: Error | undefined;
};

export const useProvideAuth = (): AuthType => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | undefined>();

    const signIn = useCallback(
        async (
            loginId: string | null | undefined,
            password: string | null | undefined
        ): Promise<void> => {
            // TODO　処理が見辛いのでsanctum/csrf-cookie 外だし
            setLoading(true);
            apiClient
                .get("/sanctum/csrf-cookie")
                .then(response => {
                    apiClient
                        .post("/api/login", {
                            loginId,
                            password
                        })
                        .then(res => {
                            setLoading(false);
                            setAuthUser({
                                id: res.data.user.id,
                                loginId: res.data.user.login_id,
                                role: res.data.role
                            });
                        })
                        .catch(err => {
                            console.log(err.response);
                            setLoading(false);
                            setError(new Error("ログイン失敗"));
                        });
                })
                .catch(err => {
                    console.log(err.response);
                    setLoading(false);
                    setError(new Error("認証トークンの取得に失敗しました。"));
                });
        },
        []
    );

    const setCurrentUser = useCallback(async (): Promise<AuthUserType | void> => {
        setLoading(true);

        const currentUser = await apiClient
            .get("/api/me")
            .then(res => {
                setLoading(false);
                const authUser = {
                    id: res.data.id,
                    loginId: res.data.login_id,
                    role: res.data.role
                };

                setAuthUser(authUser);
                return authUser;
            })
            .catch(err => {
                console.log(err.response);
                setLoading(false);
                setError(new Error("ユーザー情報の取得に失敗しました。"));
            });

        return currentUser;
    }, []);

    return { authUser, setCurrentUser, signIn, loading, error };
};
