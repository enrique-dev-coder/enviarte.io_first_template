"use client";
import { useState } from "react";
import { dancing, analogist, lora } from "@/fonts";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NextFont } from "next/dist/compiled/@next/font";
import floralDivider from "/public/assets/images/floral/floral_divider_short-removebg-preview.png";
import Image from "next/image";

const MadrinasRamosCard = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ ease: "easeInOut", duration: 0.85 }}
      className="bg-white flex flex-col items-center gap-2 p-4 shadow-xl cell:w-[80%]"
    >
      <div className={`${analogist.className} text-center text-xl`}>
        <p>Monserrat Nieto Acosta</p>
        <Image src={floralDivider} alt="divider" className="w-[40%] mx-auto" />
        <p>Andrea Guadalupe Vega Méndez</p>
        <Image src={floralDivider} alt="divider" className="w-[40%] mx-auto" />

        <p>María Fernanda Ramírez Nieto</p>
        <Image src={floralDivider} alt="divider" className="w-[40%] mx-auto" />
      </div>
      <div className={`${lora.className} text-2xl`}>
        <p className={`text-[#014b66] text-2xl text-center uppercase`}>
          MADRINAS DE RAMO
        </p>
      </div>
    </motion.div>
  );
};

const PadrinoCard = ({
  madrina,
  padrino,
  tema,
  cardStyling,
  madrinasRamos,
}: {
  madrina: string;
  padrino: string;
  tema: string;
  cardStyling?: {
    titleFont: NextFont;
    titleColor: string;
  };
  madrinasRamos: boolean;
}) => {
  return (
    <>
      {madrinasRamos ? (
        <MadrinasRamosCard />
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ease: "easeInOut", duration: 0.85 }}
          className="bg-white flex flex-col items-center gap-2 p-4 shadow-xl cell:w-[80%]"
        >
          <div className={`${analogist.className} text-center text-xl`}>
            <p>{madrina}</p>
            <p className={`${!padrino && "hidden"}`}>&</p>
            <p>{padrino}</p>
          </div>
          <div
            className={`${
              cardStyling?.titleFont === undefined
                ? dancing.className
                : cardStyling?.titleFont.className
            } text-2xl`}
          >
            <p
              className={`${
                cardStyling?.titleColor === undefined
                  ? "text-black"
                  : cardStyling?.titleColor
              } text-2xl text-center uppercase`}
            >
              {tema}
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

const PadrinosDeBoda = ({
  showSlider,
  padrinos,
  cardStyling,
}: {
  showSlider: boolean;
  padrinos: {
    madrina: string;
    padrino: string;
    tema: string;
    madrinasRamos: boolean;
  }[];
  cardStyling?: {
    titleFont: NextFont;
    titleColor: string;
  };
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSliderClick = (position: "right" | "left") => {
    if (position === "right") {
      setCurrentIndex((prev) => (prev + 1) % padrinos.length);
    }
    if (position === "left") {
      setCurrentIndex((prev) => (prev - 1 + padrinos.length) % padrinos.length);
    }
  };

  return showSlider ? (
    <div className="my-2">
      {/* Desktop */}
      <div className="flex justify-center gap-10 cell:hidden">
        {padrinos.map((padrino, index) => (
          <PadrinoCard
            madrinasRamos={padrino.madrinasRamos}
            key={index}
            madrina={padrino.madrina}
            padrino={padrino.padrino}
            tema={padrino.tema}
          />
        ))}
      </div>
      {/* Mobile Slider */}
      <div className="hidden py-6 overflow-hidden  cell:flex justify-center items-center gap-2">
        <ChevronLeftCircleIcon onClick={() => onSliderClick("left")} />
        <AnimatePresence mode="wait">
          <PadrinoCard
            cardStyling={cardStyling}
            key={currentIndex}
            madrinasRamos={padrinos[currentIndex].madrinasRamos}
            madrina={padrinos[currentIndex].madrina}
            padrino={padrinos[currentIndex].padrino}
            tema={padrinos[currentIndex].tema}
          />
        </AnimatePresence>
        <ChevronRightCircleIcon onClick={() => onSliderClick("right")} />
      </div>
    </div>
  ) : null;
};

export default PadrinosDeBoda;
