"use client"

import {
  motion,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react"

const NAV_LINKS = [
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORKS", href: "#works" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 60)), [scrollY]);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        background: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
        <motion.div className="text-xl font-black tracking-tighter text-white uppercase cursor-pointer" whileHover={{ scale: 1.02 }}>
          SHIVAM<span className="text-white/25">KUMAR</span>
        </motion.div>
        <div className="hidden md:flex gap-10 items-center">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-white/45 text-[10px] tracking-[0.22em] uppercase hover:text-white transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
              whileHover={{ y: -1 }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-400" />
            </motion.a>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setMenuOpen((v) => !v)}>
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span className="block h-px bg-white" animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }} />
            <motion.span className="block h-px bg-white" animate={{ opacity: menuOpen ? 0 : 1 }} />
            <motion.span className="block h-px bg-white" animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#080808]/95 backdrop-blur-2xl px-6 pb-8 flex flex-col gap-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-white/50 text-sm tracking-[0.2em] uppercase hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar