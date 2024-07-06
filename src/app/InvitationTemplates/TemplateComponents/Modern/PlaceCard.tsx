import React from "react";
import AnimatedTitle from "@/components/UI/AnimatedTitle";
import { MapPin } from "lucide-react";
import Button from "@/components/UI/Button";
import { NextFont } from "next/dist/compiled/@next/font";

const PlaceCard = ({
  desc,
  nombre,
  ubicacion,
  direccion,
  hora,
}: {
  desc: string;
  nombre: {
    content: string;
    font: NextFont;
  };
  ubicacion: string;
  direccion: string;
  hora: string;
}) => {
  return (
    <section className="py-6">
      <div
        className="flex flex-col gap-2 justify-center items-center bg-white w-[45%] py-6 shadow-lg mx-auto 
      cell:w-full
      "
      >
        <AnimatedTitle extraStyles={` text-4xl !text-black`} title={desc} />
        <p
          className={`
          ${nombre.font.className}
           text-2xl cell:text-xl cell:px-2 cell:font-bold  font-bold 
          `}
        >
          {nombre.content}
        </p>
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          {hora}
        </p>
        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-black font-bold " />
          <p className=" text-xl text-center cell:text-base ">{direccion}</p>
        </div>
        <a href={ubicacion}>
          <button className="bg-black text-white py-2 px-4 rounded-full">
            Cómo llegar
          </button>
        </a>
      </div>
    </section>
  );
};

export default PlaceCard;
