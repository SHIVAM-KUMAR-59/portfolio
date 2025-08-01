"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript/TypeScript", "Python", "Java", "GoLang", "C/C++", "SQL"],
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TailwindCSS", "Material-UI", "ShadCN", "Bootstrap"],
      color: "from-cyan-400 to-cyan-600",
      bgColor: "from-cyan-500/10 to-cyan-600/10",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "SpringBoot", "MongoDB", "MySQL", "PostgreSQL"],
      color: "from-teal-400 to-teal-600",
      bgColor: "from-teal-500/10 to-teal-600/10",
    },
    {
      title: "Tools & Other",
      skills: ["Git", "RESTful APIs", "GraphQL", "Docker", "AWS", "Technical Leadership"],
      color: "from-slate-400 to-slate-600",
      bgColor: "from-slate-500/10 to-slate-600/10",
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-950/50 to-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 group`}
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-default group-hover:text-gray-200"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
