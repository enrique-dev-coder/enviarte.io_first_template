import React from "react";
import Image from "next/image";
import envelope from "../../../public/assets/images/envelope.svg";
import liverpool from "../../../public/assets/images/liverpool.webp";
import amazon from "../../../public/assets/images/amazon_logo-removebg-preview.png";
import Button from "../UI/Button";
import AnimatedTitle from "../UI/AnimatedTitle";
import { inter } from "@/fonts";
// Daniela Vazquez Gaytan
// 4152 3141 9031 7340 BBVA
const MesaDeRegalos = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-auto py-4">
      <AnimatedTitle title="Sugerencia de regalos" />
      <div className="flex justify-evenly items-center py-4 gap-4 w-[60%] mx-auto cell:flex-col ">
        <div className=" w-1/3 cell:w-11/12 cell:mx-auto cell:flex cell:justify-center">
          <Image alt="sobre" src={envelope} className="w-[40%] " />
        </div>
        <div className=" w-1/3 flex flex-col justify-center items-center cell:w-11/12 cell:mx-auto cell:flex-col cell:justify-center">
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
        </div>
      </div>
      <div className=" text-center text-3xl mx-auto my-6 border border-slate-700 rounded-md shadow-md py-4 px-7 cell:text-2xl cell:mx-2">
        <p>Transferencia Bancaria</p>
        <p> Daniela Vazquez Gaytan </p>
        <b className={`${inter.className} text-2xl`}>
          4152 3141 9031 7340 BBVA
        </b>
      </div>
    </div>
  );
};

export default MesaDeRegalos;
