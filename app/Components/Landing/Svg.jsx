'use client'
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import DownloadButton from './DownloadButton'

const Svg = () => {
  return (
    <div className="relative mr-40 rounded-[100%] mt-16 border-l-2 border-l-red-500">
      <div className="hidden lg:block">
        <svg
          width="875"
          height="575"
          viewBox="0 0 875 575"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_5_37)">
            <ellipse
              cx="301.324"
              cy="351.96"
              rx="241.775"
              ry="185.105"
              transform="rotate(-59.503 301.324 351.96)"
              fill="url(#paint0_radial_5_37)"
            />
          </g>
          <g filter="url(#filter1_f_5_37)">
            <ellipse
              cx="538.172"
              cy="389.75"
              rx="266.024"
              ry="210.941"
              transform="rotate(-80.5461 538.172 389.75)"
              fill="url(#paint1_radial_5_37)"
            />
          </g>
          <g filter="url(#filter2_bi_5_37)">
            <ellipse
              cx="431"
              cy="402"
              rx="313"
              ry="305"
              fill="url(#paint2_linear_5_37)"
              fillOpacity="0.46"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_5_37"
              x="0.0819769"
              y="23.3757"
              width="602.484"
              height="657.168"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_5_37"
              />
            </filter>
            <filter
              id="filter1_f_5_37"
              x="201.465"
              y="0.982376"
              width="673.414"
              height="777.535"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="62.0248"
                result="effect1_foregroundBlur_5_37"
              />
            </filter>
            <filter
              id="filter2_bi_5_37"
              x="91"
              y="70"
              width="680"
              height="664"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="13.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_5_37"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_5_37"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_5_37"
              />
            </filter>
            <radialGradient
              id="paint0_radial_5_37"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(301.324 434.228) rotate(-90) scale(387.348 505.937)"
            >
              <stop stopColor="#ADD9F4" />
              <stop offset="0.446" stopColor="#476C9B" stopOpacity="0.724" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_5_37"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(538.172 483.501) rotate(-90) scale(441.413 556.679)"
            >
              <stop stopColor="#984447" />
              <stop offset="0.446" stopColor="#998844" stopOpacity="0.278431" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_5_37"
              x1="431"
              y1="97"
              x2="431"
              y2="707"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-10">
        <DownloadButton />
      </div>

      <div className="absolute bottom-10 text-[40px] flex">
        <a
          href="https://github.com/SHIVAM-KUMAR-59"
          target="blank"
          className="hover:scale-105 transition-transform duration-200"
        >
          <FaGithub
            className="w-10 h-10 absolute"
            style={{ transform: 'translate(-20px, -300px)' }}
          />
        </a>
        <a
          href="https://www.instagram.com/_shivam_kumar_55?igsh=MXE2dGFibWt5dGV5Nw=="
          target="blank"
          className="hover:scale-105 transition-transform duration-200"
        >
          <FaInstagram
            className="w-10 h-10 absolute"
            style={{ transform: 'translate(-10px, -210px)' }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-kumar-59/"
          target="blank"
          className="hover:scale-105 transition-transform duration-200"
        >
          <FaLinkedin
            className="w-10 h-10 absolute"
            style={{ transform: 'translate(40px, -120px)' }}
          />
        </a>
        <a
          href="https://x.com/ShivamK75854391"
          target="blank"
          className="hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
        >
          <FaTwitter
            className="w-10 h-10 absolute"
            style={{ transform: 'translate(120px, -60px)' }}
          />
        </a>
      </div>
    </div>
  )
}

export default Svg
