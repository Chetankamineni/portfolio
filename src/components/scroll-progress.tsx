"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  // 1. Track scroll progress
  const { scrollYProgress } = useScroll();

  // 2. Smooth the value with a spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3. Render a motion.div that uses the smoothed value for its scaleX
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-[0%]"
      style={{ scaleX }}
    />
  );
};