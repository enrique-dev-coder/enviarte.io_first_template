"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChurchIcon, PartyPopperIcon, UtensilsCrossedIcon } from "lucide-react";

function Item({
  Icon,
  position,
  actividad,
  hora,
  lugar,
}: {
  Icon: any;
  position: "right" | "left";
  actividad: string;
  hora: string;
  lugar: string;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  if (position === "right") {
    return (
      <div className="flex justify-center items-center  cell:ml-[0%] cell:gap-5 ml-[-82%] h-[200px] gap-10">
        <div
          className="w-[250px] cell:w-full cell:mr-0 cell:order-2   px-4 py-2 relative rounded-md shadow-md  bg-yellow-100 cell:h-auto h-[100px]
        cell:py-1 
        "
        >
          <div className=" absolute h-5 w-5 cell:right-[94%] right-[-3%] top-[40%] bg-yellow-100 rotate-45 z-0 "></div>
          <p className=" text-neutral-900   font-bold text-lg  cell:text-base">
            {actividad}
          </p>
          <p className="text-neutral-800   font-medium cell:text-sm">
            {hora} horas
          </p>
          <p className="text-neutral-8  00   font-medium cell:text-sm ">
            {lugar}
          </p>
        </div>
        <section className="relative">
          <section className="absolute z-50 top-[-19px] right-[-19px]">
            <div ref={ref}>
              <figure className="progress">
                <svg
                  id="progress"
                  width="108"
                  height="108"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className=" stroke-yellow-50"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className=" stroke-complementaryDark"
                    style={{ pathLength: scrollYProgress }}
                  />
                </svg>
              </figure>
            </div>
          </section>
          <div>
            <div className="w-[70px] shadow-sm flex justify-center items-center h-[70px]  bg-yellow-50  z-30  rounded-full">
              <div className="w-[61px] h-[61px] bg-yellow-50  z-30  rounded-full flex justify-center items-center  text-complementaryDark">
                {Icon}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center cell:mr-0 cell:cell:ml-[0%] mr-[-80%] h-[200px] cell:gap-4 gap-10">
        <section className="relative">
          <section className="absolute z-50 top-[-19px] right-[-19px]">
            <div ref={ref}>
              <figure className="progress">
                <svg
                  id="progress"
                  width="108"
                  height="108"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className=" stroke-yellow-50"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className=" stroke-complementaryDark"
                    style={{ pathLength: scrollYProgress }}
                  />
                </svg>
              </figure>
            </div>
          </section>
          <div>
            <div className="w-[70px] shadow-sm flex justify-center items-center h-[70px]  bg-yellow-50  z-30  rounded-full">
              <div className="w-[61px] h-[61px] bg-yellow-50  z-30  rounded-full flex justify-center items-center  text-complementaryDark">
                {Icon}
              </div>
            </div>
          </div>
        </section>
        <div className="w-[250px] cell:w-full   px-4 py-2 relative rounded-md shadow-md  bg-yellow-100 cell:h-auto h-[100px]">
          <div className=" absolute h-5 w-5 left-[-3%] top-[40%] bg-yellow-100 rotate-45 z-0 "></div>
          <p className=" text-neutral-900   font-bold text-lg cell:text-base ">
            {actividad}
          </p>
          <p className="text-neutral-800   font-medium cell:text-sm">
            {hora} horas
          </p>
          <p className="text-neutral-800   font-medium  cell:text-sm">
            {lugar}
          </p>
        </div>
      </div>
    );
  }
}

const ItinerarioUpdated = () => {
  // div scrolleable
  const ItinerarioRef = useRef(null);
  const itemRef = useRef(null);

  const { scrollYProgress } = useScroll({
    offset: ["start center", "center start"],
    target: ItinerarioRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 0.9]);

  return (
    <div
      ref={ItinerarioRef}
      className="w-full  mt-10  relative  overflow-hidden  flex  gap-2 items-center justify-center"
    >
      {/* <div className="w-[4px] h-[200vh] bg-red-500"></div> */}
      <motion.div
        // scale line while scrolling
        style={{ scaleY: scale }}
        className="absolute  w-[8px] top-[0] right-[50%]  cell:right-[80%]
         z-10  h-full  origin-top  bg-complementaryDark"
      />
      <motion.div
        // scale line while scrolling
        className="absolute  w-[8px] top-[0] right-[50%] z-0  h-[90%]  origin-top  bg-yellow-50 my-4 shadow-md
        cell:right-[80%]  "
      />
      <div ref={itemRef} className="flex flex-col z-10 pt-3">
        <Item
          position="right"
          Icon={<ChurchIcon size={36} />}
          actividad="⛪️ Ceremonia"
          hora="16:00"
          lugar="Templo san juan"
        />
        <Item
          position="left"
          Icon={<ChurchIcon size={36} />}
          actividad="🤵👰 Civil"
          hora="19:00"
          lugar="Hacienda Herencia Allende"
        />
        <Item
          position="right"
          Icon={<PartyPopperIcon size={36} />}
          actividad="🥂 Recepción"
          hora="20:00"
          lugar="Hacienda Herencia Allende"
        />
        <Item
          position="left"
          Icon={<UtensilsCrossedIcon size={36} />}
          actividad="🍽️ Cena"
          hora="21:30"
          lugar="Hacienda Herencia Allende"
        />
        <Item
          position="right"
          Icon={<PartyPopperIcon size={36} />}
          actividad="🥳 A bailar!"
          hora="22:00"
          lugar="Hacienda Herencia Allende"
        />
      </div>
    </div>
  );
};

export default ItinerarioUpdated;
