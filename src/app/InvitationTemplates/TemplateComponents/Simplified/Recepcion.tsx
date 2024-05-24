"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { lora } from "@/fonts";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
const Recepción = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <AnimatedTitle
          title="Recepción"
          extraStyles={`${lora.className} font-medium`}
        />
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          Quinta Sara Martha
        </p>
        <p className=" text-2xl cell:text-lg font-bold cell:px-2  ">8:00 pm </p>
        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-complementaryDark font-bold" />
          <p className=" text-xl text-center ">
            Calle Presa de las casas # 300 Loma Alta Arteaga Coahuila{" "}
          </p>
        </div>
        <Button
          externalLink="https://maps.app.goo.gl/nwfEjxyfwTopANfh8"
          text="Cómo llegar"
        />
      </div>
    </section>
  );
};

export default Recepción;
