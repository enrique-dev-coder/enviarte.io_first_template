"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import { lora } from "@/fonts";
import { NextFont } from "next/dist/compiled/@next/font";

const InvitationHero1 = ({
  novia,
  novio,
  join,
  frase,
  font,
  fecha,
  fotoDesktop,
  fotoCell,
}: {
  novia: string;
  novio: string;
  join: string;
  frase: {
    content: string;
    font: NextFont;
    textColor: string;
  };
  font: NextFont;
  fecha: {
    content: string;
    font: NextFont;
    textColor: string;
  };
  fotoDesktop: string;
  fotoCell: string;
}) => {
  const { controls } = useContext(StartAnimation);

  return (
    <div
      style={{ backgroundAttachment: "fixed" }}
      className={`
     
      ${fotoDesktop}
      ${fotoCell}
       w-full h-screen  cell:py-4
      bg-center bg-no-repeat bg-cover 
      bg-blend-multiply  bg-neutral-200
      flex flex-col items-center justify-center  
        `}
    >
      {/*informacion de la boda*/}
      <div className="flex flex-col  items-center   justify-between h-full pt-6 pb-10">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className={`${font.className} text-5xl text-white my-2  text-center font-light cell:text-5xl `}
        >
          {novia} <br />
          <span
            className={`${lora.className} text-white text-[44px] cell:text-[60px]`}
          >
            {join}
          </span>{" "}
          <br />
          {novio}
        </motion.h2>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`${frase.font.className} ${frase.textColor} 
            my-2  text-4xl font-extrabold  text-center cell:px-4
          `}
          >
            {frase.content}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`${fecha.font.className} ${fecha.textColor} my-2  text-4xl font-bold cell:text-2xl cell:text-center cell:px-4`}
          >
            {fecha.content}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default InvitationHero1;
