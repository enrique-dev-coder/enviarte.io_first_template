"use client";
import { useTimer } from "react-timer-hook";
import { bavaria, greatVibes, lora } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import FlowerOrnament from "/public/assets/images/floral/floral_divider_short-removebg-preview.png";
import FlowerCorner from "/public/assets/images/Taniaydiego/flor_corner_tania_diego.png";

const Numero = ({ num, desc }: { num: any; desc: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className=" flex flex-col justify-center items-center text-slate-950"
    >
      <div className=" bg-complementaryDark w-[80px] cell:w-[48px] flex  justify-center rounded-md">
        <p className=" text-6xl mb-4 cell:text-3xl text-yellow-50 ">{num}</p>{" "}
      </div>
      <p className="text-xl uppercase cell:text-sm">{desc}</p>
    </motion.div>
  );
};

const Contador2 = ({ fechaEvento }: { fechaEvento: any }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: fechaEvento,
    onExpire: () => console.warn("El contador ha expirado"), // Puedes personalizar esto según tu necesidad
  });
  return (
    <div
      className="py-[100px] flex flex-col items-center justify-center w-full relative 
      cell:h-auto  cell:mt-0   cell:py-10 overflow-hidden"
    >
      <Image
        src={FlowerCorner}
        alt="adorno"
        className=" absolute top-[-35px] w-[20%] right-0 rotate-180 cell:top-0 cell:w-[32%]"
      />
      <Image
        src={FlowerCorner}
        alt="adorno"
        className=" absolute top-[-35px] w-[20%]  left-0 -scale-x-100 rotate-180 cell:top-0 cell:w-[32%]"
      />

      <Image
        src={FlowerCorner}
        alt="adorno"
        className=" absolute bottom-[-35px] w-[20%] left-0 cell:bottom-0 cell:w-[32%]"
      />
      <Image
        src={FlowerCorner}
        alt="adorno"
        className=" absolute bottom-[-35px] w-[20%] right-0 -scale-x-100  cell:bottom-0 cell:w-[32%]"
      />

      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className}  text-complementaryDark text-center text-7xl mb-[32px] 
        cell:text-5xl cell:mb-[18px] cell:w-[80%]`}
      >
        14 de Junio, 2024
      </motion.p>
      {/* <p
        className={`${greatVibes.className}  text-complementaryDark text-center text-6xl cell:text-3xl`}
      >
        Sólo faltan:
      </p> */}
      <Image
        src={FlowerOrnament}
        alt="adorno"
        className=" w-[200px] mt-6 mb-4 rotate-180 cell:w-[164px]"
      />
      <div className="flex gap-4 py-2">
        <Numero desc="días" num={days} />
        <Numero desc="horas" num={hours} />
        <Numero desc="minutos" num={minutes} />
        <Numero desc="segundos" num={seconds} />
      </div>
      <Image
        src={FlowerOrnament}
        alt="adorno"
        className=" w-[200px] mt-6 mb-4 cell:w-[164px]"
      />

      <div>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className}  text-slate-950 text-center text-4xl my-4 w-10/12 mx-auto cell:text-2xl`}
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
