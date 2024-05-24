import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { lora } from "@/fonts";

const Padres = () => {
  return (
    <div className="h-[250px] flex flex-col items-center justify-center cell:h-auto">
      <AnimatedTitle
        extraStyles={`${lora.className} font-medium`}
        title="Con la bendición de nuestros padres:"
      />
      <div className="flex justify-evenly py-4 gap-4 w-1/2 mx-auto cell:w-full cell:px-4 cell:flex-col cell:items-center ">
        <div className="flex flex-col gap-1 text-3xl cell:text-2xl cell:text-center">
          <p>Enrique Poblano Casas</p>
          <p>Sandra Cedillo De Labra</p>
        </div>
        <div className="w-[2px]  bg-complementaryDark h-full cell:h-[1px] cell:w-[80%]" />
        <div className="flex flex-col gap-1 text-3xl cell:text-2xl cell:text-center">
          <p>Vicenta Lopez Martel</p>
          <p>Eustolio Agundis Alfaro</p>
        </div>
      </div>
    </div>
  );
};

export default Padres;
