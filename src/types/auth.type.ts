export interface ISignInRequest {
    email: string,
    password: string
}

export interface IRegisterRequest extends ISignInRequest {
    name:string
}


export interface IAuthResponse {
    token: string
}