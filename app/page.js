'use client'

import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Landing/Hero'
import Projects from './Components/Project/Projects'
import Skill from './Components/Skills/Skill'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  )
}
