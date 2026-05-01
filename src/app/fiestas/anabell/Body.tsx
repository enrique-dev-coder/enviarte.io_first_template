"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import SongButtonPlayer2 from "@/app/InvitationTemplates/Common/SongButtonPlayer2";

import { ClassicDolly, ModernDolly, RetroDolly, paris } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contador from "./Contador";
import { MapPin } from "lucide-react";

const textOlive = "text-[#7A553A]";
const invitationbg = "bg-[#fdeaf2]";
const bgOlive = "bg-[#6b705c]";
const color1 = "text-[#d83a85]";
const color2 = "text-[#fe9dc8]";
const thirdColor = "text-[#6b705c]";
const extraBg = "bg-[#f2ebe2]";

const Body = ({
  nombre,
  tel,
  pasesAsignados,
  invitationIdForQuery,
}: {
  nombre: string;
  tel: string;
  pasesAsignados: string;
  invitationIdForQuery: { id: string };
}) => {
  return (
    <InvitationContainer
      spBackground="none"
      songLink="/assets/songs/anabell.mp3"
    >
      {/* <IngresarBoton
        buttonText="Ingresar"
        bgCuadrito="bg-white"
        extraClases=" !mt-[16px] !bg-transparent "
        font={paris}
        novia="Guadalupe"
        novio="Alejandro"
        join="y"
        color={{
          bgColor: "bg-[#6b705c]",
          titleColor: thirdColor,
          textButtonColor: "text-white",
        }}
        showSobre={true}
      /> */}
      <div className={`${invitationbg}  h-screen `}>
        <div className={` py-6 `}>
          <Title />
        </div>
        <div>
          <Datos />
        </div>
      </div>

      <SongButtonPlayer2 backgroundColor="bg-[#d83a85]" />
    </InvitationContainer>
  );
};

export default Body;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // 👈 aquí se logra el efecto escalonado
    },
  },
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const Title = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.p
        variants={item}
        className={`${RetroDolly.className} text-3xl italic ${color1} `}
      >
        this
      </motion.p>

      <motion.p
        variants={item}
        className={`${RetroDolly.className} 
    text-[88px] 
    font-black 
    italic 
    ${color2}
    tracking-[0px] 
    leading-[78px]
    `}
        style={{ textShadow: "4px 4px 0px #d83a85" }}
      >
        Barbie
      </motion.p>
      <motion.p
        variants={item}
        className={`${RetroDolly.className} text-3xl italic ${color1}`}
      >
        is turning
      </motion.p>

      <motion.p
        variants={item}
        className={`${RetroDolly.className} 
    text-[88px] 
    font-black 
    italic 
    ${color2}
    tracking-[0px] 
    leading-[78px]
    `}
        style={{ textShadow: "4px 4px 0px #d83a85" }}
      >
        29
      </motion.p>
    </motion.div>
  );
};

const Datos = () => {
  return (
    <>
      <div className="py-2">
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-3xl  underline`}
        >
          Dress Code: Pink
        </p>
      </div>
      <div className="py-2">
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-2xl `}
        >
          Fecha:
        </p>{" "}
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-2xl `}
        >
          Viernes 29 de Mayo <br /> 8:00 pm a 1:00 am
        </p>{" "}
      </div>
      <div className="py-2">
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-2xl `}
        >
          Lugar:
        </p>{" "}
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-2xl `}
        >
          Jardines Eventos
        </p>{" "}
        <div className="px-10 py-2 flex justify-center">
          <a href="https://maps.app.goo.gl/hEuSbe5J7m1Lpqb56">
            <button
              className={`bg-[#d83a85] flex justify-center px-10 text-center text-white font-medium text-xl py-2 rounded-lg ${ClassicDolly.className}`}
            >
              <MapPin />
              Como llegar
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
