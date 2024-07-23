export interface IAuth {
    name?: string,
    email: string,
    password: string
}

export interface IAuthResponse {
    token: string
}