import React from 'react';
import { motion, Variants } from 'framer-motion';

const HeroText = () => {
  const text = "Hey 👋 I’m Subham";
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl flex overflow-hidden py-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default HeroText;
