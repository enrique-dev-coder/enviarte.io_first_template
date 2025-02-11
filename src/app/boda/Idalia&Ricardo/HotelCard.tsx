import React from "react";
// import Image from "next/image";
// import hotel1 from "/public/assets/images/idaliayricardo/hotel1.png";
// import hotel2 from "/public/assets/images/idaliayricardo/hotel2.png";
// import hotel3 from "/public/assets/images/idaliayricardo/hotel3.png";
// import hotel4 from "/public/assets/images/anelyroberto/hotel4.png";
// import hotel5 from "/public/assets/images/anelyroberto/hotel5.png";

import { motion } from "framer-motion";
import { champagne } from "@/fonts";
import { MapPin } from "lucide-react";

const HotelCard = () => {
  return (
    <>
      <div className="my-6">
        <motion.h2
          className={`${champagne.className} text-center text-[#808000] font-bold   text-5xl cell:text-3xl py-4 `}
        >
          Best Western Saltillo
        </motion.h2>
        {/* <div className="overflow-x-scroll ">
          <div className="w-[1200px] flex gap-2 ">
            <Image className="rounded-sm" alt="hotel" src={hotel1} />
            <Image className="rounded-sm" alt="hotel" src={hotel2} />
            <Image className="rounded-sm" alt="hotel" src={hotel3} />
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center gap-6 my-4">
          <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
            <MapPin className=" text-[#808000] font-bold " />
            <p className=" text-xl text-center cell:text-base ">
              La Fragua 2672, Guanajuato Oriente, 25286 Saltillo, Coah.
            </p>
          </div>
          <a href="https://maps.app.goo.gl/w5mTSSmSopYhRbZG9">
            <button
              className={`bg-[#808000] text-white py-2 px-4 rounded-full`}
            >
              Cómo llegar
            </button>
          </a>
        </div>
      </div>
      <div className="my-6">
        <motion.h2
          className={`${champagne.className} text-center text-[#808000] font-bold   text-5xl cell:text-3xl py-4 `}
        >
          Quinta Real Saltillo{" "}
        </motion.h2>
        {/* <div className="overflow-x-scroll ">
          <div className="w-[800px] flex gap-2 ">
            <Image className="rounded-sm" alt="hotel" src={hotel4} />
            <Image className="rounded-sm" alt="hotel" src={hotel5} />
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center gap-6 my-4">
          <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
            <MapPin className=" text-[#808000] font-bold " />
            <p className=" text-xl text-center cell:text-base ">
              José Sarmiento 1385, Rancho de Peña, 25210 Saltillo, Coah.
            </p>
          </div>
          <a href="https://maps.app.goo.gl/5C29ivXCUsuZfB2WA">
            <button
              className={`bg-[#808000] text-white py-2 px-4 rounded-full`}
            >
              Cómo llegar
            </button>
          </a>
        </div>
      </div>
      <div className="my-6">
        <motion.h2
          className={`${champagne.className} text-center text-[#808000] font-bold   text-5xl cell:text-3xl py-4 `}
        >
          Courtyard by Marriott Saltillo{" "}
        </motion.h2>
        {/* <div className="overflow-x-scroll ">
          <div className="w-[800px] flex gap-2 ">
            <Image className="rounded-sm" alt="hotel" src={hotel4} />
            <Image className="rounded-sm" alt="hotel" src={hotel5} />
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center gap-6 my-4">
          <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
            <MapPin className=" text-[#808000] font-bold " />
            <p className=" text-xl text-center cell:text-base ">
              Boulevard Galerías, Blvd. Parque Centro 375-1 Col, 25279 Saltillo,
              Coah.{" "}
            </p>
          </div>
          <a href="https://maps.app.goo.gl/MDNNYGi5f89xnFyf7">
            <button
              className={`bg-[#808000] text-white py-2 px-4 rounded-full`}
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
