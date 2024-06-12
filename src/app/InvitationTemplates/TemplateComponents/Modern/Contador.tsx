"use client";
import { useTimer } from "react-timer-hook";
import { lora } from "@/fonts";
import { motion } from "framer-motion";
import { colorPalette } from "@/types";
import { themeColor } from "../../Theme/Colors";

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
        <p className=" text-5xl mb-4 cell:text-3xl text-white ">{num}</p>{" "}
      </div>
      <p className="text-xl uppercase cell:text-sm text-white">{desc}</p>
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
      className={`
      bg-fixed
      ${fotoContador}
      bg-cover bg-center grayscale
      h-[100vh]
      flex flex-col items-center justify-center w-full relative 
      bg-stone-300 bg-blend-multiply 
      cell:h-screen  cell:mt-0   cell:py-10 overflow-hidden`}
    >
      <div className="bg-black/70 text-white py-3 px-6 rounded-md">
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className}   text-center text-4xl mb-[32px] 
          cell:text-xl cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          {fechaString}
        </motion.p>
        <p className={`${lora.className}  text-center text-3xl cell:text-3xl`}>
          Sólo faltan:
        </p>

        <div className="flex gap-4 py-2 justify-center">
          <Numero desc="días" num={days} />
          <Numero desc="horas" num={hours} />
          <Numero desc="minutos" num={minutes} />
          <Numero desc="segundos" num={seconds} />
        </div>
      </div>
    </div>
  );
};

export default Contador;
