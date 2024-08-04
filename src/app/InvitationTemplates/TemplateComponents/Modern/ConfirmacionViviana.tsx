import React from "react";
import WhatsIcon from "/public/assets/images/Taniaydiego/whats_icon.png";
import Image from "next/image";
import AnimatedTitle from "../Customized/CommonComponents/AnimatedTitle";
import { lora, bavaria, analogist } from "@/fonts";
import { motion } from "framer-motion";

const ConfirmacionViviana = ({
  descTextSize,
  descFontWeight,
  buttonBorderColor,
}: {
  descTextSize: string | undefined;
  descFontWeight: string | undefined;
  buttonBorderColor: string | undefined;
}) => {
  return (
    <div className="pt-4 pb-10 flex flex-col bg-white  items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`
       ${descFontWeight} font-bold  text-center ${descTextSize}  py-1  cell:px-4`}
      >
        Favor de confirmar tu asistencia con nuestra wedding planner
      </motion.h2>
      <p className=" text-3xl cell:text-lg cell:text-center">
        Al dar click seras redirigido a WhatsApp
      </p>
      <div className="flex flex-col justify-center items-center py-8">
        <p
          className={`${analogist.className} text-4xl cell:text-3xl text-center font-bold`}
        >
          Wedding Planner <br /> Viviana Amare
        </p>
        <a href="https://api.whatsapp.com/send?phone=5218441339405">
          <button
            className={`flex items-center border-4 my-3 rounded-full px-4 py-2 ${buttonBorderColor} `}
          >
            <Image src={WhatsIcon} alt="invitacione para boda" width={48} />
            <p className=" text-3xl"> 844 133 9405</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ConfirmacionViviana;
