"use client";
import { useTimer } from "react-timer-hook";
import { greatVibes, lora } from "@/fonts";
import Image from "next/image";
import { color, motion } from "framer-motion";
import FlowerOrnament from "/public/assets/images/floral/floral_divider_short-removebg-preview.png";
import FlowerCorner from "/public/assets/images/floral/floral_corner-removebg-preview.png";
import { ContadorPropsFloralType } from ".";

const Numero = ({
  num,
  desc,
  color,
}: {
  num: any;
  desc: string;
  color: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className=" flex flex-col justify-center items-center text-slate-950"
    >
      <div className=" bg-[#c5351b] w-[80px] cell:w-[48px] flex  justify-center rounded-md">
        <p className=" text-6xl mb-4 cell:text-3xl text-yellow-50 ">{num}</p>{" "}
      </div>
      <p className={`${color} text-xl uppercase cell:text-sm`}>{desc}</p>
    </motion.div>
  );
};

const ContadorFloral = ({ data }: { data: ContadorPropsFloralType }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: data.fecha,
    onExpire: () => console.warn("El contador ha expirado"), // Puedes personalizar esto según tu necesidad
  });

  return (
    <div
      className={`
      py-[100px] flex flex-col items-center justify-center w-full relative 
      cell:h-auto  cell:mt-0   cell:py-10 overflow-hidden 
      ${data.backGround}
      `}
    >
      {data.showCornerImg && (
        <>
          <Image
            src={FlowerCorner}
            alt="adorno"
            className=" absolute top-[-35px] w-[20%] right-0 rotate-180 cell:top-0 cell:w-[32%]"
          />
          <Image
            src={FlowerCorner}
            alt="adorno"
            className=" absolute top-[-25px] w-[20%] left-[-10px] rotate-[90deg] cell:top-0 cell:w-[32%]"
          />
          <Image
            src={FlowerCorner}
            alt="adorno"
            className=" absolute bottom-[-35px] w-[20%] left-0 cell:bottom-0 cell:w-[32%]"
          />
          <Image
            src={FlowerCorner}
            alt="adorno"
            className=" absolute bottom-[-35px] right-0 w-[20%] rotate-[270deg] cell:bottom-0 cell:w-[32%]"
          />
        </>
      )}
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${data.fechaTexto.font.className}  ${data.fechaTexto.color} text-center text-7xl mb-[32px] 
        cell:text-5xl cell:mb-[18px] cell:w-[80%]`}
      >
        {data.fechaTexto.desc}
      </motion.p>
      {/* <p
        className={`${greatVibes.className}  text-complementaryDark text-center text-6xl cell:text-3xl`}
      >
        Sólo faltan:
      </p> */}
      {data.showSeparator && (
        <Image
          src={FlowerOrnament}
          alt="adorno"
          className=" w-[200px] mt-6 mb-4 rotate-180 cell:w-[164px]"
        />
      )}
      <div className="flex gap-4 py-2">
        <Numero desc="días" num={days} color={data.textColor} />
        <Numero desc="horas" num={hours} color={data.textColor} />
        <Numero desc="minutos" num={minutes} color={data.textColor} />
        <Numero desc="segundos" num={seconds} color={data.textColor} />
      </div>
      {data.showSeparator && (
        <Image
          src={FlowerOrnament}
          alt="adorno"
          className=" w-[200px] mt-6 mb-4 cell:w-[164px]"
        />
      )}

      <div>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className}  ${data.textColor} text-center text-3xl my-4 w-10/12 mx-auto cell:text-2xl`}
        >
          Dios nos ha bendecido al cruzar nuestros caminos, ahora queremos unir
          nuestras vidas en matrimonio, y que nuestra vida sea un testimonio de
          su amor incondicional
        </motion.p>
      </div>
    </div>
  );
};

export default ContadorFloral;
