"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { lora } from "@/fonts";
import Button from "../UI/Button";
import AnimatedTitle from "../UI/AnimatedTitle";
const Recepción = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <AnimatedTitle
          title="Recepción"
          extraStyles={`${lora.className} font-medium`}
        />
        {/* <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          Quinta Veneto
        </p> */}
        <p className=" text-2xl cell:text-lg font-bold cell:px-2  ">
          20:30 horas{" "}
        </p>
        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-complementaryDark font-bold" />
          <p className=" text-xl text-center ">
            Calle 20 no. 1565 col. Lourdes,Frente al Club Campestre Lourdes{" "}
          </p>
        </div>
        {/* <Button
          externalLink="https://maps.app.goo.gl/v2skNKmZkmViXQeM9?g_st=iw"
          text="Cómo llegar"
        /> */}
      </div>
      {/*TODO: Preguntar si quieren foto de la iglesia, no lo veo necesario peor bueno  */}
    </section>
  );
};

export default Recepción;
