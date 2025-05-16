import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import Image from "next/image";
import { paris, champagne, montse, dancing } from "@/fonts";
import Flowers1 from "/public/assets/images/xvs/Jade/flores-removebg-preview.png";

const Hero = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <>
      <div className="  relative overflow-hidden ">
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
            width: "40%",
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
            <div className="my-5">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className={`w-full text-[#A569BD] $text-center cell:text-4xl my-4 py-4 `}
              >
                &quot;
                <span
                  className={`${dancing.className} text-[#7D3C98]  text-4xl`}
                >
                  Guárdame
                </span>
                <br />
                <span className={`${montse.className}  text-xl uppercase`}>
                  {" "}
                  como a la
                </span>
                <br />
                <span
                  className={`${dancing.className} text-[#7D3C98]  text-4xl `}
                >
                  {" "}
                  niña de tus ojos
                </span>
                <br />
                <span className={`${montse.className}  text-xl uppercase`}>
                  escóndeme{" "}
                </span>
                <br />
                <span className={`${montse.className}  text-xl uppercase`}>
                  bajo la{" "}
                </span>
                <br />
                <span
                  className={`${dancing.className} text-[#7D3C98]  text-4xl `}
                >
                  {" "}
                  sombra de tus{" "}
                </span>
                <br />
                <span className={`${dancing.className}  text-4xl uppercase`}>
                  alas
                </span>
                &quot;
                <br />
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className={`${montse.className} text-[#7D3C98] w-full  text-center cell:text-2xl my-4 px-2 `}
              >
                Salmo 17:8
              </motion.p>
            </div>
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
