"use client";
import { useTimer } from "react-timer-hook";
import { greatVibes, lora } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import FlowerOrnament from "/public/assets/images/floral/floral_divider_short-removebg-preview.png";
import FlowerCorner from "/public/assets/images/floral/floral_corner-removebg-preview.png";

const Contador2 = ({ fechaEvento }: { fechaEvento: any }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: fechaEvento,
    onExpire: () => console.warn("El contador ha expirado"), // Puedes personalizar esto según tu necesidad
  });

  return (
    <div
      className="py-[100px] flex flex-col items-center justify-center w-full relative 
      cell:h-auto  cell:mt-0 cell:my-5 cell:py-4 overflow-hidden"
    >
      <Image
        src={FlowerCorner}
        alt="adorno"
        className=" absolute top-[-35px] w-[20%] right-0 rotate-180"
      />
      <Image
        src={FlowerCorner}
        alt="adorno"
        className=" absolute top-[-25px] w-[20%] left-[-10px] rotate-[90deg]"
      />
      <Image
        src={FlowerCorner}
        alt="adorno"
        className=" absolute bottom-[-35px] w-[20%] left-0"
      />
      <Image
        src={FlowerCorner}
        alt="adorno"
        className=" absolute bottom-[-35px] right-0 w-[20%] rotate-[270deg] "
      />
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className}  text-complementaryDark text-center text-5xl mb-[32px] cell:text-3xl`}
      >
        Viernes 23 de Agosto, 2024
      </motion.p>
      {/* <p
        className={`${greatVibes.className}  text-complementaryDark text-center text-6xl cell:text-3xl`}
      >
        Sólo faltan:
      </p> */}
      <Image
        src={FlowerOrnament}
        alt="adorno"
        className=" w-[200px] mt-6 mb-4 rotate-180"
      />
      <div className="flex gap-4 py-2 text-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" flex flex-col justify-center items-center"
        >
          <p className=" text-7xl mb-4 cell:text-2xl">{days}</p>{" "}
          <p className="text-2xl uppercase cell:text-base">días</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" flex flex-col justify-center items-center"
        >
          <p className=" text-7xl mb-4 cell:text-2xl">{hours}</p>
          <p className="text-2xl uppercase cell:text-base">horas</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" flex flex-col justify-center items-center"
        >
          <p className=" text-7xl mb-4 cell:text-2xl">{minutes}</p>
          <p className="text-2xl uppercase cell:text-base">minutos</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" flex flex-col justify-center items-center"
        >
          <p className=" text-7xl mb-4 cell:text-2xl">{seconds}</p>
          <p className="text-2xl uppercase cell:text-base">segundos</p>
        </motion.div>
      </div>
      <Image
        src={FlowerOrnament}
        alt="adorno"
        className=" w-[200px] mt-6 mb-4"
      />

      <div>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${greatVibes.className}  text-slate-950 text-center text-4xl my-4 w-10/12 mx-auto cell:text-3xl`}
        >
          Dios nos ha bendecido al cruzar nuestros caminos, ahora queremos unir
          nuestras vidas en matrimonio, y que nuestra vida sea un testimonio de
          su amor incondicional
        </motion.p>
      </div>
    </div>
  );
};

export default Contador2;
