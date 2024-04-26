import React from "react";
import Image from "next/image";
import { greatVibes } from "@/fonts";
import envelope from "/public/assets/images/envelope_13487855.png";
import liverpool from "/public/assets/images/liverpool-blanco.png";
import amazon from "/public/assets/images/amazon_white.png";
import Button from "../UI/Button";
import AnimatedTitle from "../UI/AnimatedTitle";
import { inter } from "@/fonts";

const MesaDeRegalosTemplate2 = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-auto py-4">
      <AnimatedTitle
        title="Mesa de regalos"
        extraStyles={`${greatVibes.className} text-yellow-50  text-6xl `}
      />
      <div className="flex justify-evenly items-center my-8 pt-8 pb-4 gap-4 w-[60%] h-[180px] mx-auto cell:flex-col ">
        <div className=" w-1/3 flex justify-center cell:w-11/12 cell:mx-auto cell:flex cell:justify-center">
          <Image alt="sobre" src={envelope} className="w-[40%] " />
        </div>
        <div className=" w-1/3 h-full flex flex-col justify-between items-center cell:w-11/12 cell:mx-auto cell:flex-col cell:justify-center">
          <Image alt="sobre" src={liverpool} className="w-[90%] cell:w-full" />
          <Button
            externalLink="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51200971"
            text="Ver Mesa"
            extraStyles="bg-yellow-50 !text-complementaryDark"
          />
        </div>
        <div className=" w-1/3  h-full flex flex-col  justify-between items-center cell:w-11/12 cell:mx-auto cell:flex-col cell:justify-center  ">
          <Image alt="sobre" src={amazon} className="w-[80%] cell:w-full" />
          <Button
            externalLink="https://www.amazon.com.mx/wedding/share/DanielayJosePablo"
            text="Ver Mesa"
            extraStyles="bg-yellow-50 !text-complementaryDark"
          />
        </div>
      </div>
      <div className="  bg-yellow-50 text-center text-3xl mx-auto my-6  rounded-md shadow-md py-4 px-7 cell:text-2xl cell:mx-2">
        <p className="text-gray-700">Transferencia Bancaria</p>
        <p className="text-gray-700"> Daniela Vazquez Gaytan </p>
        <b className={`${inter.className} text-2xl text-gray-700`}>
          4152 3141 9031 7340 BBVA
        </b>
      </div>
    </div>
  );
};

export default MesaDeRegalosTemplate2;
