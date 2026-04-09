import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useVelocity,
} from "framer-motion";
import { wrap, clamp } from "../../lib/utils";

const TICKER_ITEMS = ["FULL STACK ENGINEER", "SCALABLE SYSTEMS", "JAVA · C++ · GO", "NEXT.JS · REACT.JS", "OPEN TO WORK"];

const Ticker = () => {
  const x = useMotionValue(0);
  const SPEED = 45;
  const ITEM_WIDTH = 280;
  const TOTAL = TICKER_ITEMS.length * ITEM_WIDTH;
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  useAnimationFrame((_, delta) => {
    const scrollBoost = clamp(0, 3, Math.abs(velocity.get()) / 200);
    x.set(x.get() - (SPEED * (1 + scrollBoost) * delta) / 1000);
  });

  const wrappedX = useTransform(x, (v) => wrap(-TOTAL, 0, v));

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] py-5 my-20">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0e0e0e] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0e0e0e] to-transparent z-10 pointer-events-none" />
      <motion.div className="flex whitespace-nowrap" style={{ x: wrappedX }}>
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 text-[10px] tracking-[0.38em] uppercase text-white/25 font-light" style={{ minWidth: ITEM_WIDTH }}>
            <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Ticker