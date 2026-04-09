import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#080808] border-t border-white/[0.05] py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-12 max-w-screen-2xl mx-auto">
        
        <span className="text-[8px] tracking-[0.38em] uppercase text-white/18">
          © 2024 SHIVAM KUMAR — SYSTEMS ENGINEER
        </span>

        <div className="flex gap-10">
          
          {/* GitHub */}
          <motion.a
            href="https://github.com/SHIVAM-KUMAR-59"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[8px] tracking-[0.32em] uppercase text-white/18 hover:text-white/65 transition-colors relative group"
            whileHover={{ y: -1 }}
          >
            GITHUB
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/shivam-kumar-dev01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[8px] tracking-[0.32em] uppercase text-white/18 hover:text-white/65 transition-colors relative group"
            whileHover={{ y: -1 }}
          >
            LINKEDIN
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Resume Download */}
          <motion.a
            href="/resume.pdf"   // put file inside /public
            download
            className="text-[8px] tracking-[0.32em] uppercase text-white/18 hover:text-white/65 transition-colors relative group"
            whileHover={{ y: -1 }}
          >
            RESUME
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
          </motion.a>

        </div>

        <div className="flex items-center gap-3">
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/18">
            Status:
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/55">
            Online
          </span>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;