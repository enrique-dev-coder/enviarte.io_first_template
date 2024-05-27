"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { InfoSectionTypes } from "../types";

const Iglesia = ({ iglesiaProps }: { iglesiaProps: InfoSectionTypes }) => {
  return (
    <section className={`py-6 ${iglesiaProps.backGround}`}>
      <div className="flex flex-col gap-2 justify-center items-center ">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`
        ${iglesiaProps.title.font.className}
        ${iglesiaProps.title.textColor}
        font-bold  text-center text-5xl py-1 
        cell:text-3xl cell:px-4
      `}
        >
          Ceremonia Religiosa
        </motion.h2>
        <div className={`${iglesiaProps.sectionTextColor} text-center`}>
          <p className=" text-3xl cell:text-xl cell:px-2 cell:font-bold ">
            {iglesiaProps.nombre}{" "}
          </p>
          <p className=" text-3xl cell:text-xl cell:px-2 cell:font-bold">
            {iglesiaProps.horas}
          </p>
          <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
            <MapPin className=" text-complementaryDark font-bold " />
            <p className=" text-3xl text-center cell:text-base ">
              {iglesiaProps.direccion}
            </p>
          </div>
        </div>

        <button
          className={` ${iglesiaProps.buttonStyles.bg} ${iglesiaProps.buttonStyles.font.className} ${iglesiaProps.buttonStyles.textColor} text-3xl my-1 px-4 py-2 rounded-full`}
        >
          <a
            href={iglesiaProps.ubicacion}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ubicación
          </a>
        </button>
      </div>
    </section>
  );
};

export default Iglesia;
