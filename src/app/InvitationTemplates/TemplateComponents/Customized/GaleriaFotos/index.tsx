"use client";
import { motion } from "framer-motion";
import React from "react";

import Image, { StaticImageData } from "next/image";

interface GaleriaFotosPropsTypes {
  backGround: string;
  imgList: { id: number; img: StaticImageData }[];
}

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

const GaleriaFotos = ({
  galeriaFotosProps,
}: {
  galeriaFotosProps: GaleriaFotosPropsTypes;
}) => {
  return (
    <div>
      {/* <AnimatedTitle
        title="Galería"
        extraStyles={`${lora.className} font-medium cell:text-xl`}
      /> */}
      <div
        className={`grid grid-cols-12 gap-2 ${galeriaFotosProps.backGround}`}
      >
        {galeriaFotosProps.imgList.map((img) => (
          <SingleFoto key={img.id} col="col-span-6" img={img.img} />
        ))}
      </div>
    </div>
  );
};

export default GaleriaFotos;
