import React from 'react'
import { motion } from 'framer-motion'
import ProjectHeader from './ProjectHeader'
import ProjectCard from './ProjectCard'
import { projectsData } from './ProjectData'
import SmallCard from './SmallCard'

const Projects = () => {
  return (
    <section>
      <motion.div
        className="h-auto lg:block"
        style={{
          backgroundImage: 'url(/Projects.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          fontFamily: 'var(--font-poppins)',
        }}
        id="project"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <ProjectHeader />
        <div className="h-auto lg:flex flex-col justify-evenly hidden">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="lg:hidden my-2">
          {projectsData.map((project, index) => (
            <SmallCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
