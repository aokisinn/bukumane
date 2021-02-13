import { useContext } from "react";
import { authContext } from "./AuthProvider";

export const useAuth = () => {
    return useContext(authContext);
};
