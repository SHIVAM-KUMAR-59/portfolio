import React from 'react'
import DotGrid from './DotGrid'
import { motion } from 'framer-motion'


const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

const rotateIn = {
  hidden: { rotate: 45, opacity: 0 },
  visible: { rotate: 0, opacity: 1 },
}

const slideRight = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

const slideLeft = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

const slideUp = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const About = () => {
  return (
    <motion.section
      style={{
        backgroundImage: 'url(/About.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, staggerChildren: 0.3 }}
      className="relative"
    >
      <motion.div
        className="min-h-screen w-full overflow-hidden relative px-4 sm:px-6 md:px-8 lg:px-12 py-8 lg:py-14"
        id="about"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, staggerChildren: 0.3 }}
      >
        {/* Heading Section */}
        <motion.div
          className="w-full flex justify-center items-center gap-3 mb-8 lg:mb-12"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] text-left leading-tight lg:leading-[102.5px]"
            style={{ fontFamily: 'var(--font-k2d)' }}
            variants={scaleUp}
            transition={{ duration: 1 }}
          >
            About <br className="hidden sm:block" /> Me
          </motion.h1>
          <motion.img
            src="/gg_arrow-left.png"
            alt="Arrow"
            className="w-8 sm:w-10 lg:w-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={rotateIn}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          className="flex flex-col items-center space-y-8 lg:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {/* Image and Text Container */}
          <motion.div
            className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 relative"
            variants={slideLeft}
            transition={{ duration: 0.8 }}
          >
            {/* Laptop Image Container */}
            <div className="relative w-full lg:w-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <motion.img
                src="/MINI_BALL.png"
                alt="Mini Ball"
                className="absolute bottom-[-120px] left-[-60px] lg:bottom-[-250px] lg:left-[-120px] w-24 lg:w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.img
                src="/About-Laptop.png"
                alt="Laptop"
                className="h-full w-full object-contain"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={rotateIn}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>

            {/* About Text */}
            <motion.p
              className="text-base sm:text-lg lg:text-[20px] tracking-wide lg:tracking-wider w-full lg:w-[50%] text-center lg:text-left"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 300 }}
              variants={slideRight}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Meet Shivam, a talented web developer with a passion for crafting
              elegant and functional digital solutions. Armed with expertise in
              MERN, Tailwind, NextJs, and more, their keen eye for detail,
              coupled with their commitment to staying abreast of industry
              trends, ensures that every project they undertake is not only
              visually stunning but also optimized for peak performance.
            </motion.p>
          </motion.div>

          {/* Button */}
          <motion.button
            className="text-lg sm:text-xl lg:text-2xl py-2 px-6 lg:py-3 lg:px-8 bg-[#1470BC] hover:bg-[#0a62a0] text-white rounded-[50px] transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg mt-8 lg:mt-12"
            variants={slideUp}
            whileHover={{ scale: 1.1 }}
          >
            <a href="#contact">Get In Touch</a>
          </motion.button>
        </motion.div>

        {/* DotGrid - Only visible on larger screens */}
        <div className="hidden lg:block absolute right-20 bottom-20">
          <DotGrid />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default About
