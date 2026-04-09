'use client'

import { useRef, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import MagneticButton from './MagneticButton'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const orb1X = useSpring(useTransform(mouseX, [-1, 1], [-30, 30]), { stiffness: 60, damping: 20 })
  const orb1Y = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), { stiffness: 60, damping: 20 })
  const orb2X = useSpring(useTransform(mouseX, [-1, 1], [20, -20]), { stiffness: 40, damping: 15 })
  const orb2Y = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), { stiffness: 40, damping: 15 })

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1)
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  const titleWords = ['SCALABLE', 'DIGITAL', 'SYSTEMS']

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden bg-[#080808]"
      style={{ opacity }}
    >
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-15%] w-[75vw] h-[75vw] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 68%)',
          x: orb1X,
          y: orb1Y,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-8%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 68%)',
          x: orb2X,
          y: orb2Y,
        }}
        animate={{ scale: [1.08, 1, 1.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Grid lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.6], [0.04, 0]) }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`v${i}`}
            className="absolute top-0 bottom-0 border-r border-white"
            style={{ left: `${(i + 1) * (100 / 7)}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.07, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`h${i}`}
            className="absolute left-0 right-0 border-b border-white"
            style={{ top: `${(i + 1) * 25}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </motion.div>

      {/* Corner brackets */}
      {[
        { top: '10%', left: '4%', rotate: '0deg' },
        { top: '10%', right: '4%', rotate: '90deg' },
        { bottom: '10%', left: '4%', rotate: '-90deg' },
        { bottom: '10%', right: '4%', rotate: '180deg' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block pointer-events-none"
          style={{ ...pos, rotate: pos.rotate }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ delay: 1.5 + i * 0.1, duration: 0.8 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M0 10 L0 0 L10 0" stroke="white" strokeWidth="1.5" />
          </svg>
        </motion.div>
      ))}

      <motion.div
        className="max-w-screen-2xl w-full mx-auto text-center relative z-10"
        style={{ y: titleY, scale }}
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.span
            className="block w-10 h-px bg-white/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          <p className="text-[9px] uppercase tracking-[0.55em] text-white/30">
            Full Stack Software Developer
          </p>
          <motion.span
            className="block w-10 h-px bg-white/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-8">
          {titleWords.map((word, wi) => (
            <div key={word} className="overflow-hidden">
              <motion.div
                initial={{ y: '115%', skewY: 4 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ duration: 1.0, delay: 0.3 + wi * 0.13, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className={`text-[clamp(3rem,11vw,9.5rem)] font-black tracking-[-0.04em] leading-[0.88] uppercase block ${
                    wi === 2 ? 'text-transparent' : 'text-white'
                  }`}
                  style={wi === 2 ? { WebkitTextStroke: '1px rgba(255,255,255,0.22)' } : {}}
                >
                  {word}
                </span>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-white/30 text-sm md:text-base max-w-md mx-auto mb-14 leading-relaxed tracking-wide"
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
        >
          Building high-performance architectures and modern web systems with Java, C++, Go, and
          Next.js.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          {/* Primary — Selected Works */}
          <MagneticButton
            href="#works"
            className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs overflow-hidden cursor-pointer w-full sm:w-auto"
          >
            <span className="relative z-10 transition-colors duration-200 ">
              Selected Works
            </span>
            <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 " />
          </MagneticButton>

          {/* Resume download */}
          <motion.a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center justify-center gap-2.5 border border-white/10 text-white/40 px-8 py-4 font-bold uppercase tracking-[0.2em] text-xs overflow-hidden cursor-pointer w-full sm:w-auto transition-colors duration-300 hover:text-white/80 hover:border-white/25"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated download icon container */}
            <span className="relative w-3.5 h-3.5 flex items-center justify-center overflow-hidden">
              <Download className="w-3.5 h-3.5 absolute transition-transform duration-300 group-hover:translate-y-4" />
              <Download className="w-3.5 h-3.5 absolute -translate-y-4 transition-transform duration-300 group-hover:translate-y-0" />
            </span>
            <span>Resume</span>
          </motion.a>
        </motion.div>

        {/* Status pill */}
        <motion.div
          className="mt-10 inline-flex items-center gap-2.5 px-4 py-2 border border-white/[0.07] bg-white/[0.025]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[8px] tracking-[0.4em] uppercase text-white/25">
            Available for work
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.9 }}
      >
        <span className="text-[8px] tracking-[0.55em] uppercase text-white/18">Scroll</span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-white/35 to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </motion.section>
  )
}

export default Hero