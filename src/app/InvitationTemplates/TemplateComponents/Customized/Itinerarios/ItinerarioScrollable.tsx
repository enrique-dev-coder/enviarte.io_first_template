"use client";
import { useRef } from "react";
import { dancing } from "@/fonts";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { DanceIcon, RecepcionIcon } from "../../CustomIcons";
import { ChurchIcon, PartyPopperIcon, UtensilsCrossedIcon } from "lucide-react";
import { EventoItinerario } from "../types";
import CivilImg from "/public/assets/images/couple.png";
import Coctel from "/public/assets/images/champagne-glass.png";
import Flowers from "/public/assets/images/bouquet.png";
import Regalo from "/public/assets/images/gift.png";
import cake from "/public/assets/images/cake.png";

const CivilIcon = () => <Image src={CivilImg} alt="boda" width={36} />;
const CoctelIcon = () => <Image src={Coctel} alt="boda" width={36} />;
const FlowersIcon = () => <Image src={Flowers} alt="boda" width={36} />;
const RegaloIcon = () => <Image src={Regalo} alt="boda" width={36} />;
const CakeIcon = () => <Image src={cake} alt="pastel" width={36} />;
const Icons = {
  church: <ChurchIcon size={36} />,
  party: <PartyPopperIcon size={36} />,
  dinner: <UtensilsCrossedIcon size={36} />,
  dance: <DanceIcon />,
  recepcion: <RecepcionIcon />,
  civil: <CivilIcon />,
  coctel: <CoctelIcon />,
  flores: <FlowersIcon />,
  regalo: <RegaloIcon />,
  cake: <CakeIcon />,
};
// Tipado explícito para las claves del objeto Icons
type IconKey = keyof typeof Icons;

function Item({
  Icon,
  position,
  actividad,
  hora,
  lugar,
  circleColor,
  iconColor,
  circleBg,
  circleSoftStroke,
  cardBg,
}: {
  Icon: any;
  position: "right" | "left";
  actividad: string;
  hora: string;
  lugar?: string;
  circleColor: string | undefined;
  iconColor: string | undefined;
  circleBg: string | undefined;
  circleSoftStroke: string | undefined;
  cardBg: string | undefined;
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
          className={`
            w-[250px] cell:w-[184px] cell:mr-0 cell:order-2 px-4 py-2 relative rounded-md shadow-md 
            ${cardBg} 
            cell:h-auto h-[100px]
            cell:py-1 
          `}
        >
          <div
            className={`
          absolute h-5 w-5 cell:right-[94%] right-[-3%] top-[40%] 
          ${cardBg}
          rotate-45 z-0 
          `}
          ></div>
          <p className=" text-neutral-900 whitespace-pre-line  font-bold text-lg  cell:text-base">
            {actividad}
          </p>
          <p className="text-neutral-800   font-medium cell:text-sm">{hora}</p>
          <p className="text-neutral-8  00   font-medium cell:text-sm ">
            {lugar}
          </p>
        </div>
        <section className="relative">
          <section className="absolute z-50 top-[-19px] right-[-5px]">
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
                    className={circleSoftStroke}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className={circleColor}
                    style={{ pathLength: scrollYProgress }}
                  />
                </svg>
              </figure>
            </div>
          </section>
          <div>
            <div
              className={`${circleBg}
            w-[70px]  flex justify-center items-center h-[70px]  z-30  rounded-full
            `}
            >
              <div
                className={`w-[61px] h-[61px] ${circleBg}  translate-x-[-15px] z-30  rounded-full flex justify-center items-center  ${iconColor}`}
              >
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
          <section className="absolute z-50 top-[-19px] right-[-5px]">
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
                    className={circleSoftStroke}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className={circleColor}
                    style={{ pathLength: scrollYProgress }}
                  />
                </svg>
              </figure>
            </div>
          </section>
          <div>
            <div
              className={`${circleBg}
                w-[70px] shadow-sm flex justify-center items-center h-[70px]  translate-x-[-15px] z-30  rounded-full
            `}
            >
              <div>{Icon}</div>
            </div>
          </div>
        </section>
        <div
          className={`
          w-[250px] cell:w-full cell:mr-0 cell:order-2 px-4 py-2 relative rounded-md shadow-md 
          ${cardBg} 
          cell:h-auto h-[100px]
          cell:py-1 
        `}
        >
          <div
            className={`absolute h-5 w-5 left-[-3%] top-[40%] ${cardBg} rotate-45 z-0`}
          ></div>
          <p className=" text-neutral-900 whitespace-pre-line  font-bold text-lg cell:text-base ">
            {actividad}
          </p>
          <p className="text-neutral-800   font-medium cell:text-sm">{hora}</p>
          <p className="text-neutral-800   font-medium  cell:text-sm">
            {lugar}
          </p>
        </div>
      </div>
    );
  }
}

const ItinerarioScrollable = ({
  sectionStyling,
  eventData,
  showItinerario,
}: {
  showItinerario: boolean;
  sectionStyling:
    | {
        lineColor: string;
        lineBg: string;
        circleColor: string;
        iconColor: string;
        circleBg: string;
        circleSoftStroke: string;
        cardBg: string;
      }
    | undefined;
  eventData: Array<EventoItinerario> | undefined;
}) => {
  // div scrolleable
  const ItinerarioRef = useRef(null);
  const itemRef = useRef(null);

  const { scrollYProgress } = useScroll({
    offset: ["start center", "center start"],
    target: ItinerarioRef,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 0.9]);

  return showItinerario ? (
    <>
      {/* <motion.h2
        className={` ${dancing.className} 
      text-black font-bold  text-center text-4xl py-1 
      cell:text-3xl cell:px-4`}
      >
        Itinerario
      </motion.h2> */}
      <div
        ref={ItinerarioRef}
        className="max-w-[375px] mx-auto mt-10  relative  overflow-hidden  flex  gap-2 items-center justify-center"
      >
        {/* <div className="w-[4px] h-[200vh] bg-red-500"></div> */}
        <motion.div
          // scale line while scrolling
          style={{ scaleY: scale }}
          className={`absolute  w-[8px] top-[0] right-[50%]  cell:right-[80%]
         z-10  h-full  origin-top  ${sectionStyling?.lineColor}`}
        />
        <motion.div
          // scale line while scrolling
          className={`
            absolute  w-[8px] top-[0] right-[50%] z-0  h-[90%]  origin-top  ${sectionStyling?.lineBg} my-4 shadow-md
            cell:right-[80%]`}
        />
        <div ref={itemRef} className="flex flex-col z-10 pt-3">
          {eventData?.map((event) => (
            <Item
              key={event.id}
              position={event.id % 2 === 0 ? "right" : "left"}
              Icon={Icons[event.Icon as IconKey]}
              cardBg={sectionStyling?.cardBg}
              actividad={event.evento}
              hora={event.hora}
              circleColor={sectionStyling?.circleColor}
              iconColor={sectionStyling?.iconColor}
              circleBg={sectionStyling?.circleBg}
              circleSoftStroke={sectionStyling?.circleSoftStroke}
            />
          ))}
        </div>
      </div>
    </>
  ) : null;
};

export default ItinerarioScrollable;
