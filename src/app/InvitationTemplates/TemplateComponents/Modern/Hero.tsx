"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import { bavaria, dancing, lora } from "@/fonts";
import { NextFont } from "next/dist/compiled/@next/font";

const InvitationHero1 = ({
  novia,
  novio,
  join,
  frase,
  font,
  fecha,
}: {
  novia: string;
  novio: string;
  join: string;
  frase: string;
  font: NextFont;
  fecha: string;
}) => {
  const { controls } = useContext(StartAnimation);

  return (
    <div
      className="
      bg-fixed
      bg-[url('/assets/images/Taniaydiego/herotaniaydiego.jpg')]
      cell:bg-[url('/assets/images/Taniaydiego/herocell_tania.jpg')]
       w-full h-screen  cell:py-4
      bg-center bg-no-repeat bg-cover 
      bg-stone-500 bg-blend-multiply grayscale
      flex flex-col items-center justify-center    
      "
    >
      {/*informacion de la boda*/}
      <div className="flex flex-col  items-center  justify-center h-full pt-6 pb-10">
        {/* <div className="flex flex-col justify-center items-center">
          <>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-white  my-2  text-2xl cell:text-base cell:text-center cell:px-4"
            >
              {frase}
            </motion.p>
          </>
        </div> */}
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className={`${font.className} text-8xl text-white my-2  font-light cell:text-5xl `}
        >
          {novia}{" "}
          <span
            className={`${font.className} text-white text-[124px] cell:text-[60px]`}
          >
            {join}
          </span>{" "}
          {novio}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-white  my-2  text-2xl cell:text-base cell:text-center cell:px-4"
        >
          {frase}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-white  my-2  text-3xl cell:text-base cell:text-center cell:px-4"
        >
          {fecha}
        </motion.p>
        {/* <FechaBoda
            day="Sábado"
            numberDate={18}
            hour="18:00"
            year={2024}
            mes="Mayo"
          /> */}
      </div>
    </div>
  );
};

export default InvitationHero1;
