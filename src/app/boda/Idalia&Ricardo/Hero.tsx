import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import Image from "next/image";
import { lora, champagne } from "@/fonts";
import imgHero from "/public/assets/images/idaliayricardo/img1.png";
import imgLogo from "/public/assets/images/idaliayricardo/logo.png";

const Hero = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgHero.src})`,
        }}
        className=" h-screen  bg-cover bg-center bg-fixed  bg-no-repeat  bg-blend-overlay bg-black/10 "
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
            <Image
              alt="boda"
              src={imgLogo}
              className=" w-[90%] bg-[#808000]  px-4 py-4 mx-auto "
            />
          </motion.div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1 }}
              className={`${champagne.className}  text-white font-bold`}
            >
              <h1 className=" uppercase  text-white font-semibold  text-[48px] leading-[60px] ">
                Idalia
                <span>&</span>
                Ricardo
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1 }}
              className=" text-[32px] text-white font-bold pb-10"
            >
              <h1 className="   text-white font-semibold  text-[32px] leading-[60px] ">
                26 de Abril de 2025
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
