'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, GraduationCap, Trophy, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      label: 'Years of Experience',
      value: '3+',
      icon: Code2,
      description: 'Professional Development',
    },
    {
      label: 'Academic Excellence',
      value: '9.0/10',
      icon: GraduationCap,
      description: 'CGPA at KIIT',
    },
    {
      label: 'Projects Delivered',
      value: '15+',
      icon: Trophy,
      description: 'Successful Implementations',
    },
    {
      label: 'Leadership Roles',
      value: '3+',
      icon: Users,
      description: 'Team Management',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a dedicated Full-Stack Developer with over 2 years of
                hands-on experience in modern web technologies. Currently
                pursuing my B.Tech in Computer Science at KIIT University, where
                I maintain an exceptional 9.0/10.0 CGPA.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across the entire development stack, from
                crafting intuitive user interfaces with React and Next.js to
                building robust backend systems using Node.js, Java, and GoLang.
                I have a proven track record of delivering scalable solutions
                that improve user engagement and system performance.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond technical skills, I bring strong leadership experience,
                having served as Head Boy and Cricket Team Captain, which has
                honed my ability to lead teams, manage projects, and deliver
                results under pressure.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {[
                'Problem Solving',
                'Team Leadership',
                'Agile Development',
                'Performance Optimization',
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <stat.icon size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-10 w-1 h-1 bg-cyan-400/20 rounded-full"
        />
      </div>
    </section>
  )
}

export default About
