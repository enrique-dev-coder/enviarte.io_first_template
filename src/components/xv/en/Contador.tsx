"use client";
import { useTimer } from "react-timer-hook";
import { lora, sofia, dancing } from "@/fonts";
import { motion } from "framer-motion";
import { colorPalette } from "@/types";

const Numero = ({ num, desc }: { num: any; desc: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className=" flex flex-col justify-center items-center text-slate-950"
    >
      <div
        className={` w-[80px] h-[80px] cell:w-[48px] flex  justify-center items-center rounded-lg px-2`}
      >
        <p className=" text-5xl mb-4 cell:text-3xl text-[#654ca7] font-bold  ">
          {num}
        </p>{" "}
      </div>
      <p className="text-xl uppercase cell:text-sm text-[#654ca7] font-bold ">
        {desc}
      </p>
    </motion.div>
  );
};

const Contador = ({
  fechaEvento,
  fechaString,
  color,
  fotoContador,
}: {
  fechaEvento: Date;
  fechaString: string | undefined;
  color: colorPalette;
  fotoContador: string;
}) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: fechaEvento,
    onExpire: () => console.warn("El contador ha expirado"), // Puedes personalizar esto según tu necesidad
  });

  return (
    <div
      style={{ backgroundAttachment: "fixed" }}
      className={`
    
      ${fotoContador}
      bg-cover bg-center 
      h-[100vh]
      flex flex-col items-center justify-center w-full relative 
      bg-stone-300 bg-blend-multiply 
      cell:h-screen  cell:mt-0   cell:py-10 overflow-hidden`}
    >
      <div className=" bg-purple-100/70 text-[#654ca7] font-bold py-3 px-6 rounded-md">
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className}   text-center text-4xl mb-[32px] 
          cell:text-3xl cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          {fechaString}
        </motion.p>
        <p className={`${lora.className}  text-center text-3xl cell:text-3xl`}>
          Just missing:
        </p>

        <div className="flex gap-4 py-2 justify-center">
          <Numero desc="days" num={days} />
          <Numero desc="hours" num={hours} />
          <Numero desc="minutes" num={minutes} />
          <Numero desc="seconds" num={seconds} />
        </div>
      </div>
    </div>
  );
};

export default Contador;
