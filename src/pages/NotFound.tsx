import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
  <div className="bg-background text-foreground flex-grow flex items-center justify-center">
    <div className="space-y-4">
        <h2 className="text-8xl mb-4">404</h2>
        <h1 className="text-3xl font-semibold">Oops! Page not found</h1>
        <p className="text-sm text-muted-foreground">We are sorry, but the page you requested was not found</p>
        <NavLink to="/" className={"text-sm"} >Back to home</NavLink>
    </div>
  </div>
  )
}

export default NotFound