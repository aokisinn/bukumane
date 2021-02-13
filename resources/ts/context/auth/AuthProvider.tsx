import React from "react";
import { createContext } from "react";
import { AuthType, useProvideAuth } from "./useProvideAuth";

export const authContext = createContext<AuthType>({} as AuthType);

const AuthProvider: React.FC = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthProvider;
