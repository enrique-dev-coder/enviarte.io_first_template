"use client";
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AudioPlayerContext } from "@/contexts/AudioContext";
import { StartAnimation } from "@/contexts/AnimationContext";
import { StylesContext } from "@/contexts/StylingContext";
import { NextFont } from "next/dist/compiled/@next/font";
import { colorPalette } from "@/types";
// Sobre
import Image from "next/image";
import sobreIzq from "/public/assets/images/sobres/sobre_Izq.png";
import sobreDer from "/public/assets/images/sobres/sobrederecha.png";
import Sello from "/public/assets/images/sobres/selloFer.png";

const IngresarBoton = ({
  novio,
  novia,
  join,
  font,
  color,
  buttonText,
  extraClases = "",
  bgCuadrito = "bg-zinc-50",
  showSobre = false,
}: {
  novio: string;
  novia: string;
  font: NextFont;
  join: string;
  buttonText: string;
  color: {
    titleColor: string;
    bgColor: string;
    textButtonColor: string;
    borderColor?: string | undefined;
  };
  showSobre?: boolean;
  extraClases?: string | undefined;
  bgCuadrito?: string;
}) => {
  const { setPlaying } = useContext(AudioPlayerContext);
  const [showModal, setShowModal] = useState(true);
  const { setAnimateNow } = useContext(StartAnimation);
  const { setAllowScroll } = useContext(StylesContext);
  const [showSobreContent, setShowSobreContent] = useState(showSobre);
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleModalButtonClick = () => {
    setPlaying(true);
    setAnimationStarted(true);

    // Iniciar la secuencia de animaciones
    setTimeout(() => {
      setShowModal(false);
      setAnimateNow(true);
      setAllowScroll(true);

      // Ocultar todo después de que terminen las animaciones
      setTimeout(() => {
        setShowSobreContent(false);
      }, 1000);
    }, 500); // Pequeño retardo para que se complete la animación del pulso
  };

  return (
    <>
      <AnimatePresence>
        {showSobreContent ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            className="overflow-hidden fixed z-[1000] w-full h-screen top-0 left-0 right-0 bottom-0 bg-[#eae3d5] flex flex-col justify-center items-center"
          >
            {/* Sobre izquierdo - animación de salida solo al hacer click */}
            <motion.div
              initial={{ x: 0 }}
              animate={animationStarted ? { x: "-100%" } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute"
            >
              <Image alt="sobre" src={sobreIzq} />
            </motion.div>

            {/* Sobre derecho - animación de salida solo al hacer click */}
            <motion.div
              initial={{ x: "88px" }}
              animate={animationStarted ? { x: "100vw" } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute w-[66%]"
            >
              <Image alt="sobre2" src={sobreDer} />
            </motion.div>

            {/* Contenido central con sello animado */}
            <div className="w-full h-full flex flex-col justify-center items-center relative">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className="relative z-[10001] w-[36%] -translate-x-[16px]"
                onClick={handleModalButtonClick}
                style={{ cursor: "pointer" }}
              >
                <Image src={Sello} alt="sello carta" />
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-8 left-[30%] transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                >
                  ¡Toca Aquí!
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <>
            {showModal ? (
              <div
                className={`overflow-hidden fixed z-[1000] w-full h-screen top-0 left-0 right-0 bottom-0 bg-slate-950/45 flex flex-col justify-center items-center ${extraClases}`}
              >
                <div
                  className={`${bgCuadrito} w-[400px] h-[200px] rounded-lg p-4 flex flex-col items-center justify-evenly cell:w-10/12 cell:p-0 cell:h-[150px]`}
                >
                  <h2
                    className={`${font.className} ${color.titleColor} font-bold text-center text-5xl py-1 cell:text-4xl cell:px-0 cell:font-black`}
                  >
                    {novia} {join} {novio}
                  </h2>
                  <button
                    onClick={handleModalButtonClick}
                    className={`${color.bgColor} shadow-md ${
                      color.textButtonColor
                    } ${
                      color.borderColor && `border-2 ${color.borderColor}`
                    } text-2xl rounded-lg px-6 py-1 cell:text-lg cell:py-1 cell:px-3`}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            ) : null}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default IngresarBoton;
