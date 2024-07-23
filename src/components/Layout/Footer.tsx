import React from "react"
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          ©dedserch Blog
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/_dedserch_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/in/dmitry-serzhputovski-1a735a298/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-gray-300" />
          </a>
          <a href="https://github.com/dedserch" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
