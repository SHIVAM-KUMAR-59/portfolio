'use client'

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from 'react'

const SKILLS = [
  "Java", "C/C++", "GoLang", "Python",
  "React", "Next.js", "SpringBoot", "Node.js",
  "Docker", "Redis", "Firebase", "OOP / SOLID",
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const leftX = useTransform(scrollYProgress, [0.05, 0.35], [-80, 0]);
  const rightX = useTransform(scrollYProgress, [0.05, 0.35], [80, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  // Subtle background gradient shift on scroll
  const bgGradientPos = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgStyle = useMotionTemplate`radial-gradient(ellipse 60% 40% at ${bgGradientPos}% 60%, rgba(255,255,255,0.025), transparent)`;

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative py-28 md:py-44 px-6 md:px-12 bg-[#0c0c0c] overflow-hidden"
      style={{ opacity: sectionOpacity }}
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: bgStyle }} />

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-start relative z-10">
        {/* Left sticky */}
        <motion.div className="lg:sticky lg:top-40" style={{ x: leftX }}>
          {/* Section label */}
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[8px] tracking-[0.5em] text-white/20 uppercase">01 — About</span>
            <motion.div
              className="h-px bg-white/10"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white"
              initial={{ y: "100%", skewY: 3 }}
              whileInView={{ y: 0, skewY: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              SHIVAM<br />KUMAR
            </motion.h2>
          </div>

          <motion.p
            className="text-white/40 text-lg leading-relaxed max-w-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Focused on building scalable systems and modern web applications. Specialized in high-performance architectures using Java, C++, and Go.
          </motion.p>

          <motion.div
            className="p-8 border border-white/[0.07] bg-white/[0.02] relative overflow-hidden group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ borderColor: "rgba(255,255,255,0.14)" }}
          >
            {/* Hover shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/25 mb-4">Academic Background</p>
            <p className="text-base font-bold text-white">B.Tech in Computer Science & Engineering</p>
            <p className="text-white/35 text-sm mt-1">KIIT University, 2023 — 2027</p>
            <div className="mt-5 inline-block px-4 py-1.5 bg-white/[0.05] border border-white/10 text-xs text-white/55 tracking-widest">
              CGPA: 9.06
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div className="space-y-20" style={{ x: rightX }}>
          {/* Skills */}
          <div>
            <motion.h3
              className="text-[9px] uppercase tracking-[0.45em] text-white/22 mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technical Toolkit
            </motion.h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-5 py-2.5 bg-white/[0.04] text-white/60 text-xs border border-white/[0.07] rounded-full tracking-wider cursor-default relative overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.045, duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.95)" }}
                >
                  <motion.span
                    className="absolute inset-0 bg-white/[0.06] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">{skill}</span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div id="experience">
            <motion.h3
              className="text-[9px] uppercase tracking-[0.45em] text-white/22 mb-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Experience
            </motion.h3>
            <div className="space-y-10">
              {[
                { period: "2024 — Present", role: "SDE Intern", company: "Ayuryuj", desc: "Next.js + Firebase frontend engineering and GoLang backend systems development." },
                { period: "2023", role: "Full-Stack Freelance", company: "Independent", desc: "Architected a comprehensive event management platform with Role-Based Access Control (RBAC)." },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  className="group relative pl-8 py-1"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-hover:bg-white/35 transition-colors duration-500"
                    whileHover={{ scaleY: [1, 1.05, 1] }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute left-[-2px] top-1 w-[5px] h-[5px] rounded-full bg-white/0 group-hover:bg-white/60 transition-all duration-400"
                  />
                  <span className="text-[8px] uppercase tracking-[0.38em] text-white/22">{exp.period}</span>
                  <h4 className="text-base font-bold uppercase text-white mt-1 tracking-tight">
                    {exp.role}<span className="text-white/28 font-normal"> · {exp.company}</span>
                  </h4>
                  <p className="text-white/38 text-sm mt-2 leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About