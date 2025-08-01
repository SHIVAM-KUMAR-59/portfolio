"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "AI Integrated Chat-bot",
      description:
        "Developed AI-driven chat application using Next.js, TypeScript, and Clerk authentication with real-time synchronization and sub-second response time optimization.",
      tech: ["Next.js", "TypeScript", "Clerk", "AI/ML"],
      liveDemo: "#",
      github: "#",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Sooth Mind",
      description:
        "Built a full-stack Mental Well-being Platform leveraging Next.js, MongoDB, and Hugging Face API to analyze journal entries and deliver personalized mental health insights.",
      tech: ["Next.js", "MongoDB", "Hugging Face API", "NextAuth", "Recharts"],
      liveDemo: "#",
      github: "#",
      gradient: "from-cyan-400 to-cyan-600",
      bgGradient: "from-cyan-500/10 to-cyan-600/10",
    },
    {
      title: "Connect-Ups",
      description:
        "Created startup showcase platform using Next.js, TypeScript, and Sanity CMS. Improved user engagement by 40% through intuitive UI/UX design and responsive layout.",
      tech: ["Next.js", "TypeScript", "Sanity CMS", "UI/UX"],
      liveDemo: "#",
      github: "#",
      gradient: "from-teal-400 to-teal-600",
      bgGradient: "from-teal-500/10 to-teal-600/10",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-gradient-to-b from-black/50 to-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10`}
            >
              <div className="p-6">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50 group-hover:border-gray-600/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveDemo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-700/50 rounded-lg text-gray-300 text-sm font-medium hover:border-blue-400/50 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
