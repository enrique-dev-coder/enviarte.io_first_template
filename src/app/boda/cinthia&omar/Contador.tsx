"use client";
import { useTimer } from "react-timer-hook";
import { lora, sofia, dancing, champagne, paris } from "@/fonts";
import { motion } from "framer-motion";
import texture from "/public/assets/images/guadalupeysalvador/texture2.jpg";

const Numero = ({ num, desc }: { num: any; desc: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className=" flex flex-col"
    >
      <div
        className={` w-[80px] h-[80px] cell:w-[48px] cell:h-[48px] flex justify-center items-center rounded-lg px-2`}
      >
        <p className=" text-5xl  cell:text-3xl text-white  ">{num}</p>{" "}
      </div>
      <p className="text-xl uppercase cell:text-sm text-white ">{desc}</p>
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
      className="w-full max-w-sm rounded-xl bg-[#6b705c]/80 text-white shadow-xl bg-cover  bg-blend-multiply bg-center"
      style={{
        backgroundImage: `url(${texture.src})`,
      }}
    >
      <div className="  text-white pt-2 px-4 rounded-md">
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${paris.className}  text-center text-4xl font-bold
          cell:w-full cell:mx-auto`}
        >
          ¡Prepárate!
        </motion.p>
        <p className={`${lora.className} uppercase  text-center`}>
          Nos vemos dentro de
        </p>
      </div>
      <div className="  text-white pb-2 px-4 rounded-md">
        <div className="flex gap-4  justify-center">
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
