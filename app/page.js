"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import ScrollProgress from "./components/ScrollProgress"
import Cursor from "./components/Cursor"
import HeroSection from "./components/Hero"
import AboutSection from "./components/About"
import ProjectsSection from "./components/Projects"
import ContactSection from "./components/Contact"
import Footer from "./components/Footer"
import Nav from "./components/Navigation"
import Ticker from "./components/Ticker"
import SectionDivider from "./components/SectionDivider"

// ─── Noise texture overlay ────────────────────────────────────────────────────
function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[999] opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }}
    />
  );
}

// ─── Inter-section reveal wipe ────────────────────────────────────────────────
function SectionWipe({ color = "#0c0c0c" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <div ref={ref} className="relative h-20 overflow-hidden" style={{ background: color }}>
      <motion.div
        className="absolute inset-0"
        style={{ background: "#0e0e0e" }}
        initial={{ scaleY: 1 }}
        animate={inView ? { scaleY: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style2={{ transformOrigin: "bottom" }}
      />
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <div
      className="bg-[#0e0e0e] text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      <NoiseOverlay />
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main>
        <HeroSection />
        <Ticker />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}