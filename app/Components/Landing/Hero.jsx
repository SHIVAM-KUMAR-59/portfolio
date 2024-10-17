'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Content from './Content'
import Svg from './Svg'

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  // Variants for the hero section animation
  const heroVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  // Variants for the navbar animation
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Function to handle completion of hero animation
  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  return (
    <div
      className="min-h-screen lg:min-h-0 overflow-hidden relative"
      style={{
        backgroundImage: 'url(/Landing.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div initial="hidden" animate="visible" variants={navbarVariants}>
        <Navbar />
      </motion.div>

      <div className="flex">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          onAnimationComplete={handleAnimationComplete}
        >
          <Content animationStart={animationComplete} />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={animationComplete ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } },
          }}
          className="hidden lg:block"
        >
          <Svg />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
