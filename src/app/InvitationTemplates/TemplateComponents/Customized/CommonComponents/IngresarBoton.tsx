"use client";
import React, { useState, useContext } from "react";
import { AudioPlayerContext } from "@/contexts/AudioContext";
import { StartAnimation } from "@/contexts/AnimationContext";
import { StylesContext } from "@/contexts/StylingContext";
import { NextFont } from "next/dist/compiled/@next/font";
import { colorPalette } from "@/types";

const IngresarBoton = ({
  novio,
  novia,
  join,
  font,
  color,
}: {
  novio: string;
  novia: string;
  font: NextFont;
  join: string;
  color: { titleColor: string; bgColor: string; textButtonColor: string };
}) => {
  const { setPlaying } = useContext(AudioPlayerContext);
  const [showModal, setShowModal] = useState(true);
  const { setAnimateNow } = useContext(StartAnimation);
  const { setAllowScroll } = useContext(StylesContext);
  const handleModalButtonClick = () => {
    setPlaying(true);
    setShowModal(false);
    // activar control de animaciones
    setAnimateNow(true);
    // permitir scroll al usuario
    setAllowScroll(true);
  };
  return (
    <>
      {showModal ? (
        <div className="  overflow-hidden  fixed z-[1000] w-full h-screen top-0 left-0 right-0 bottom-0 bg-slate-950/45 flex flex-col justify-center items-center ">
          <div className=" bg-zinc-50 w-[400px] h-[200px]  rounded-lg p-4 flex flex-col items-center justify-evenly  cell:w-10/12 cell:p-0   cell:h-[150px]">
            <h2
              className={`${font.className} ${color.titleColor} font-bold  text-center text-5xl py-1 cell:text-4xl cell:px-0 cell:font-black 
      `}
            >
              {novia} {join} {novio}
            </h2>
            <button
              onClick={handleModalButtonClick}
              className={`${color.bgColor}  shadow-md ${color.textButtonColor} text-2xl rounded-lg px-6 py-1 cell:text-lg cell:py-1 cell:px-3`}
            >
              Ingresar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default IngresarBoton;
