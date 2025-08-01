'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Ayuryuj',
      location: 'New Delhi, India',
      period: 'Mar 2025 - July 2025',
      description: [
        'Developing responsive frontend with Next.js and Firebase for healthcare application',
        'Learning GoLang to contribute to backend services and API functionalities',
        'Collaborating on seamless frontend-backend integration in an agile team environment',
      ],
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Junior Full Stack Developer Intern',
      company: 'Krishhlabs',
      location: 'Bangalore, India',
      period: 'Jan 2025 - May 2025',
      description: [
        'Building scalable web applications using React, Node.js, and MongoDB stack',
        'Designed RESTful APIs improving client-server communication efficiency by 25%',
        'Enhanced application performance through code optimization and database indexing',
        'Implemented real-time user feedback module, improving customer satisfaction rates',
      ],
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'BrandNav',
      location: 'Pune, India',
      period: 'Jan 2025 - Feb 2025',
      description: [
        'Developed responsive UI components using React.js and Next.js for media platform',
        'Built interactive video player with custom controls and analytics integration',
      ],
      color: 'from-teal-400 to-teal-600',
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full hidden md:block shadow-lg`}
                />

                <div className="md:ml-16 bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + itemIndex * 0.1,
                        }}
                        className="flex items-start space-x-2 text-gray-300"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                        />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
