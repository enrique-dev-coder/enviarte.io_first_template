"use client";
import { motion } from "framer-motion";
import { lora } from "@/fonts";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";

const NoviosIniciales = ({
  novio1,
  novio2,
}: {
  novio1: string;
  novio2: string;
}) => {
  const { controls } = useContext(StartAnimation);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 5 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      animate={controls}
      viewport={{ once: true }}
      className=" text-complentary text-7xl tracking-widest  my-1 "
    >
      <span className={`${lora.className} border-r-2 px-2 border-complentary`}>
        {novio1}
      </span>
      <span className={`${lora.className} px-2`}>{novio2}</span>
    </motion.h2>
  );
};

export default NoviosIniciales;
