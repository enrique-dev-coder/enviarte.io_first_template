"use client";
import React from "react";
import { dancing } from "@/fonts";
import { motion } from "framer-motion";
const TestBanner = () => {
  return (
    <div className=" bg-white py-8">
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${dancing.className} text-center text-black   text-5xl cell:text-4xl py-4 `}
      >
        ¡Nos casamos!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className=" text-center py-4 text-3xl cell:text-lg"
      >
        Cada familia tiene una historia, bienvenidos a la nuestra.
      </motion.p>
    </div>
  );
};

export default TestBanner;
