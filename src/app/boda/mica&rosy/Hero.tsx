import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import Image from "next/image";

import imgCarro from "/public/assets/images/micayrosy/carro.jpeg";
import imgLogo from "/public/assets/images/micayrosy/logo-removebg-preview.png";

const Hero = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgCarro.src})`,
        }}
        className=" h-screen bg-fixed bg-cover bg-center  bg-no-repeat  bg-black/40 bg-blend-overlay "
      >
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 1 }}
          className=" h-full flex flex-col justify-between items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
          >
            <Image alt="boda" src={imgLogo} className=" w-[50%] mx-auto py-2" />
            <h1 className=" uppercase  text-white font-semibold  text-[48px] leading-[60px] ">
              Mica
              <span className=" text-[64px]">&</span>
              Rosy
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={controls}
            transition={{ ease: "easeInOut", duration: 1 }}
            className=" text-[32px] text-white font-bold pb-10"
          >
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
            >
              Save the date
            </motion.p>
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
            >
              16 Mayo 2026{" "}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
