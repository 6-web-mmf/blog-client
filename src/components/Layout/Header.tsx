import { Button } from "@/components/ui/button"
import { Link, NavLink } from "react-router-dom"
import React from "react"

export default function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link to="#" className="mr-6 hidden lg:flex">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">ShadCN Inc</span>
      </Link>
      <div className="ml-auto flex gap-2">
        <NavLink to="/auth"><Button>Sign Up</Button></NavLink>
      </div>
    </header>
  )
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function MountainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
