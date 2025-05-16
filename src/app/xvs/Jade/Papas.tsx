import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { dancing, montse } from "@/fonts";
import Flowers1 from "/public/assets/images/xvs/Jade/flores-removebg-preview.png";

const Papas = () => {
  return (
    <div className="relative">
      <div className="absolute z-[-1] top-[20%] left-[20%] h-[200px] w-[200px] rounded-full bg-gradient-radial from-[#F8C6DE]/60 to-transparent blur-2xl sm:h-[300px] sm:w-[300px]"></div>
      <div className="absolute z-[-1] bottom-[10%] right-[10%] h-[180px] w-[180px] rounded-full bg-gradient-radial from-[#F1948A]/50 to-transparent blur-2xl sm:h-[280px] sm:w-[280px]"></div>

      <Image
        src={Flowers1}
        alt="flores"
        className="absolute "
        style={{
          top: "-31px",
          left: "-24px",
          width: "40%",
          transform: "rotate(85deg)",
        }}
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex  flex-col gap-1 w-[300px] h-[70vh] items-center justify-center cell:w-full   py-4 my-2 text-center cell:text-2xl cell:text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={` text-[#7D3C98] ${dancing.className} font-semibold text-center  text-[54px]    py-4 `}
        >
          Con la bendición de mis papás
        </motion.h2>
        <p className={`text-[24px]  text-[#A084CA] ${montse.className} `}>
          JAVIER CRUZ PEREZ <br />y <br /> ANA KAREN VARGAS VARGAS
        </p>
      </motion.div>
    </div>
  );
};

export default Papas;
