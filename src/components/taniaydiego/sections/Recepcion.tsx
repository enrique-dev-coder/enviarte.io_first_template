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
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          Los Membrillos
        </p>
        <p className=" text-2xl cell:text-lg font-bold cell:px-2  ">
          20:30 horas{" "}
        </p>
        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-complementaryDark font-bold" />
          <p className=" text-xl text-center ">
            Calle 20 no. 1565 col. Lourdes,Frente al Club Campestre Lourdes{" "}
          </p>
        </div>
        <Button
          externalLink="https://www.google.com/maps/place/Los+Membrillos/@25.38672,-100.997807,15z/data=!4m6!3m5!1s0x868873213573dfd7:0x756e415418f6e049!8m2!3d25.38672!4d-100.997807!16s%2Fg%2F1hc2pp60r?entry=ttu"
          text="Cómo llegar"
        />
      </div>
    </section>
  );
};

export default Recepción;
