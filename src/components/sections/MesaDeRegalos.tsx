import React from "react";
import Image from "next/image";
import envelope from "../../../public/assets/images/envelope.svg";
import liverpool from "../../../public/assets/images/liverpool.webp";
import amazon from "../../../public/assets/images/amazon_logo-removebg-preview.png";
import Button from "../UI/Button";
import AnimatedTitle from "../UI/AnimatedTitle";

// TODO: agregar link de mesa de regalos
// TODO: mejroar logo de amazon

const MesaDeRegalos = () => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center cell:h-auto cell:py-4">
      <AnimatedTitle title="Sugerencia de regalos" />
      <div className="flex justify-evenly items-center py-4 gap-4 w-[60%] mx-auto cell:flex-col ">
        <div className=" w-1/3 cell:w-11/12 cell:mx-auto cell:flex cell:justify-center">
          <Image alt="sobre" src={envelope} className="w-[40%] " />
        </div>
        <div className=" w-1/3 flex flex-col justify-center items-center cell:w-11/12 cell:mx-auto cell:flex-col cell:justify-center">
          <Image alt="sobre" src={liverpool} className="w-[90%] cell:w-full" />
          <Button text="Ver Mesa" />
        </div>
        <div className=" w-1/3  flex flex-col justify-center items-center cell:w-11/12 cell:mx-auto cell:flex-col cell:justify-center  ">
          <Image alt="sobre" src={amazon} className="w-[80%] cell:w-full" />
          <Button text="Ver Mesa" />
        </div>
      </div>
    </div>
  );
};

export default MesaDeRegalos;
