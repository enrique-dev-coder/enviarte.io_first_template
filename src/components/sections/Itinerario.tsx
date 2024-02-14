import React from "react";
import { dancing } from "@/fonts";
// 5:00 ceremonia ⛪️
// 7:00 civil
// 8:00 recepción
// 9:00 vals
// 9:30 cena
// 10:00 a bailar!

interface ActividadProps {
  hora: string;
  descripcion: string;
  position: "up" | "down";
  left: string;
}
const Actividad = ({ hora, descripcion, position, left }: ActividadProps) => {
  return (
    <div
      className={`absolute ${
        position === "down" ? "top-[92px]" : "top-[35px]"
      } ${left} flex flex-col justify-center items-center`}
    >
      <div
        className={`${position === "down" && " order-2"}
           flex flex-col justify-center items-center text-xl font-medium text-nowrap
        `}
      >
        <p>{hora}</p>
        <p>{descripcion}</p>
      </div>
      <div className="w-4 h-4 rounded-full bg-complementaryDark" />
    </div>
  );
};

const Itinerario = () => {
  return (
    <section className=" cell:hidden">
      <h3
        className={`${dancing.className} text-complementaryDark font-bold  text-center text-4xl py-1`}
      >
        Itinerario
      </h3>
      <div className=" relative w-[60%] my-2 mx-auto h-[200px] flex items-center">
        <Actividad
          hora="5:00 pm"
          descripcion="⛪️ Ceremonia"
          position="up"
          left=" left-[-60px]"
        />
        <Actividad
          hora="7:00 pm"
          descripcion="🤵👰 Civil"
          position="down"
          left="left-[100px]"
        />
        <Actividad
          hora="8:00 pm"
          descripcion="🥂 Recepción"
          position="up"
          left="left-[225px]"
        />
        <Actividad
          hora="9:00 pm"
          descripcion="🕺💃 Vals"
          position="down"
          left="left-[400px]"
        />
        <Actividad
          hora="9:30 pm"
          descripcion="🍽️ Cena"
          position="up"
          left="left-[550px]"
        />
        <Actividad
          hora="10:00 pm"
          descripcion="🥳 A bailar!"
          position="down"
          left="left-[710px]"
        />

        <div className=" w-full h-[2px] bg-black  rounded-full" />
      </div>
    </section>
  );
};

export default Itinerario;
