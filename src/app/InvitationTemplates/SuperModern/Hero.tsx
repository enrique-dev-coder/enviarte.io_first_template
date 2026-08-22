"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { Cormo } from "@/fonts";
import { StartAnimation } from "@/contexts/AnimationContext";

const Hero = ({
  imageUrl,
  initials,
}: {
  imageUrl: string;
  initials: { first: string; second: string };
}) => {
  const { controls } = useContext(StartAnimation);
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="h-screen bg-cover bg-center bg-no-repeat grayscale"
    >
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={controls}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex h-full items-end justify-center pb-20"
      >
        <div
          className={`${Cormo.className} relative flex items-center justify-center`}
        >
          <span className="absolute z-0 translate-x-12 translate-y-[90px] text-[232px] tracking-wide text-white opacity-80">
            {initials.second}
          </span>
          <span className="relative z-10 text-[232px] tracking-wide text-white">
            {initials.first}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
