"use client";
import React from "react";
import { dancing, sofia, allura, analogist, cambria } from "@/fonts";
import { motion } from "framer-motion";
import { NextFont } from "next/dist/compiled/@next/font";
const InfoBanner = ({
  showBanner,
  showFraseBibilica,
  showPadres,
  padresNovia,
  padresNovio,
  titleFamiliaColor,
  padresFont,
  padresColor,
}: {
  showBanner: boolean | undefined;
  showFraseBibilica: boolean | undefined;
  showPadres: boolean | undefined;
  padresNovia: string | undefined;
  padresNovio: string | undefined;
  titleFamiliaColor: string | undefined;
  padresFont: NextFont | undefined;
  padresColor: string | undefined;
}) => {
  console.log(showPadres);
  return showBanner ? (
    <>
      <>
        {showFraseBibilica && (
          <div className=" bg-white py-8 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className={`${dancing.className} text-center text-black font-bold   text-5xl cell:text-4xl py-4 `}
            >
              Colosenses 3:14 :
            </motion.h2>
            <motion.q
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className={`${dancing.className} text-center py-4 px-8 text-3xl cell:text-2xl`}
            >
              Por encima de todo, vístanse de amor, que es el vínculo perfecto.
            </motion.q>
          </div>
        )}
      </>
      <>
        {showPadres && (
          <div className=" bg-white py-8 px-4 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className={`${dancing.className} text-center ${titleFamiliaColor} font-bold   text-5xl cell:text-3xl py-4 `}
            >
              Con la bendicion de nuestra familia:
            </motion.h2>
            <div
              className={`${padresFont?.className} ${padresColor} text-center`}
            >
              <p className="font-bold cell:text-xl">Padres de la Novia</p>
              <p className="cell:text-xl mb-4">{padresNovia}</p>
              <p className="font-bold cell:text-xl">Padres de el Novio</p>
              <p className="cell:text-xl">{padresNovio}</p>
            </div>
          </div>
        )}
      </>
    </>
  ) : null;
};

export default InfoBanner;
