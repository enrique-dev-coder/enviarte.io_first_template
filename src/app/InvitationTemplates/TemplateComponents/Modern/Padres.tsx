"use client";
import React from "react";
import AnimatedTitle from "@/components/UI/AnimatedTitle";
import { motion } from "framer-motion";

const Card = ({
  padresde,
  papa,
  mama,
}: {
  padresde: string;
  papa: string;
  mama: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col gap-1 w-[300px] cell:w-full bg-white shadow-lg py-4 text-center cell:text-2xl cell:text-center"
    >
      <p className="text-2xl font-bold">{padresde}</p>
      <p className="text-xl text-gray-800 font-medium">{papa}</p>
      <p className="text-xl text-gray-800 font-medium">{mama}</p>
    </motion.div>
  );
};

const Padres = () => {
  return (
    <div className=" py-14 cell:py-4 flex flex-col items-center justify-center cell:h-auto">
      <AnimatedTitle
        title="Con la bendición de nuestros padres:"
        extraStyles="!text-black"
      />
      <div className="flex justify-evenly pb-4 pt-8  gap-[80px] cell:gap-[20px] cell:w-full cell:px-0 cell:flex-col cell:items-center ">
        <Card
          padresde="Padres de la novia"
          papa="Jorge Vázques"
          mama="Daniela Gaytan"
        />
        <Card
          padresde="Padres de el novio"
          papa="Jorge Vázques"
          mama="Daniela Gaytan"
        />
      </div>
    </div>
  );
};

export default Padres;
