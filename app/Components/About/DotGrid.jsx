import React, { useState } from 'react'
import { motion } from 'framer-motion'

const DotGrid = () => {
  const rows = 4
  const cols = 6
  const [pausedDot, setPausedDot] = useState(null)

  const dotVariants = {
    animate: (index) => ({
      opacity: pausedDot === index ? 1 : [0.5, 1, 0.5],
      boxShadow:
        pausedDot === index
          ? '0 0 10px 5px rgba(44, 97, 77, 0.7)'
          : [
              '0 0 0 0 rgba(44, 97, 77, 0.7)',
              '0 0 10px 5px rgba(44, 97, 77, 0.7)',
              '0 0 0 0 rgba(44, 97, 77, 0.7)',
            ],
      transition: {
        repeat: pausedDot === index ? 0 : Infinity,
        duration: 2,
        ease: 'easeInOut',
        delay: (index * 0.1) % 2,
      },
    }),
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <div
        className="grid w-full aspect-[3/2] gap-4 sm:gap-6 md:gap-8"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => (
          <motion.div
            key={index}
            className="w-full aspect-square rounded-full bg-[#2c614d] cursor-pointer"
            variants={dotVariants}
            animate="animate"
            custom={index}
            onMouseEnter={() => setPausedDot(index)}
            onMouseLeave={() => setPausedDot(null)}
          />
        ))}
      </div>
    </div>
  )
}

export default DotGrid
