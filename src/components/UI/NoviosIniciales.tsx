"use client";
import { motion } from "framer-motion";
import { lora } from "@/fonts";

const NoviosIniciales = ({
  novio1,
  novio2,
}: {
  novio1: string;
  novio2: string;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
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
