import React from "react";
import WhatsIcon from "/public/assets/images/Taniaydiego/whats_icon.png";
import Image from "next/image";
import AnimatedTitle from "../CommonComponents/AnimatedTitle";
import { lora, bavaria } from "@/fonts";
const SoloPlanner = () => {
  return (
    <div className="pt-4 pb-10 flex flex-col  items-center justify-center">
      <AnimatedTitle
        title="Favor de confirmar tu asistencia a los siguientes teléfonos"
        extraStyles={`${lora.className} font-medium cell:text-lg`}
      />
      <p className=" text-3xl cell:text-lg cell:text-center">
        Al dar click seras redirigido a WhatsApp
      </p>
      <div className="flex flex-col justify-center items-center py-8">
        <p className={`${bavaria.className} text-4xl text-center font-bold`}>
          Wedding Planner <br /> Viviana Amare
        </p>
        <a href="https://api.whatsapp.com/send?phone=5218441339405">
          <button className="flex items-center border-4 my-3 rounded-full px-4 py-2  border-complementaryDark">
            <Image src={WhatsIcon} alt="invitacione para boda" width={48} />
            <p className=" text-3xl"> 844 133 9405</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default SoloPlanner;
