import React from "react"
import { IAuth } from "../../types/auth.type"

enum ERRORS {
  INVALID_EMAIL = "Invalid email format!",
  SHORT_PASSWORD = "Password should be at least 6 characters long!",
  EMPTY_FIELDS = "All fields are required!"
}

const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    return ERRORS.EMPTY_FIELDS
  }
  if (!emailRegex.test(email)) {
    return ERRORS.INVALID_EMAIL
  }
  return null
}

const validatePassword = (password: string): string | null => {
  if (!password) {
    return ERRORS.EMPTY_FIELDS
  }
  if (password.length < 6) {
    return ERRORS.SHORT_PASSWORD
  }
  return null
}

const validateAuthData = (authData: IAuth): string[] => {
  const errors: string[] = []

  if (!authData.email || !authData.password) {
    errors.push(ERRORS.EMPTY_FIELDS)
    return errors
  }

  const emailError = validateEmail(authData.email)
  if (emailError) {
    errors.push(emailError)
  }

  const passwordError = validatePassword(authData.password)
  if (passwordError) {
    errors.push(passwordError)
  }

  return errors
}

export const AuthForm = () => {
  const [status, setStatus] = React.useState<string>("Sign Up")
  const [authData, setAuthData] = React.useState<IAuth>({ email: "", password: "" })
  const [errors, setErrors] = React.useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAuthData({
      ...authData,
      [name]: value,
    })
  }

  // TODO: Сделать функционал для отправки данных на бэк
  const handleSubmit = (): void => {
    const newErrors = validateAuthData(authData)
    setErrors(newErrors)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-1/3 bg-white rounded shadow-lg p-8 m-4">
        <h1 className="block w-full text-center text-2xl font-bold mb-6">{status}</h1>
        <form className="mb-4 md:flex md:flex-wrap md:justify-between">
          <div className="flex flex-col mb-4 md:w-full">
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
          <div className="flex flex-col mb-6 md:w-full">
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
            {status.includes("Up") ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            )}
          </div>
          {errors.length > 0 && (
            <div className="text-center mb-4">
              {errors.map((error, index) => (
                <p key={index} className="text-red-500 text-sm">
                  {error}
                </p>
              ))}
            </div>
          )}
        </form>
        <div className="text-center">
          <p className="text-grey-dark text-sm">
            {status.includes("Up") ? (
              <span
                className="no-underline text-blue font-bold cursor-pointer"
                onClick={() => setStatus("Sign In")}
              >
                Login here
              </span>
            ) : (
              <span
                className="no-underline text-blue font-bold cursor-pointer"
                onClick={() => setStatus("Sign Up")}
              >
                Register here
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
