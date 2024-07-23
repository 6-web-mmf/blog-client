import axios from "axios";
import { IAuth, IAuthResponse } from "../types/auth.type";
import { TokenService } from "./token.service";


export class AuthService {

    public static async register(data: IAuth){
        const response = await axios.post<IAuthResponse>('/register', data)
        const { token } = response.data
        TokenService.saveAccessToken(token)
        return token
    }

    public static async login(data: IAuth){
        const response = await axios.post<IAuthResponse>('/login', data)
        const { token } = response.data 
        TokenService.saveAccessToken(token)
        return token
    }

    public static async logout() {
        TokenService.removeAccessToken()
    }
}