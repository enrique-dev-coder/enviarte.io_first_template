"use client";
import { useState } from "react";
import { dancing, sofia } from "@/fonts";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PadrinoCard = ({
  madrina,
  padrino,
  tema,
}: {
  madrina: string;
  padrino: string;
  tema: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ ease: "easeInOut", duration: 0.85 }}
      className="bg-white flex flex-col items-center gap-2 p-4 shadow-xl cell:w-[80%]"
    >
      <div className={`${sofia.className} text-center text-xl`}>
        <p>{madrina}</p>
        <p>&</p>
        <p>{padrino}</p>
      </div>
      <div className={`${dancing.className} text-2xl`}>
        <p>{tema}</p>
      </div>
    </motion.div>
  );
};

const MobileSlider = ({ slider }: { slider: number }) => {
  switch (slider) {
    case 1:
      return (
        <PadrinoCard
          madrina="Karina Gonzalez"
          padrino="Ricardo Nieto"
          tema="Padrinos de Velación"
        />
      );
    case 2:
      return (
        <PadrinoCard
          madrina="Martha Hernandez"
          padrino="Juventino Gonzalez"
          tema="Padrinos de Arras y lazo"
        />
      );
    case 3:
      return (
        <PadrinoCard
          madrina="Elida Galaviz"
          padrino="Victor Aguilar"
          tema="Padrinos de Argollas"
        />
      );
    default:
      return null;
  }
};

const PadrinosDeBoda = () => {
  const [slider, setSlider] = useState(1);

  const onSliderClick = (position: "right" | "left") => {
    if (position === "right") {
      if (slider > 2) {
        return setSlider(1);
      }
      setSlider(slider + 1);
    }
    if (position === "left") {
      if (slider < 2) {
        return setSlider(3);
      }
      setSlider(slider - 1);
    }
  };

  return (
    <div className="my-10">
      <h2
        className={`${dancing.className} text-center text-4xl font-bold my-5`}
      >
        Padrinos de Boda
      </h2>
      {/* Desktop */}
      <div className="flex justify-center gap-10 cell:hidden">
        <PadrinoCard
          madrina="Karina Gonzalez"
          padrino="Ricardo Nieto"
          tema="Padrinos de Velación"
        />
        <PadrinoCard
          madrina="Martha Hernandez"
          padrino="Juventino Gonzalez"
          tema="Padrinos de Arras y lazo"
        />
        <PadrinoCard
          madrina="Elida Galaviz"
          padrino="Victor Aguilar"
          tema="Padrinos de Argollas"
        />
      </div>
      {/* Mobile Slider */}
      <div className="hidden cell:flex justify-center items-center gap-2">
        <ChevronLeftCircleIcon onClick={() => onSliderClick("left")} />
        <AnimatePresence mode="wait">
          <MobileSlider key={slider} slider={slider} />
        </AnimatePresence>
        <ChevronRightCircleIcon onClick={() => onSliderClick("right")} />
      </div>
    </div>
  );
};

export default PadrinosDeBoda;
