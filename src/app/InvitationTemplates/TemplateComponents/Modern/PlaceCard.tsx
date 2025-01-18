import React from "react";
import { MapPin } from "lucide-react";
import { NextFont } from "next/dist/compiled/@next/font";
import { motion } from "framer-motion";

const PlaceCard = ({
  show,
  desc,
  nombre,
  ubicacion,
  direccion,
  hora,
  titleColor,
  bgButtonColor,
  titleFont,
  horaDos,
}: {
  show: boolean;
  desc: string | undefined;
  nombre:
    | {
        content: string;
        font: NextFont;
        color?: string | undefined;
      }
    | undefined;
  ubicacion: string | undefined;
  direccion: string | undefined;
  hora: string | undefined;
  titleColor: string | undefined;
  bgButtonColor: string | undefined;
  titleFont: NextFont | undefined;
  horaDos?: string | undefined;
}) => {
  return show ? (
    <section className="py-6">
      <div
        className="flex flex-col gap-2 justify-center items-center bg-white w-[45%] py-6 shadow-lg mx-auto 
      cell:w-full
      "
      >
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${titleColor} ${titleFont?.className} 
           font-bold  text-center text-4xl py-1 
            cell:text-3xl cell:px-4`}
        >
          {desc}
        </motion.h2>
        <p
          className={`
          ${nombre?.font.className}
          ${!nombre?.color ? "text-black" : nombre?.color}
           text-2xl text-center cell:text-xl cell:px-2 cell:font-bold  font-bold 
          `}
        >
          {nombre?.content}
        </p>
        <p
          className={`${!titleColor ? "text-black" : titleColor}
          text-2xl cell:text-xl cell:px-2 cell:font-bold`}
        >
          {hora}
        </p>
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          {horaDos}
        </p>
        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-black font-bold " />
          <p className=" text-xl text-center cell:text-base ">{direccion}</p>
        </div>
        <a href={ubicacion}>
          <button
            className={`${bgButtonColor} text-white py-2 px-4 rounded-full`}
          >
            Cómo llegar
          </button>
        </a>
      </div>
    </section>
  ) : null;
};

export default PlaceCard;
