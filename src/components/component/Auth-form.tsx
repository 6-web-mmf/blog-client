import React from 'react'
import { IRegisterRequest, ISignInRequest } from '../../types/auth.type'
import { AuthService } from '../../service/auth.service'
import { ERRORS, AUTH_MESSAGES } from '../../types/enums.type'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type AuthRequest = IRegisterRequest | ISignInRequest

const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) return ERRORS.EMPTY_FIELDS
  if (!emailRegex.test(email)) return ERRORS.INVALID_EMAIL
  return null
}

const validatePassword = (password: string): string | null => {
  if (!password) return ERRORS.EMPTY_FIELDS
  if (password.length < 5) return ERRORS.SHORT_PASSWORD
  return null
}

const validateAuthData = (authData: AuthRequest, isRegistering: boolean): string[] => {
  const errors: string[] = []

  if (isRegistering && 'name' in authData && !authData.name) {
    errors.push(ERRORS.EMPTY_FIELDS)
  }

  if (!authData.email || !authData.password) {
    errors.push(ERRORS.EMPTY_FIELDS)
    return errors
  }

  const emailError = validateEmail(authData.email)
  if (emailError) errors.push(emailError)

  const passwordError = validatePassword(authData.password)
  if (passwordError) errors.push(passwordError)

  return errors
}

export const AuthForm = () => {
  const [status, setStatus] = React.useState<'Sign Up' | 'Sign In'>('Sign Up')
  const [authData, setAuthData] = React.useState<AuthRequest>({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAuthData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateAuthData(authData, status === 'Sign Up')

    if (newErrors.length === 0) {
      try {
        if (status === 'Sign Up') {
          await AuthService.register(authData as IRegisterRequest)
          toast.success(AUTH_MESSAGES.REGISTRATION_SUCCESS)
        } else {
          await AuthService.login(authData as ISignInRequest)
          toast.success(AUTH_MESSAGES.LOGIN_SUCCESS)
        }
      } catch {
        toast.error(ERRORS.SERVER_ERROR)
      }
    } else {
      newErrors.forEach(error => toast.error(error))
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-1/3 bg-white rounded shadow-lg p-8 m-4">
        <h1 className="block w-full text-center text-2xl font-bold mb-6">{status}</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          {status === 'Sign Up' && (
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="name">
                Username
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest"
                type="text"
                name="name"
                id="name"
                value={(authData as IRegisterRequest).name || ''}
                onChange={handleInputChange}
                placeholder="Username"
              />
            </div>
          )}
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="email">
              Email
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest"
              type="email"
              name="email"
              id="email"
              value={authData.email}
              onChange={handleInputChange}
              placeholder="someone@example.com"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-2 font-bold text-lg text-grey-darkest" htmlFor="password">
              Password
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest"
              type="password"
              name="password"
              id="password"
              value={authData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              {status}
            </button>
          </div>
          <div className="text-center">
            <p className="text-grey-dark text-sm">
              {status === 'Sign Up' ? (
                <span
                  className="no-underline text-blue font-bold cursor-pointer"
                  onClick={() => {
                    setStatus('Sign In')
                    setAuthData({ email: '', password: '' })
                  }}
                >
                  Login here
                </span>
              ) : (
                <span
                  className="no-underline text-blue font-bold cursor-pointer"
                  onClick={() => {
                    setStatus('Sign Up')
                    setAuthData({ name: '', email: '', password: '' })
                  }}
                >
                  Register here
                </span>
              )}
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}
