"use client";
import React from "react";
import { MapPin } from "lucide-react";
import Button from "../UI/Button";
import AnimatedTitle from "../UI/AnimatedTitle";

const Iglesia = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <AnimatedTitle title="Ceremonia Religiosa" />

        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold ">
          Iglesia San José de los Cerritos{" "}
        </p>
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          17:00 hrs
        </p>
        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-complementaryDark font-bold " />
          <p className=" text-xl text-center cell:text-base ">
            25019, Cam. Real SN-C DEPOSITO H.GOMEZ, San José de los Cerritos,
            Saltillo, Coah.
          </p>
        </div>
        <Button
          externalLink="https://maps.app.goo.gl/jjf2tmv5mme1ZreR8?g_st=iw"
          text="Cómo llegar"
        />
      </div>
      {/*TODO: Preguntar si quieren foto de la iglesia, no lo veo necesario peor bueno  */}

      {/* <div className="flex justify-end">
          <Image alt="iglesia" src={iglesia} className="w-[70%]" />
        </div> */}
    </section>
  );
};

export default Iglesia;
