"use client";
import { motion } from "framer-motion";
import React from "react";
import img1 from "/public/assets/images/Gabrielayraul/GyR_7.jpeg";
import img2 from "/public/assets/images/Gabrielayraul/GyR_10.jpeg";
import img3 from "/public/assets/images/Gabrielayraul/GyR_11.jpeg";
import img4 from "/public/assets/images/Gabrielayraul/GyR_5.jpeg";

import Image, { StaticImageData } from "next/image";

const SingleFoto = ({ img, col }: { img: StaticImageData; col: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85 }}
      viewport={{ once: true }}
      className={`${col} cell:col-span-12`}
    >
      <Image
        src={img}
        className="w-full border border-complementaryDark"
        alt="galeria"
      />
    </motion.div>
  );
};

const GaleriaFotos = () => {
  return (
    <div>
      {/* <AnimatedTitle
        title="Galería"
        extraStyles={`${lora.className} font-medium cell:text-xl`}
      /> */}
      <div className=" grid grid-cols-12 gap-2">
        <SingleFoto col="col-span-6" img={img1} />
        <SingleFoto col="col-span-6" img={img2} />
        <SingleFoto col="col-span-6" img={img3} />
        <SingleFoto col="col-span-6 " img={img4} />
      </div>
    </div>
  );
};

export default GaleriaFotos;
