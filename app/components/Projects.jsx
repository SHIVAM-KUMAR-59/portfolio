'use client'

import {
  motion,
  useTransform,
  useScroll
} from "framer-motion";
import { useRef } from 'react'
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    id: "01",
    title: "CODESPRINT",
    tags: ["Next.js", "Socket.io", "Redis"],
    desc: "A high-performance real-time DSA contest platform designed for competitive programming at scale.",
    action: "SOURCE",
    icon: "terminal",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn2vFEt3JRarl_jiZJFLxPpLvbOjgSMf4kEXLQdBLkZXKmX70a0eIAZiaoAwil6qwpI6cnADV3mqDe4U9CDpZMUPxHRpg6hEH67VUOgPfZB678D7r8Ze03jvVtgWqdxVih_ezsZKagC5puG9nRAPv8-2CMY30T_u1qsqF_wc86fo8SDOU0aw40vvSV0kpDh23L8d-Ea5CjAAvlebzlkRvNz0j-j09bEXh5-uRIS_nvQSeZWBN6mQOTsJUMQag0EtJan9vR2FevmH_Z",
  },
  {
    id: "02",
    title: "SOOTH MIND",
    tags: ["Hugging Face API", "NLP"],
    desc: "Intelligent AI-driven journal platform utilizing state-of-the-art sentiment analysis for mental well-being.",
    action: "CASE STUDY",
    icon: "auto_awesome",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvSFBu786kgu0KpdouEjNXzg8l9QCDbvz3asvLzzgHGR_Eg0guoS7dyLLaB4L2SEJbpL17WYXmyBh8QaVL8MnjnNl8c_DhlrTIPl5A_7vGVyV_8y8MGTIuaJAXcC77-nXyc9KjuBzKCfmuGBVhbAHedLI0lsNm-dK783rbbXkSCmo8ZiuK1iSRSylYYY3IaMO_rrb-GK4gronUKqy3Yd0T8OOAD3f9S2IZ07xv_FfbpPxgDEPdF7kEvEhVGifav8ymUwRbHk0ZQeJe",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0.05, 0.4], [70, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);

  return (
    <section ref={ref} id="works" className="relative py-28 md:py-44 px-6 md:px-12 bg-[#0e0e0e]">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-28 gap-6"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[8px] tracking-[0.5em] text-white/20 uppercase">02 — Works</span>
              <motion.div className="h-px bg-white/10" initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} />
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-none"
                initial={{ y: "100%", skewY: 2 }}
                whileInView={{ y: 0, skewY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              >
                FEATURED<br />PROJECTS
              </motion.h2>
            </div>
          </div>
          <span className="text-[8px] tracking-[0.38em] uppercase text-white/18 self-end pb-2">[ ENGINEERING REPO ]</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects