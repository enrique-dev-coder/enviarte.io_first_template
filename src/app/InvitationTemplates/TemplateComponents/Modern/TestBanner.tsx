"use client";
import React from "react";
import { dancing, sofia } from "@/fonts";
import { motion } from "framer-motion";
const TestBanner = () => {
  return (
    <div className=" bg-white py-8 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${dancing.className} text-center text-black   text-5xl cell:text-4xl py-4 `}
      >
        Colosenses 3:14 :
      </motion.h2>
      <motion.q
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${sofia.className} text-center py-4 px-8 text-3xl cell:text-2xl`}
      >
        Por encima de todo, vístanse de amor, que es el vínculo perfecto.
      </motion.q>
    </div>
  );
};

export default TestBanner;
