"use client";
import { useTimer } from "react-timer-hook";
import { lora, sofia, dancing, champagne } from "@/fonts";
import { motion } from "framer-motion";

const Numero = ({ num, desc }: { num: any; desc: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className={`${champagne.className} font-bold flex flex-col justify-center items-center text-slate-950`}
    >
      <div
        className={` w-[80px] h-[80px] cell:w-[48px] flex justify-center items-center rounded-lg px-2`}
      >
        <p className=" text-5xl mb-4 cell:text-3xl  text-blue-700  ">{num}</p>{" "}
      </div>
      <p className="text-xl uppercase cell:text-sm  text-blue-700">{desc}</p>
    </motion.div>
  );
};

const Contador = ({
  fechaEvento,
  fechaString,
  fotoContador,
}: {
  fechaEvento: Date;
  fechaString: string | undefined;
  fotoContador: string;
}) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: fechaEvento,
    onExpire: () => console.warn("El contador ha expirado"), // Puedes personalizar esto según tu necesidad
  });

  return (
    <div
      className={`
    
      ${fotoContador}
      bg-cover bg-center 
      h-[100vh]
      flex flex-col items-center justify-center w-full relative 
       bg-blend-multiply 
      cell:h-screen  cell:mt-0   cell:py-10 overflow-hidden`}
    >
      <div className="bg-white/80 w-11/12 text-white py-3 px-6 rounded-md">
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${champagne.className} text-blue-700 text-center font-semibold text-[26px] mb-[32px] 
          cell:text-[42px] cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          Save the Date!
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${champagne.className} text-blue-700   text-center text-[28px] font-bold mb-[32px] 

           cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          {fechaString}
        </motion.p>
        <p
          className={`${champagne.className} text-blue-700 font-semibold   text-center text-3xl cell:text-3xl`}
        >
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
