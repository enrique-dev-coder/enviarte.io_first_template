// components/Flowers.tsx
"use client";

import { motion } from "framer-motion";

const pathVariants = {
  hidden: { pathLength: 0, fill: "rgba(0, 0, 0, 0)" },
  visible: (i: number) => ({
    pathLength: 1,
    fill: "rgba(255,255,255,0)",
    transition: {
      pathLength: { delay: i * 0.5, type: "spring", duration: 1.5 },
    },
  }),
};

const fillVariants = {
  hidden: { fill: "rgba(0,0,0,0)" },
  visible: (color: string) => ({
    fill: color,
    transition: { delay: 2.5, duration: 1.5 },
  }),
};

export default function Flowers() {
  const petals = [
    { d: "M50,10 Q60,30 50,50 Q40,30 50,10", color: "#E27EA6" },
    { d: "M50,10 Q70,30 60,50 Q50,30 50,10", color: "#A569BD" },
    { d: "M50,10 Q40,30 30,50 Q50,30 50,10", color: "#F1948A" },
    { d: "M50,10 Q30,30 40,50 Q50,30 50,10", color: "#F8C6DE" },
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-60 h-60 mx-auto mt-10"
      fill="none"
      stroke="black"
      strokeWidth={1.5}
    >
      {petals.map((petal, i) => (
        <motion.path
          key={i}
          d={petal.d}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
      ))}

      {petals.map((petal, i) => (
        <motion.path
          key={`fill-${i}`}
          d={petal.d}
          custom={petal.color}
          initial="hidden"
          animate="visible"
          variants={fillVariants}
        />
      ))}
    </svg>
  );
}
