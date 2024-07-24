import instance from "../api/axios";
import { IAuthResponse, IRegisterRequest, ISignInRequest } from "../types/auth.type";
import { TokenService } from "./token.service";


export class AuthService {

    public static async register(data: IRegisterRequest){
        const response = await instance.post<IAuthResponse>('/register', data)
        const { token } = response.data
        TokenService.saveAccessToken(token)
        return token
    }

    public static async login(data: ISignInRequest){
        const response = await instance.post<IAuthResponse>('/login', data)
        const { token } = response.data 
        TokenService.saveAccessToken(token)
        return token
    }

    public static async logout() {
        TokenService.removeAccessToken()
    }
}