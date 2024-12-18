import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import Image from "next/image";
import { montse } from "@/fonts";
import img1 from "/public/assets/images/micayrosy/introupdate.png";

const Hero = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <div className=" w-full  bg-[#A48066]  py-8">
      {/*Intro*/}
      <div className="text-center mx-auto">
        <motion.h1
          initial={{ opacity: 0.25 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          className=" uppercase  text-white font-semibold  text-[48px] leading-[60px] "
        >
          Mica
          <span className=" text-[64px]">&</span>
          Rosy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.25 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          className="uppercase text-white my-2 text-[40px]"
        >
          Nos Casamos
        </motion.p>
        {/*Picture 1*/}
        <motion.div
          initial={{ opacity: 0.25 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        >
          <Image alt="boda" src={img1} />
        </motion.div>
        <div className="bg-stone-50 text-[#AB765A] text-center text-[22px] px-4 py-6">
          <motion.p
            initial={{ opacity: 0.25 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            className={`${montse.className}`}
          >
            &quot;El destino nos ha unido, y ahora queremos que tú formes parte
            de nuestra historia en un lugar mágico.&quot;
          </motion.p>
          <motion.p
            initial={{ opacity: 0.25 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            className={`${montse.className}`}
          >
            ¡Nos encantaría contar con tu presencia, nuestra boda es en playa!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
