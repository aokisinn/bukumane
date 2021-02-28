export type GeneralRole = 0;

export type AdminRole = 100;

export type AuthUserType = {
    id: number;
    name: string;
    address: string;
    role: GeneralRole | AdminRole;
};
