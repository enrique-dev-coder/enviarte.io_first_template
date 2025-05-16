import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import Image from "next/image";
import { paris, champagne, montse } from "@/fonts";
import Flowers1 from "/public/assets/images/xvs/Jade/flores-removebg-preview.png";

const Hero = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <>
      <div className=" h-screen relative overflow-hidden ">
        {/* Círculos decorativos */}
        <div className="absolute z-[-1] top-[20%] left-[20%] h-[200px] w-[200px] rounded-full bg-gradient-radial from-[#F8C6DE]/60 to-transparent blur-2xl sm:h-[300px] sm:w-[300px]"></div>
        <div className="absolute z-[-1] bottom-[10%] right-[10%] h-[180px] w-[180px] rounded-full bg-gradient-radial from-[#D6B5EB]/50 to-transparent blur-2xl sm:h-[280px] sm:w-[280px]"></div>

        <Image
          src={Flowers1}
          alt="flores"
          className="absolute rotate-[-6]"
          style={{ bottom: "-19px", left: "-24px", width: "40%" }}
        />
        <Image
          src={Flowers1}
          alt="flores"
          className="absolute "
          style={{
            top: "-19px",
            right: "-24px",
            width: "50%",
            transform: "rotate(180deg)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 1 }}
          className=" h-full flex flex-col justify-center items-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1 }}
              className={`${paris.className}  text-white font-bold`}
            >
              <h1 className="  text-[#A569BD] font-semibold  text-[64px] leading-[60px] ">
                XVs
                <br />
                Jade
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ ease: "easeInOut", duration: 1 }}
              className={`${paris.className} text-[28px] text-white font-bold pb-10`}
            >
              <h1 className="   text-[#D6B5EB] font-bold  pt-8 text-[48px] leading-[60px] ">
                30 de Mayo de 2025{" "}
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
