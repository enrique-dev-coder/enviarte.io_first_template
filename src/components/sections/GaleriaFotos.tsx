"use client";
import { lora } from "@/fonts";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTitle from "../UI/AnimatedTitle";
import img1 from "/public/assets/images/Taniaydiego/banner_desk.jpg";
import img2 from "/public/assets/images/Taniaydiego/img2.jpg";
import img3 from "/public/assets/images/Taniaydiego/img3.jpg";
import img4 from "/public/assets/images/Taniaydiego/img4.jpg";

import Image, { StaticImageData } from "next/image";

const SingleFoto = ({ img }: { img: StaticImageData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85 }}
      viewport={{ once: true }}
      className=" col-span-6 cell:col-span-12"
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
        <SingleFoto img={img1} />
        <SingleFoto img={img2} />
        <SingleFoto img={img3} />
        <SingleFoto img={img4} />
      </div>
    </div>
  );
};

export default GaleriaFotos;
