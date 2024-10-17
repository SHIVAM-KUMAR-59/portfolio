import React from 'react'
import { motion } from 'framer-motion'
import SkillBar from './SkillBar'

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const Skill = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center bg-black"
      style={{
        backgroundImage: 'url(/Skills.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
      transition={{ duration: 0.8 }}
      id="Skills"
    >
      <motion.div
        className="text-left w-full max-w-7xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1
          className="text-white text-[40px] lg:text-[80px] font-bold mb-16"
          style={{ fontFamily: 'var(--font-k2d)' }}
        >
          My Skills
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Image Section */}
        <div className="w-full lg:w-[40%] flex justify-end mb-8 lg:mb-0 relative order-1 lg:order-2">
          {/* Blurred background container */}
          <motion.div
            className="absolute inset-0 bg-slate-800"
            style={{
              filter: 'blur(100px)',
              zIndex: 0,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* Image */}
          <motion.img
            src="/Skills-globe.png"
            alt="Skills"
            className="h-full w-full object-contain relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>

        {/* Skills Section */}
        <div className="w-full lg:w-[50%] mb-8 lg:mb-0 order-2 lg:order-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {' '}
            {/* Adjusted gap size */}
            {/* Left Column */}
            <div>
              <SkillBar skill="HTML" level={7} />
              <SkillBar skill="CSS" level={6} />
              <SkillBar skill="JS" level={6} />
              <SkillBar skill="Tailwind" level={5} />
            </div>
            {/* Right Column */}
            <div>
              <SkillBar skill="ReactJs" level={6} />
              <SkillBar skill="NodeJs" level={4} />
              <SkillBar skill="Express" level={5} />
              <SkillBar skill="NextJs" level={6} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Skill
