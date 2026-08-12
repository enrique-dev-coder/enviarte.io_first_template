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
        <p className=" text-5xl mb-4 cell:text-3xl  text-[#40566B] ">
          {num}
        </p>{" "}
      </div>
      <p className="text-xl uppercase cell:text-sm  text-[#40566B]">{desc}</p>
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
      flex flex-col items-center justify-end w-full relative 
       bg-blend-multiply 
      cell:h-screen  cell:mt-0   cell:py-10 overflow-hidden`}
    >
      <div
        className="w-11/12 text-white py-3 px-6 rounded-md"
        style={{
          background: `
      radial-gradient(
        ellipse at 0% 0%,
        rgba(244, 180, 190, 0.65) 0%,
        rgba(244, 180, 190, 0.30) 18%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 100% 20%,
        rgba(170, 215, 245, 0.60) 0%,
        rgba(170, 215, 245, 0.25) 20%,
        transparent 48%
      ),
      radial-gradient(
        ellipse at 50% 100%,
        rgba(205, 190, 240, 0.35) 0%,
        rgba(205, 190, 240, 0.15) 20%,
        transparent 50%
      ),
      rgba(255, 255, 255, 0.78)
    `,
        }}
      >
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${champagne.className} text-[#40566B] text-center font-semibold text-[26px] mb-[32px] 
          cell:text-[42px] cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          Save the Date!
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${champagne.className} text-[#40566B]  text-center text-[28px] font-bold mb-[32px] 

           cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          {fechaString}
        </motion.p>
        <p
          className={`${champagne.className} text-[#40566B] font-semibold   text-center text-3xl cell:text-3xl`}
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
