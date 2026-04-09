import {
  motion,
  useScroll,
  useTransform,
  useSpring,

} from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const color = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#ffffff", "#a0a0a0", "#ffffff", "#a0a0a0"]
  );
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{ scaleX, background: color }}
    />
  );
}

export default ScrollProgress