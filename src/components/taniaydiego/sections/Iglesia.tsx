"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { lora } from "@/fonts";
import Button from "../UI/Button";
import AnimatedTitle from "../UI/AnimatedTitle";

const Iglesia = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <AnimatedTitle
          extraStyles={`${lora.className} font-medium`}
          title="Ceremonia Religiosa"
        />
        <p className=" text-2xl cell:text-lg cell:px-2  ">
          Parroquia nuestra señora de la soledad{" "}
        </p>

        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-complementaryDark font-bold " />
          <p className=" text-xl text-center cell:text-lg ">
            Calle Girasol #190 Col.Girasol
          </p>
        </div>
        <Button
          externalLink="https://maps.app.goo.gl/CWrLRUxHn8nuKG1j8"
          text="Cómo llegar"
        />
      </div>
    </section>
  );
};

export default Iglesia;
