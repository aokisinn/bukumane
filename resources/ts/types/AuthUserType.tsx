export type GeneralRole = "0";

export type AdminRole = "999";

export type AuthUserType = {
    id: number;
    name: string;
    address: string;
    // TODO 権限に関する値は要調整
    role: GeneralRole | AdminRole;
};

export const isAdmin = (role: AdminRole | GeneralRole | undefined): boolean => {
    return role === "999";
};
