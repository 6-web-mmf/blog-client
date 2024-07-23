export class TokenService {
    static getAccessToken = () => {
        return localStorage.getItem("token")
    }
    
    static saveAccessToken = (token: string) => {
        localStorage.setItem('token', token)
    }

    static removeAccessToken = () => {
        localStorage.removeItem("token")
    }
}