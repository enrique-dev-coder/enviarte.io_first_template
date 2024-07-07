"use client";
import React from "react";
import { motion } from "framer-motion";
import { NextFont } from "next/dist/compiled/@next/font";

interface BendicionesPropsTypes {
  backGround: string;
  frase: {
    desc: string;
    textColor: string;
    font: NextFont;
  };
  familias?: {
    novia: String;
    novio: String;
    font: NextFont;
    textColor: string;
  };
}

const BendicionFamilias = ({
  bendicionFamiliasProps,
}: {
  bendicionFamiliasProps: BendicionesPropsTypes;
}) => {
  return (
    <div
      className={`h-[300px] flex flex-col items-center justify-center cell:h-auto ${bendicionFamiliasProps.backGround}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`
        ${bendicionFamiliasProps.frase.font.className}
        ${bendicionFamiliasProps.frase.textColor}
        font-bold  text-center text-4xl py-1 
        cell:text-3xl cell:px-4
      `}
      >
        {bendicionFamiliasProps.frase.desc}
      </motion.h2>
      {bendicionFamiliasProps.familias && (
        <div className="flex justify-evenly py-4 gap-4 w-1/2 mx-auto cell:w-full cell:px-4 cell:flex-col cell:items-center ">
          <div className="flex flex-col gap-1 text-2xl cell:text-2xl cell:text-center ">
            <p
              className={`${bendicionFamiliasProps.familias.font.className} ${bendicionFamiliasProps.familias.textColor} text-6xl`}
            >
              {bendicionFamiliasProps.familias.novia} y{" "}
              {bendicionFamiliasProps.familias.novio}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BendicionFamilias;
