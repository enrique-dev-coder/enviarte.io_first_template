"use client";
import React from "react";
import AnimatedTitle from "../UI/AnimatedTitle";
import { lora } from "@/fonts";

interface ActividadProps {
  hora: string;
  descripcion: string;
  position: "up" | "down";
  left: string;
}
const Actividad = ({ hora, descripcion, position, left }: ActividadProps) => {
  return (
    <>
      <div
        className={`absolute ${
          position === "down" ? "top-[92px]" : "top-[35px]"
        } ${left} flex flex-col justify-center items-center cell:relative cell:hidden`}
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
      {/*cell view*/}
      <div
        className={`justify-center relative z-50 items-center hidden w-[150px] cell:flex  py-4
        ${position === "down" ? "translate-x-[67px]" : "-translate-x-[67px]"}
        `}
      >
        {position === "down" && (
          <>
            <div className="w-4 h-4 rounded-full bg-complementaryDark " />
            <div
              className={`
           flex flex-col justify-center items-center text-lg font-medium flex-1 text-nowrap z-10
        `}
            >
              <p>{hora}</p>
              <p>{descripcion}</p>
            </div>
          </>
        )}
        {position === "up" && (
          <>
            <div
              className={`
           flex flex-col justify-center items-center text-lg font-medium flex-1 text-nowrap
        `}
            >
              <p>{hora}</p>
              <p>{descripcion}</p>
            </div>
            <div className="w-4 h-4 rounded-full bg-complementaryDark " />
          </>
        )}
      </div>
    </>
  );
};

const Itinerario = () => {
  return (
    <section>
      <AnimatedTitle
        title="Itinerario"
        extraStyles={`${lora.className} font-medium`}
      />

      <div className=" relative w-[60%] my-2 mx-auto h-[200px] flex items-center cell:flex-col  cell:w-full cell:h-auto cell:my-4">
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

        <div className=" w-full h-[2px] bg-black  rounded-full cell:hidden" />
        <div className="hidden cell:block h-[450px] z-0 absolute w-[2px] bg-black translate-y-10" />
      </div>
    </section>
  );
};

export default Itinerario;
