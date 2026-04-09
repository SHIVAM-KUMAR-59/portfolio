'use client'

import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  AnimatePresence,
} from 'framer-motion'
import { useRef, useState, useCallback, useEffect } from 'react'

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const [hovered, setHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () =>
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const isActive = isMobile || hovered

  const springConfig = { stiffness: 120, damping: 18, mass: 0.8 }

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), springConfig)

  const shineX = useTransform(mouseX, [0, 1], ['-30%', '130%'])
  const shineY = useTransform(mouseY, [0, 1], ['-30%', '130%'])
  const glossX = useTransform(mouseX, [0, 1], ['0%', '100%'])

  // ── Always call these unconditionally ──
  const shineGradient = useMotionTemplate`radial-gradient(circle 320px at ${shineX} ${shineY}, rgba(255,255,255,0.05), transparent 70%)`
  const glossGradient = useMotionTemplate`linear-gradient(90deg, transparent, rgba(255,255,255,0.16) ${glossX}, transparent)`

  const handleMove = useCallback(
    (e) => {
      if (isMobile) return
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      mouseX.set((e.clientX - r.left) / r.width)
      mouseY.set((e.clientY - r.top) / r.height)
    },
    [mouseX, mouseY, isMobile],
  )

  const handleLeave = useCallback(() => {
    if (isMobile) return
    setHovered(false)
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [mouseX, mouseY, isMobile])

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden cursor-pointer select-none"
      style={{
        aspectRatio: isMobile ? '4/3' : '16/9',
        perspective: 900,
        rotateX: !isMobile && hovered ? rotateX : 0,
        rotateY: !isMobile && hovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        background: '#0a0a0a',
      }}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: index * 0.12,
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMove}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={handleLeave}
    >
      {/* ── Background image ── */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        animate={{
          scale: isActive ? 1.07 : 1.03,
          filter: isActive
            ? 'grayscale(0%) brightness(0.52) saturate(1.1)'
            : 'grayscale(70%) brightness(0.36)',
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />

      {/* ── Gradient vignette ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(170deg, transparent 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.88) 100%)',
        }}
      />

      {/* ── Noise grain ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      {/* ── Mouse-tracked specular — rendered always, opacity gated ── */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: shineGradient,
          opacity: !isMobile && hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* ── Top-edge gloss — rendered always, opacity gated ── */}
      <motion.div
        className="absolute inset-x-0 top-0 z-20 pointer-events-none h-px"
        style={{
          background: glossGradient,
          opacity: !isMobile && hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* ── Animated inset border ── */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        animate={{
          boxShadow: isActive
            ? 'inset 0 0 0 0.5px rgba(255,255,255,0.16)'
            : 'inset 0 0 0 0.5px rgba(255,255,255,0.04)',
        }}
        transition={{ duration: 0.5 }}
      />

      {/* ── Corner accents ── */}
      <motion.div
        className="absolute top-0 left-0 z-30 pointer-events-none"
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'top left' }}
      >
        <div style={{ width: 22, height: 1, background: 'rgba(255,255,255,0.45)' }} />
        <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.45)' }} />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 z-30 pointer-events-none"
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'bottom right' }}
      >
        <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.45)', marginLeft: 'auto' }} />
        <div style={{ width: 22, height: 1, background: 'rgba(255,255,255,0.45)', marginLeft: 'auto' }} />
      </motion.div>

      {/* ── Project index ── */}
      <motion.div
        className="absolute top-4 right-5 z-30"
        animate={{ opacity: isActive ? 0.35 : 0.15 }}
        transition={{ duration: 0.4 }}
        style={{
          fontSize: 9,
          letterSpacing: '0.3em',
          color: '#fff',
          fontFamily: 'monospace',
        }}
      >
        {project.id}
      </motion.div>

      {/* ── Main content ── */}
      <div
        className="absolute inset-0 z-30 flex flex-col justify-end"
        style={{ padding: 'clamp(18px, 4vw, 36px)' }}
      >
        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-1.5 mb-3"
          animate={{ y: isActive ? -2 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + i * 0.05 + 0.25, duration: 0.5 }}
              animate={{
                borderColor: isActive
                  ? 'rgba(255,255,255,0.2)'
                  : 'rgba(255,255,255,0.08)',
                color: isActive
                  ? 'rgba(255,255,255,0.62)'
                  : 'rgba(255,255,255,0.28)',
              }}
              style={{
                fontSize: 'clamp(6px, 1.2vw, 7.5px)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                border: '0.5px solid',
                padding: '3px 8px',
                transition: 'color 0.35s, border-color 0.35s',
                whiteSpace: 'nowrap',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ y: isActive ? -3 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(22px, 4vw, 44px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            color: '#fff',
            marginBottom: 'clamp(8px, 1.5vw, 12px)',
          }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.p
              key="desc"
              initial={isMobile ? false : { opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 6, filter: 'blur(3px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(11px, 1.6vw, 13px)',
                color: 'rgba(255,255,255,0.46)',
                maxWidth: '85%',
                lineHeight: 1.6,
                marginBottom: 'clamp(12px, 2vw, 20px)',
              }}
            >
              {project.desc}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Links */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="btns"
              className="flex items-center flex-wrap gap-2"
              initial={isMobile ? false : { opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.97 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
            >
              {project.links.map((link, i) => {
                const isPrimary = i === 0
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={!isMobile ? { scale: 1.03 } : {}}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      backgroundColor: isPrimary ? '#fff' : 'transparent',
                      color: isPrimary ? '#000' : 'rgba(255,255,255,0.72)',
                      border: isPrimary
                        ? 'none'
                        : '0.5px solid rgba(255,255,255,0.28)',
                      padding: 'clamp(7px, 1.2vw, 10px) clamp(12px, 2vw, 18px)',
                      fontSize: 'clamp(8px, 1.1vw, 10px)',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {isPrimary && (
                      <motion.span
                        initial={{ x: '-100%' }}
                        animate={{ x: '220%' }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)',
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 'clamp(11px, 1.4vw, 13px)', lineHeight: 1 }}
                    >
                      {link.icon}
                    </span>
                    {link.label}
                  </motion.a>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ProjectCard