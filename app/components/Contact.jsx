'use client'

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const titleY = useTransform(scrollYProgress, [0.05, 0.4], [80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.22], [0, 1]);

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // Large text parallax
  const bigTextY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative py-32 md:py-52 px-6 md:px-12 bg-[#080808] overflow-hidden"
    >
      {/* Giant ghosted background text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ y: bigTextY }}
      >
        <span
          className="text-[clamp(8rem,25vw,22rem)] font-black tracking-tighter uppercase leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.028)" }}
        >
          CONTACT
        </span>
      </motion.div>

      {/* Vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/18 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          {/* Label */}
          <motion.div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-[8px] tracking-[0.5em] text-white/20 uppercase">03 — Contact</span>
          </motion.div>

          <div className="overflow-hidden mb-5">
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-none"
              initial={{ y: "100%", skewY: 3 }}
              whileInView={{ y: 0, skewY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              INITIATE<br />SYSTEM
            </motion.h2>
          </div>

          <motion.p
            className="text-white/28 mb-16 tracking-wide text-sm md:text-base"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Available for collaborative engineering and complex architectural consulting.
          </motion.p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          {[
            { icon: "mail", label: "Electronic Mail", value: "shivamkumardev01@gmail.com" },
            { icon: "call", label: "Direct Line", value: "(+91) 7070089628" },
          ].map((contact) => (
            <motion.div
              key={contact.icon}
              className="group p-7 bg-white/[0.02] border border-white/[0.07] text-left relative overflow-hidden cursor-pointer"
              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.16)" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="material-symbols-outlined text-white/22 group-hover:text-white/55 transition-colors mb-4 block text-[20px]">
                {contact.icon}
              </span>
              <p className="text-[8px] uppercase tracking-[0.35em] text-white/22 mb-1.5">{contact.label}</p>
              <p className="text-sm font-semibold text-white/75 relative z-10">{contact.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          className="space-y-10 text-left bg-white/[0.015] p-8 md:p-12 border border-white/[0.07] relative overflow-hidden"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top corner accent */}
          <div className="absolute top-0 left-0 w-10 h-px bg-white/20" />
          <div className="absolute top-0 left-0 w-px h-10 bg-white/20" />
          <div className="absolute bottom-0 right-0 w-10 h-px bg-white/20" />
          <div className="absolute bottom-0 right-0 w-px h-10 bg-white/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { label: "Sender ID", placeholder: "Name", key: "name", type: "text" },
              { label: "Routing Address", placeholder: "Email", key: "email", type: "email" },
            ].map((field) => (
              <motion.div
                key={field.key}
                className="space-y-2 group"
                whileFocusWithin={{ scale: 1.01 }}
              >
                <label className="text-[8px] uppercase tracking-[0.35em] text-white/22 block">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-b border-white/[0.09] py-4 focus:border-white/45 outline-none placeholder:text-white/[0.09] text-white text-sm transition-colors duration-400"
                  value={formState[field.key]}
                  onChange={(e) => setFormState((s) => ({ ...s, [field.key]: e.target.value }))}
                />
              </motion.div>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-[8px] uppercase tracking-[0.35em] text-white/22 block">Payload</label>
            <textarea
              rows={4}
              placeholder="Message content..."
              className="w-full bg-transparent border-b border-white/[0.09] py-4 focus:border-white/45 outline-none placeholder:text-white/[0.09] text-white text-sm resize-none transition-colors duration-400"
              value={formState.message}
              onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
            />
          </div>

          <div className="flex justify-center pt-4">
            <motion.button
              className="relative bg-white text-black px-16 py-5 font-black uppercase tracking-[0.35em] text-xs w-full sm:w-auto overflow-hidden"
              whileHover={{ scale: 0.985 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSent(true)}
            >
              {/* Sweep shimmer on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -skew-x-12"
                initial={{ x: "-150%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 justify-center relative z-10"
                  >
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Transmitted
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative z-10"
                  >
                    Transmit Message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact
