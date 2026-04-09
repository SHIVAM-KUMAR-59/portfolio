'use client';

import {
  motion,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useState, useEffect } from "react";

const Cursor = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const springCfgFast = { damping: 40, stiffness: 700 };
  const springCfgSlow = { damping: 22, stiffness: 180 };

  const dotX = useSpring(cursorX, springCfgFast);
  const dotY = useSpring(cursorY, springCfgFast);
  const ringX = useSpring(cursorX, springCfgSlow);
  const ringY = useSpring(cursorY, springCfgSlow);

  useEffect(() => {
    const move = (e) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const enterEl = () => setHovering(true);
    const leaveEl = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", enterEl);
      el.addEventListener("mouseleave", leaveEl);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[1000] hidden md:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: clicking ? 0.4 : 1 }}
        transition={{ duration: 0.1 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] hidden md:block rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : clicking ? 20 : 32,
          height: hovering ? 56 : clicking ? 20 : 32,
          borderColor: hovering ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)",
          rotate: hovering ? 45 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

export default Cursor;