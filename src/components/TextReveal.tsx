import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function TextReveal({ text, className = "" }: { text: string, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      color: "#ffffff",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      color: "#52525b", // zinc-600
      opacity: 1, // Start visible but grey
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ marginRight: 0 }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
