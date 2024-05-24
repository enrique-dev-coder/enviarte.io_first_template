"use client";
import { useTimer } from "react-timer-hook";
import { dancing } from "@/fonts";
const Contador1 = ({ fechaEvento }: { fechaEvento: any }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: fechaEvento,
    onExpire: () => console.warn("El contador ha expirado"), // Puedes personalizar esto según tu necesidad
  });

  return (
    <div
      className="mt-10 flex flex-col items-center justify-center w-full h-[700px]
         bg-no-repeat  bg-cover bg-center  bg-stone-300 bg-blend-multiply  
         cell:h-auto  cell:mt-0 cell:my-5 cell:py-4
         bg-[url('/assets/images/contador.jpeg')]
      "
    >
      <p
        className={`${dancing.className} text-white text-center text-6xl cell:text-3xl`}
      >
        Sólo faltan:
      </p>
      <div className="flex gap-4 py-4 text-white">
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-7xl mb-4 cell:text-2xl">{days}</p>{" "}
          <p className="text-2xl uppercase cell:text-base">días</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-7xl mb-4 cell:text-2xl">{hours}</p>
          <p className="text-2xl uppercase cell:text-base">horas</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-7xl mb-4 cell:text-2xl">{minutes}</p>
          <p className="text-2xl uppercase cell:text-base">minutos</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-7xl mb-4 cell:text-2xl">{seconds}</p>
          <p className="text-2xl uppercase cell:text-base">segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Contador1;
