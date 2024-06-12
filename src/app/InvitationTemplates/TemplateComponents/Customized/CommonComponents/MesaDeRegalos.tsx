"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MesaRegalosPropsTypes } from "../types";

const MesaDeRegalos = ({
  mesaDeRegalosProps,
}: {
  mesaDeRegalosProps: MesaRegalosPropsTypes;
}) => {
  return (
    <div
      className={`
        ${mesaDeRegalosProps.backGround}
        flex flex-col items-center justify-center h-auto py-4
    `}
    >
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`
        ${mesaDeRegalosProps.title.font.className}
        ${mesaDeRegalosProps.title.textColor}
        font-bold  text-center text-5xl py-1 
        cell:text-3xl cell:px-4
      `}
      >
        Sugerencia de regalos
      </motion.h2>
      <div className="flex justify-evenly items-center py-4 gap-4 w-full  mx-auto cell:flex-col ">
        {mesaDeRegalosProps.sobres.enabled &&
          mesaDeRegalosProps.sobres.type === "default" && (
            <div className=" flex items-center gap-2  cell:justify-center cell:flex-col">
              <Image
                alt="sobre"
                src={mesaDeRegalosProps.sobres.img}
                className=""
                width={100}
              />
              <p className={`text-3xl ${mesaDeRegalosProps.sobres.textColor}`}>
                Lluvia de sobres
              </p>
            </div>
          )}
        {mesaDeRegalosProps.sobres.enabled &&
          mesaDeRegalosProps.sobres.type === "modern" && (
            <div className=" flex items-center justify-center  border shadow-md gap-2 flex-col  cell:justify-center">
              <Image
                alt="sobre"
                src={mesaDeRegalosProps.sobres.img}
                className="w-[20%]"
              />
              <p className={`text-3xl ${mesaDeRegalosProps.sobres.textColor}`}>
                Lluvia de sobres
              </p>
            </div>
          )}
        {/* <div className=" w-1/3 flex flex-col justify-center items-center cell:w-11/12 cell:mx-auto cell:flex-col cell:justify-center">
          <Image alt="sobre" src={liverpool} className="w-[90%] cell:w-full" />
          <Button
            externalLink="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51200971"
            text="Ver Mesa"
          />
        </div>
        <div className=" w-1/3  flex flex-col justify-center items-center cell:w-11/12 cell:mx-auto cell:flex-col cell:justify-center  ">
          <Image alt="sobre" src={amazon} className="w-[80%] cell:w-full" />
          <Button
            externalLink="https://www.amazon.com.mx/wedding/share/DanielayJosePablo"
            text="Ver Mesa"
          />
        </div> */}
        {mesaDeRegalosProps.transferencia.enabled && (
          <div className=" text-center text-3xl  my-6 border border-slate-700 rounded-md shadow-md py-4 px-7 cell:text-2xl cell:mx-2">
            <p>Transferencia Bancaria</p>
            <p> Daniela Vazquez Gaytan </p>
            <b className={` text-2xl`}>4152 3141 9031 7340 BBVA</b>
          </div>
        )}
      </div>
    </div>
  );
};

export default MesaDeRegalos;
