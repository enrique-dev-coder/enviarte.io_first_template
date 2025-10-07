"use client";
import { useTimer } from "react-timer-hook";
import { champagne, paris, analogist, lora } from "@/fonts";
import { motion } from "framer-motion";

const Reservaciones = ({
  nombreInvitado,
  pases,
  fotoContador,
}: {
  nombreInvitado: string;
  pases: string | undefined;
  fotoContador: string;
}) => {
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
      <div className="w-11/12 py-3 px-6 rounded-md bg-gradient-to-br from-[#F6C8D1]/80 to-[#D4A142]/60">
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${paris.className} text-[#FDECEF] text-center font-semibold text-[26px] mb-[32px] 
          cell:text-[42px] cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          Están Invitados
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-[#FDECEF]  text-center text-3xl font-bold mb-[32px] 

           cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          {nombreInvitado}
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${paris.className} text-[#FDECEF] text-center font-semibold text-[26px] mb-[32px] 
          cell:text-[42px] cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          ¡Los esperamos!
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-[#FDECEF]  text-center text-6xl font-bold mb-[32px] 

           cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          {pases}
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${paris.className} text-[#FDECEF] text-center font-semibold text-[26px] mb-[32px] 
          cell:text-[42px] cell:mb-[18px] cell:w-[80%] cell:mx-auto`}
        >
          Pases Reservados
        </motion.p>
      </div>
    </div>
  );
};

export default Reservaciones;
