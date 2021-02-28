import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { AuthUserType } from "../types/AuthUserType";

export const useUserList = () => {
    const [userList, setUserList] = useState<Array<AuthUserType>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | undefined>();

    const getUserList = useCallback(async (): Promise<void> => {
        setLoading(true);
        apiClient
            .get("/api/userList")
            .then(res => {
                setLoading(false);
                const users = res.data.users.map(function(user) {
                    return {
                        id: user.id,
                        name: user.name,
                        address: user.email,
                        role: user.role
                    };
                });
                console.log(users);
                setUserList(users);
            })
            .catch(err => {
                console.log(err.response);
                setLoading(false);
                setError(new Error("ユーザー情報の取得に失敗しました"));
            });
    }, []);

    return { getUserList, userList, loading, error };
};
