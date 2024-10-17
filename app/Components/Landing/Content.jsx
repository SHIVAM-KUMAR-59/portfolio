'use client'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Content = () => {
  return (
    <section>
      <div className="lg:mx-20 text-left mt-24">
        <h1
          className="lg:text-[130.66px] text-[50px] ml-5 lg:ml-28 leading-[1.1] font-bold px-2"
          style={{ fontFamily: 'var(--font-k2d)', fontWeight: 300 }}
        >
          Shivam Kumar
        </h1>
        <div className="flex mt-10 m-5 lg:ml-28 gap-5">
          <Image
            src="/Line1.png"
            alt="Content"
            width={5}
            height={5}
            style={{
              objectFit: 'cover',
            }}
          />
          <div>
            <div
              className="text-[25px] w-[250px] leading-[1.2]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              I&apos;m a full-stack web developer and I work remotely from
              India.
              <div className="text-[40px] flex gap-5 my-3 lg:hidden">
                <a
                  href="https://github.com/SHIVAM-KUMAR-59"
                  target="blank"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/_shivam_kumar_55?igsh=MXE2dGFibWt5dGV5Nw=="
                  target="blank"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-kumar-59/"
                  target="blank"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/ShivamK75854391"
                  target="blank"
                  className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
                >
                  <FaTwitter />
                </a>
              </div>
              <button className="lg:hidden w-[80%] text-center p-2 rounded-[15px] bg-slate-500/20 hover:bg-slate-500/30">
                <a href="/Resume.pdf" download="Shivam's_Resume.pdf">
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
