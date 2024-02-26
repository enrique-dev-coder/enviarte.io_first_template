"use client";
import { dancing } from "@/fonts";
import { motion } from "framer-motion";
import { StartAnimation } from "@/contexts/AnimationContext";
import { useContext } from "react";

const NoviosName = ({ novio1, novio2 }: { novio1: string; novio2: string }) => {
  const { controls } = useContext(StartAnimation);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 5 }}
      animate={controls}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
      viewport={{ once: true }}
      className={`${dancing.className} text-8xl text-white my-2  font-light cell:text-7xl `}
    >
      {novio1} y <br /> {novio2}
    </motion.h2>
  );
};

export default NoviosName;
