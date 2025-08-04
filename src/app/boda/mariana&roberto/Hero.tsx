import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import Image from "next/image";
import { paris } from "@/fonts";
import imgHero from "/public/assets/images/marianaybeto/Hero.png";

const Hero = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgHero.src})`,
        }}
        className=" h-screen  bg-cover bg-center   bg-no-repeat  bg-blend-overlay bg-black/40 "
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
            {/* <Image
              alt="boda"
              src={imgLogo}
              className=" w-[160px] bg-[#dcd3c4]   mx-auto "
            /> */}
          </motion.div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1 }}
              className={`${paris.className}  text-[#f5ebd0] font-bold`}
            >
              <h1 className="   font-semibold  text-[64px] leading-[60px] ">
                Mariana
                <br />
                <span>&</span>
                <br />
                Roberto
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1 }}
              className={`${paris.className} text-[32px] text-[#f5ebd0] font-bold pb-10`}
            >
              <h1 className="    font-semibold  text-[32px] leading-[60px] ">
                25 de Octubre de 2025
              </h1>
              <h1 className="    font-semibold  text-[32px] leading-[60px] ">
                Durango, Dgo
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
