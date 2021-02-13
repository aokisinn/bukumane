import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../../utils/apiClient";
import { AuthUserType } from "../../types/AuthUserType";

export type AuthType = {
    user: AuthUserType | null;
    signIn: (
        email: string | null | undefined,
        password: string | null | undefined
    ) => Promise<void>;
    loading: boolean;
    error: Error | undefined;
};

export const useProvideAuth = (): AuthType => {
    const [user, setUser] = useState<AuthUserType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | undefined>();

    const signIn = useCallback(
        async (
            email: string | null | undefined,
            password: string | null | undefined
        ): Promise<void> => {
            // TODO　処理が見辛いのでsanctum/csrf-cookie 外だし
            setLoading(true);
            apiClient
                .get("/sanctum/csrf-cookie")
                .then(response => {
                    apiClient
                        .post("/api/login", {
                            email,
                            password
                        })
                        .then(res => {
                            setLoading(false);
                            setUser({
                                id: res.data.user.id,
                                name: res.data.user.name,
                                address: res.data.user.address
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

    return { user, signIn, loading, error };
};
