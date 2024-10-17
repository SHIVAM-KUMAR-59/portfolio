import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div
        className="bg-black/40 mt-5 flex justify-between lg:justify-around lg:gap-5 w-[80%] mx-auto items-center p-2 z-10 relative"
        style={{
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div>
          <a href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={50}
              style={{
                objectFit: 'cover',
              }}
            />
          </a>
        </div>
        <div className="w-[45%]">
          <ul
            className="flex justify-center lg:justify-evenly lg:text-xl gap-2 lg:gap-2"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-300 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-300 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-300 cursor-pointer">
              <a href="#Skills">Skills</a>
            </li>
            <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-300 cursor-pointer">
              <a href="#project">Projects</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="border border-white text-[20px] py-2 px-3 rounded-[25px] lg:rounded-3xl  bg-[#24212197] hover:bg-[#242121c0]">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
