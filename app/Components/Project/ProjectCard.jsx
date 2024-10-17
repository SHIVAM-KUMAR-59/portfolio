import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  isReversed,
  margin,
  variants,
}) => {
  return (
    <motion.div
      className="h-auto w-[80%] mx-auto my-2 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`items-center flex ${isReversed ? 'flex-row-reverse' : ''}`}
      >
        <div className="w-[53%] h-auto relative pl-2 flex flex-col">
          <h1 className="text-[40px] text-[#CCF6F0]">{title}</h1>
          <div className="m-3">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-[18px]">
                  <p className="flex justify-center items-center gap-2">
                    Source Code <FaGithub />
                  </p>
                </span>
              </button>
            </a>
          </div>
          <div
            className={`h-auto bg-white/10 w-full rounded-[25px] z-10 ${margin}`}
            style={{
              backdropFilter: 'blur(10px)',
              padding: '1.25rem',
            }}
          >
            <p className="text-[#CCF6F0]">{description}</p>
          </div>
        </div>
        <div className=" w-[40%] h-[250px] rounded-[22px] relative z-0 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            height={350}
            width={900}
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}
export default ProjectCard
