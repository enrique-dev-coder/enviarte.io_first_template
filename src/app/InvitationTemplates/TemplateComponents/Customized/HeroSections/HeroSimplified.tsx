"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import { bavaria, dancing, lora } from "@/fonts";
import { HeroSectionDataTypesSimplified } from ".";

const HeroSimplified = ({
  heroData,
}: {
  heroData: HeroSectionDataTypesSimplified;
}) => {
  const { controls } = useContext(StartAnimation);

  return (
    <div
      className={`
        ${heroData.backgroundPictures.desktop}
        ${heroData.backgroundPictures.cell}
        w-full h-screen
        bg-center bg-no-repeat bg-cover bg-stone-500 bg-blend-multiply
        flex flex-col items-center justify-center 
      `}
    >
      {/*informacion de la boda*/}
      <div className="flex flex-col  items-center  justify-between h-full pt-6 pb-10">
        <div className="flex flex-col justify-center items-center">
          <>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className={`${heroData.fraseIncial.color} my-2  ${heroData.fraseIncial.size} cell:text-base cell:text-center cell:px-4`}
            >
              {heroData.fraseIncial.text}
            </motion.p>
          </>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className={`${heroData.nombreNovios.font.className} text-7xl ${heroData.nombreNovios.textColor} my-2 text-center gap-2 flex justify-center items-center font-light cell:text-5xl `}
          >
            {heroData.nombreNovios.novia}
            {""}
            <div
              className={` text-yellow-50 text-center  text-[80px] cell:text-[60px]`}
            >
              {heroData.nombreNovios.join.symbolo}
            </div>
            <div>{heroData.nombreNovios.novio}</div>
          </motion.div>
          {/* <FechaBoda
            day="Sábado"
            numberDate={18}
            hour="18:00"
            year={2024}
            mes="Mayo"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSimplified;
