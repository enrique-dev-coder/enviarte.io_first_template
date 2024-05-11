"use client";
import React, { useState, useContext } from "react";
import { AudioPlayerContext } from "@/contexts/AudioContext";
import { StartAnimation } from "@/contexts/AnimationContext";
import { StylesContext } from "@/contexts/StylingContext";
import { themeColor } from "../Theme/Colors";
import { NextFont } from "next/dist/compiled/@next/font";
import { colorPalette } from "@/types";

const IngresarBoton = ({
  novio,
  novia,
  font,
  color,
}: {
  novio: string;
  novia: string;
  font: NextFont;
  color: colorPalette;
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
        <div className="  overflow-hidden  fixed z-[1000] w-full h-screen top-0 left-0 right-0 bottom-0  flex flex-col justify-center items-center ">
          <div className=" bg-zinc-50 w-[400px] h-[200px]  rounded-lg p-4 flex flex-col items-center justify-evenly  cell:w-10/12 cell:p-0   cell:h-[150px]">
            <h2
              className={`${font.className} ${themeColor[color].textDark} font-bold  text-center text-5xl py-1 cell:text-4xl cell:px-0 cell:font-black 
      `}
            >
              {novia} + {novio}
            </h2>
            <button
              onClick={handleModalButtonClick}
              className={`${themeColor[color].backgroundDark} shadow-md text-white text-2xl rounded-lg px-6 py-1 cell:text-lg cell:py-1 cell:px-3`}
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
