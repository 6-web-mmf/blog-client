import axios from 'axios'
import { TokenService } from '../service/token.service'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
})

instance.interceptors.request.use((config) => {
  const token = TokenService.getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
