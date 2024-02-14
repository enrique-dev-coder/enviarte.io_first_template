"use client";
import { useTimer } from "react-timer-hook";
import { dancing } from "@/fonts";
const Contador = ({ fechaEvento }: { fechaEvento: any }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: fechaEvento,
    onExpire: () => console.warn("El contador ha expirado"), // Puedes personalizar esto según tu necesidad
  });

  return (
    <div
      style={{
        backgroundImage: "url(../../../assets/images/hero.jpg)",
      }}
      className="mt-10 flex flex-col items-center justify-center w-full h-[300px]
         bg-no-repeat     
         cell:h-auto  cell:mt-0 cell:my-5 cell:py-4
      "
    >
      <p className={`${dancing.className} text-center text-5xl cell:text-3xl`}>
        Solo faltan:
      </p>
      <div className="flex gap-4 py-4">
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-6xl mb-4 cell:text-3xl">{days}</p>{" "}
          <p className="text-xl uppercase cell:text-lg">días</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-6xl mb-4 cell:text-3xl">{hours}</p>
          <p className="text-xl uppercase cell:text-lg">horas</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-6xl mb-4 cell:text-3xl">{minutes}</p>
          <p className="text-xl uppercase cell:text-lg">minutos</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className=" text-6xl mb-4 cell:text-3xl">{seconds}</p>
          <p className="text-xl uppercase cell:text-lg">segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Contador;
