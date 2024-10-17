import { motion } from 'framer-motion';

const ProjectHeader = () => {
  return (
    <header className="text-right px-6 md:px-10 h-auto">
      <motion.h1
        className="text-[50px] md:text-[100px] text-right"
        style={{ fontFamily: 'var(--font-k2d)' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>
    </header>
  );
};

export default ProjectHeader;
