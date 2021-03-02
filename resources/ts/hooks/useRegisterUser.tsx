import React from "react";
import { useCallback, useState } from "react";
import apiClient from "../utils/apiClient";
import { AdminRole, GeneralRole } from "../types/AuthUserType";

export const useRegisterUser = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | undefined>();
    const [isRegister, setIsRegister] = useState(false);

    const registerUser = useCallback(
        async (
            loginId: string,
            password: string,
            role: AdminRole | GeneralRole | undefined
        ): Promise<void> => {
            setLoading(true);
            setError(undefined);
            setIsRegister(false);
            apiClient
                .post("/api/registerUser", {
                    loginId,
                    password,
                    role
                })
                .then(res => {
                    setLoading(false);
                    setIsRegister(true);
                    console.log(res);
                })

                .catch(err => {
                    console.log(err.response);
                    setLoading(false);
                    setError(new Error(err.response.data.message));
                });
        },
        []
    );

    return { registerUser, loading, isRegister, error };
};
