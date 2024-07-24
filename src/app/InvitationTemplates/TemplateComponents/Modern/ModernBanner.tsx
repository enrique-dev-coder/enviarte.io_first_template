"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

const SingleFoto = ({ img, col }: { img: StaticImageData; col: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85 }}
      viewport={{ once: true }}
      className={`${col} cell:col-span-12`}
    >
      <Image src={img} className="w-full" alt="galeria" />
    </motion.div>
  );
};

const ModernBanner = ({
  ImageGalleryList,
}: {
  ImageGalleryList: Array<StaticImageData>;
}) => {
  return (
    <div>
      {/* <AnimatedTitle
        title="Galería"
        extraStyles={`${lora.className} font-medium cell:text-xl`}
      /> */}
      <div className=" grid grid-cols-12 ">
        {ImageGalleryList.map((img, i) => (
          <SingleFoto key={i} col="col-span-6" img={img} />
        ))}
      </div>
    </div>
  );
};

export default ModernBanner;
