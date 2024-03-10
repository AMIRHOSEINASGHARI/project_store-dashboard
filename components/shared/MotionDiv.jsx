"use client";

import { motion } from "framer-motion";

const MotionDiv = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.25,
        ease: "easeInOut",
        duration: 0.25,
      }}
      viewport={{
        amount: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
