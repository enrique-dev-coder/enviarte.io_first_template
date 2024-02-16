"use client";
import React from "react";
import { motion } from "framer-motion";
import { dancing } from "@/fonts";

const AnimatedTitle = ({ title }: { title: string }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className={`${dancing.className}   text-complementaryDark font-bold  text-center text-4xl py-1 cell:text-3xl cell:px-4`}
    >
      {title}
    </motion.h2>
  );
};

export default AnimatedTitle;
