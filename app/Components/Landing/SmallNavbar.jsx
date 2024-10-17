import Image from 'next/image'
import React, { useState } from 'react'

const SmallNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full bg-black bg-opacity-40 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={80}
          height={50}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="md:hidden">
        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Dropdown Menu */}
      <div
        className={`absolute top-16 right-0 bg-black bg-opacity-40 w-48 rounded-md shadow-lg ${
          isOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <ul className="flex flex-col p-2">
          <li className="text-white py-2 bg-black/40 hover:bg-gray-700 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="text-white py-2 bg-black/40 hover:bg-gray-700 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="text-white py-2 bg-black/40 hover:bg-gray-700 cursor-pointer">
            <a href="#Skills">Skills</a>
          </li>
          <li className="text-white py-2 bg-black/40 hover:bg-gray-700 cursor-pointer">
            <a href="#project">Projects</a>
          </li>
          <li className="text-white py-2 bg-black/40">
            <button className="border border-white text-[15px] py-2 px-3 rounded-[25px] lg:rounded-3xl  bg-[#24212197] hover:bg-[#242121c0]">
              <a href="#contact">Contact Me</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SmallNavbar
