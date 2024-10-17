import Image from 'next/image'
import React from 'react'

const DownloadButton = () => {
  return (
    <div>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8; /* Optional: Slightly fade during pulse */
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .pulsing-image {
            animation: pulse 1.5s infinite; /* Animation definition */
          }
          .pulsing-image:hover {
            animation: none; /* Pause animation on hover */
          }
        `}
      </style>
      <a
        href="/Resume.pdf"
        download="Shivam's_Resume.pdf"
        className="flex items-center justify-center"
      >
        <Image
          src="/CVBALL.png"
          alt="Download CV"
          width={150}
          height={100}
          className="pulsing-image"
        />
      </a>
    </div>
  )
}

export default DownloadButton
