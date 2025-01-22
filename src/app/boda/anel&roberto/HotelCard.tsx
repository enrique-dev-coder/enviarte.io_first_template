import React from "react";
import Image from "next/image";
import hotel1 from "/public/assets/images/anelyroberto/hotel1.png";
import hotel2 from "/public/assets/images/anelyroberto/hotel2.png";
import hotel3 from "/public/assets/images/anelyroberto/hotel3.png";
import hotel4 from "/public/assets/images/anelyroberto/hotel4.png";
import hotel5 from "/public/assets/images/anelyroberto/hotel5.png";

import { motion } from "framer-motion";
import { lora } from "@/fonts";
import { MapPin } from "lucide-react";

const HotelCard = () => {
  return (
    <>
      <div className="my-6">
        <motion.h2
          className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-3xl py-4 `}
        >
          Hotel Colonial San Miguel
        </motion.h2>
        <div className="overflow-x-scroll ">
          <div className="w-[1200px] flex gap-2 ">
            <Image className="rounded-sm" alt="hotel" src={hotel1} />
            <Image className="rounded-sm" alt="hotel" src={hotel2} />
            <Image className="rounded-sm" alt="hotel" src={hotel3} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 my-4">
          <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
            <MapPin className=" text-[#014b66] font-bold " />
            <p className=" text-xl text-center cell:text-base ">
              Gral. Victoriano Cepeda Sur 410, Zona Centro, 25000 Saltillo,
              Coah.
            </p>
          </div>
          <a href="https://maps.app.goo.gl/hub6t7sgceMJ53wK6">
            <button
              className={`bg-[#014b66] text-white py-2 px-4 rounded-full`}
            >
              Cómo llegar
            </button>
          </a>
        </div>
      </div>
      <div className="my-6">
        <motion.h2
          className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-3xl py-4 `}
        >
          City Express by Marriott Saltillo Norte{" "}
        </motion.h2>
        <div className="overflow-x-scroll ">
          <div className="w-[800px] flex gap-2 ">
            <Image className="rounded-sm" alt="hotel" src={hotel4} />
            <Image className="rounded-sm" alt="hotel" src={hotel5} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 my-4">
          <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
            <MapPin className=" text-[#014b66] font-bold " />
            <p className=" text-xl text-center cell:text-base ">
              Periferico Luis Echeverria Alvarez. 1630. Col. Republica Norte,
              República, 25280 Saltillo, Coah.
            </p>
          </div>
          <a href="https://maps.app.goo.gl/bWuQxaJPgFKLTQSo9">
            <button
              className={`bg-[#014b66] text-white py-2 px-4 rounded-full`}
            >
              Cómo llegar
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
