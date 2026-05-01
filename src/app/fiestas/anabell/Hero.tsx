import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { StartAnimation } from "@/contexts/AnimationContext";
import Image from "next/image";
import { paris, montse, inter, lora, Cormo } from "@/fonts";
import imgHero from "/public/assets/images/guadalupeysalvador/img2.jpeg";

const Hero = () => {
  const { controls } = useContext(StartAnimation);

  return (
    <>
      <div
        style={{
          backgroundImage: `
      url(${imgHero.src})
    `,
        }}
        className="h-screen bg-cover bg-center bg-no-repeat grayscale"
      >
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ ease: "easeInOut", duration: 1 }}
          className=" h-full flex flex-col  justify-end items-center pb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
          >
            <div
              className={`${Cormo.className} relative flex items-center justify-center`}
            >
              {/* S (ATRÁS) */}
              <span
                className="absolute text-[232px] translate-x-[48px] translate-y-[90px] text-white tracking-wide z-0 opacity-80"
                style={{
                  textShadow: `
        0 0 8px rgba(201,168,106,0.4),
        0 0 16px rgba(201,168,106,0.3),
        0 4px 12px rgba(0,0,0,0.25)
      `,
                }}
              >
                A
              </span>

              {/* G (ADELANTE) */}
              <span
                className="relative text-[232px] text-white tracking-wide z-10"
                style={{
                  textShadow: `
        0 0 10px rgba(201,168,106,0.6),
        0 0 20px rgba(201,168,106,0.4),
        0 6px 18px rgba(0,0,0,0.35)
      `,
                }}
              >
                G
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
