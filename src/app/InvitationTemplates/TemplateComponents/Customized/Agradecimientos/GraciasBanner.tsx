"use client";
import React from "react";
import { motion } from "framer-motion";
import { NextFont } from "next/dist/compiled/@next/font";

const GraciasBanner = ({
  showBanner,
  frase,
  name,
  pases,
}: {
  showBanner: boolean | undefined;
  frase:
    | {
        content: string;
        font: NextFont;
        styling: { color: string; size: string };
      }
    | undefined;
  name:
    | {
        content: string;
        font: NextFont;
        styling: { color: string; size: string };
      }
    | undefined;
  pases?:
    | {
        content: string;
        font: NextFont;
        styling: { color: string; size: string };
      }
    | undefined;
}) => {
  return showBanner ? (
    <div className=" bg-white py-8">
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${frase?.font.className} text-center ${frase?.styling.color} font-bold ${frase?.styling.size} py-4 `}
      >
        {frase?.content}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${name?.font.className} ${frase?.styling.color}  ${frase?.styling.size} text-center py-4 px-8`}
      >
        {name?.content}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${name?.font.className} ${frase?.styling.color}  ${frase?.styling.size} text-center py-4 px-8`}
      >
        {pases?.content}
      </motion.p>
    </div>
  ) : null;
};

export default GraciasBanner;
