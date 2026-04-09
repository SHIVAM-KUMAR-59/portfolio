'use client'

import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useRef, useState, useCallback } from 'react'

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 150, damping: 20 });
  const shineX = useTransform(mouseX, [0, 1], [-60, 60]);
  const shineY = useTransform(mouseY, [0, 1], [-60, 60]);

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className="group relative aspect-video overflow-hidden bg-[#111] border border-white/[0.06] cursor-pointer"
      style={{ perspective: 800, rotateX: hovered ? rotateX : 0, rotateY: hovered ? rotateY : 0 }}
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.18, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
    >
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: hovered ? 1.06 : 1, filter: hovered ? "grayscale(0%) brightness(0.65)" : "grayscale(80%) brightness(0.45)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 z-10" />

      {/* 3D specular shine */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(circle 280px at ${useTransform(shineX, v => `calc(50% + ${v}px)`)} ${useTransform(shineY, v => `calc(50% + ${v}px)`)}, rgba(255,255,255,0.07), transparent)`,
        }}
      />

      {/* Border reveal on hover */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none border border-white/0 group-hover:border-white/15 transition-all duration-500"
      />

      {/* Index */}
      <div className="absolute top-6 right-8 text-[9px] tracking-[0.35em] text-white/20 z-30">{project.id}</div>

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-30">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              className="text-[8px] tracking-[0.28em] uppercase text-white/38 border border-white/10 px-2.5 py-1"
              whileHover={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-3">
          {project.title}
        </h3>

        {/* Description — slides up on hover */}
        <motion.p
          className="text-white/45 text-sm max-w-sm leading-relaxed mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.desc}
        </motion.p>

        <motion.button
          className="self-start flex items-center gap-2.5 bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden relative group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="material-symbols-outlined text-sm">{project.icon}</span>
          {project.action}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProjectCard
