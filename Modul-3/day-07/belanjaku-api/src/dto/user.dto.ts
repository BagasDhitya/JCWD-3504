export enum UserRole {
    ADMIN,
    USER
}

export interface UserDTO {
    email: string,
    password: string
    role?: UserRole
}