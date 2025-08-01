'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="text-center z-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Shivam Kumar
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Full-Stack Developer & Problem Solver
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            {
              icon: Github,
              href: 'https://github.com/SHIVAM-KUMAR-59',
              label: 'GitHub',
            },
            {
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/shivam-kumar-946614277/',
              label: 'LinkedIn',
            },
            {
              icon: Mail,
              href: 'mailto:shivamkumardev01@gmail.com',
              label: 'Email',
            },
            {
              icon: Download,
              href: '/resume.pdf',
              label: 'Resume',
              download: true,
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              {...(social.download
                ? { download: 'Shivam_Kumar_Resume.pdf' }
                : {})}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
            >
              <social.icon
                size={24}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-600/50 rounded-full text-gray-300 hover:border-blue-400/50 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{
              x:
                typeof window !== 'undefined'
                  ? Math.random() * window.innerWidth
                  : Math.random() * 1000,
              y:
                typeof window !== 'undefined'
                  ? Math.random() * window.innerHeight
                  : Math.random() * 1000,
            }}
            animate={{
              y: [null, Math.random() * -200, null],
              x: [null, Math.random() * 200 - 100, null],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-cyan-400/10 rounded-full"
        />
      </div>
    </section>
  )
}

export default Hero
