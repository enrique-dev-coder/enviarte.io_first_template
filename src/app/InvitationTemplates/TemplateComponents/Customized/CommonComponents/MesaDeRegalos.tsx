"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { dancing } from "@/fonts";
import { NextFont } from "next/dist/compiled/@next/font";
import liverpool from "/public/assets/images/liverpool.webp";
import amazon from "/public/assets/images/amazon.webp";

const MesaDeRegalos = ({
  backGround,
  ShowFraseDeAgradecimientoInicio,
  FraseAgradecimientoInicioColor,
  FraseAgradecimientoInicioSize,
  FraseAgradecimientoInicioFont,
  FraseAgradecimientoInicioText,
  SectionTitleFont,
  SectionTitleColor,
  ShowSobres,
  SobresType,
  SobresImg,
  SobresTextColor,
  SobresTextContent,
  ShowRegalo,
  ShowTransferencia,
  ShowFraseDeAgradecimientoFinal,
  FraseAgradecimientoFinalColor,
  FraseAgradecimientoFinalSize,
  FraseAgradecimientoFinalFont,
  FraseAgradecimientoFinalText,
  datosTransferencia,
  ShowLiverpool,
  liverpoolNoEvento,
  showAmazon,
}: {
  backGround: string;
  ShowFraseDeAgradecimientoInicio: boolean;
  FraseAgradecimientoInicioColor: string | undefined;
  FraseAgradecimientoInicioSize: string | undefined;
  FraseAgradecimientoInicioFont: NextFont | undefined;
  FraseAgradecimientoInicioText: string | undefined;
  SectionTitleFont: NextFont;
  SectionTitleColor: string;
  ShowSobres: boolean;
  SobresType: string;
  SobresImg: StaticImageData | string;
  SobresTextColor: string;
  SobresTextContent: string;
  ShowRegalo: boolean;
  ShowTransferencia: boolean;
  ShowFraseDeAgradecimientoFinal: boolean;
  FraseAgradecimientoFinalColor: string | undefined;
  FraseAgradecimientoFinalSize: string | undefined;
  FraseAgradecimientoFinalFont: NextFont | undefined;
  FraseAgradecimientoFinalText: string | undefined;
  datosTransferencia?: {
    owner: string | undefined;
    numero: string | undefined;
  };
  ShowLiverpool: boolean;
  liverpoolNoEvento?: string | undefined;
  showAmazon: boolean;
}) => {
  return (
    <div
      className={`
        ${backGround}
        flex flex-col items-center justify-center h-auto py-4
    `}
    >
      {ShowFraseDeAgradecimientoInicio && (
        <div
          className={`text-center  w-8/12 cell:w-10/12 my-10
            ${FraseAgradecimientoInicioColor} 
            ${FraseAgradecimientoInicioSize} 
            ${FraseAgradecimientoInicioFont?.className} 
          `}
        >
          {FraseAgradecimientoInicioText}
        </div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`
        ${SectionTitleFont.className}
        ${SectionTitleColor}
          text-center text-5xl py-1 
        cell:text-4xl cell:px-4 font-bold
      `}
      >
        Sugerencia de regalos
      </motion.h2>
      <div className="flex justify-evenly items-center py-4 gap-4 w-full  mx-auto cell:flex-col ">
        {ShowSobres && SobresType === "default" && (
          <div className=" flex items-center gap-2  cell:justify-center cell:flex-col">
            {SobresImg && (
              <Image alt="sobre" src={SobresImg} className="" width={100} />
            )}
            <p className={`text-3xl cell:text-xl ${SobresTextColor}`}>
              {SobresTextContent}
            </p>
          </div>
        )}
        {ShowRegalo && (
          <div className=" flex items-center gap-2  cell:justify-center cell:flex-col">
            <p className={`text-3xl cell:text-xl ${SobresTextColor}`}>
              o Regalo
            </p>
          </div>
        )}
        {ShowSobres && SobresType === "modern" && (
          <div className=" w-[400px] bg-white cell:w-[90%] text-center flex flex-col items-center text-3xl   border border-slate-700 rounded-md shadow-md py-4 px-7 cell:text-2xl cell:mx-2">
            {SobresImg && (
              <Image alt="sobre" src={SobresImg} className="w-[22%]" />
            )}

            <p className={`text-3xl ${SobresTextColor}`}>
              {" "}
              {SobresTextContent}
            </p>
          </div>
        )}
        {ShowLiverpool && (
          <div className=" bg-white w-[400px] cell:w-[90%] text-center flex flex-col items-center text-3xl   border border-slate-700 rounded-md shadow-md py-4 px-7 cell:text-2xl cell:mx-2">
            {SobresImg && (
              <Image alt="sobre" src={liverpool} className="w-[80%]" />
            )}

            <p className={`text-2xl ${SobresTextColor}`}> Mesa de Regalo</p>
            <p className={`text-xl`}> No.Evento:</p>
            <p className={`text-xl font-bold`}> {liverpoolNoEvento}</p>
          </div>
        )}
        {showAmazon && (
          <div className=" bg-white w-[400px] cell:w-[90%] text-center flex flex-col items-center text-3xl   border border-slate-700 rounded-md shadow-md py-4 px-7 cell:text-2xl cell:mx-2">
            <Image alt="sobre" src={amazon} className="w-[80%]" />
            <p className={`text-2xl ${SobresTextColor}`}>
              {" "}
              Mesa de Regalo Amazon
            </p>
            <a
              className=" bg-black text-white rounded-full px-4 py-2 my-2"
              href=""
              target="_blank"
              rel="nofollow noopener"
            >
              Visitar Mesa!
            </a>
          </div>
        )}

        {ShowTransferencia && (
          <div className=" bg-white text-center text-3xl cell:w-[90%]   border border-slate-700 rounded-md shadow-md py-4 px-7 cell:text-2xl cell:mx-2">
            <p className="cell:text-xl">Transferencia Bancaria</p>
            <p className="cell:text-xl">{datosTransferencia?.owner}</p>
            <b className={` text-2xl`}>{datosTransferencia?.numero}</b>
          </div>
        )}
      </div>
      {ShowFraseDeAgradecimientoFinal && (
        <div className="my-10 cell:my-2 flex flex-col items-center">
          <h2 className={`${dancing.className} text-center text-4xl font-bold`}>
            Gracias
          </h2>
          <div
            className={`text-center  w-8/12  cell:w-10/12 
            ${FraseAgradecimientoFinalColor} 
            ${FraseAgradecimientoFinalSize} 
            ${FraseAgradecimientoFinalFont?.className} 
          `}
          >
            {FraseAgradecimientoFinalText}
          </div>
        </div>
      )}
    </div>
  );
};

export default MesaDeRegalos;
