"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import SongButtonPlayer2 from "@/app/InvitationTemplates/Common/SongButtonPlayer2";

import { ClassicDolly, ModernDolly, RetroDolly, paris } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const invitationbg = "bg-[#F9E6ED]";
const color1 = "text-[#d83a85]";
const color2 = "text-[#fe9dc8]";
import BolaDisco from "/public/assets/images/anabell/boladisco-removebg-preview.png";
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
      <div
        className={`${invitationbg}  h-screen flex flex-col justify-center items-center overflow-hidden relative`}
      >
        {/* Superior derecha */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: [0, 1.2, 1], // 👈 clave del pulso
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="absolute top-[-120px] right-[-106px] z-0"
        >
          <Image alt="disco" src={BolaDisco} />
        </motion.div>
        {/* Superior izquierda */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: [0, 1.2, 1], // 👈 clave del pulso
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="absolute top-[22px] left-[12px] z-0 w-16"
        >
          <Image alt="disco" src={BolaDisco} />
        </motion.div>
        {/* Inferior Izquierda */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: [0, 1.2, 1], // 👈 clave del pulso
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="absolute bottom-[-120px] left-[-106px] z-0"
        >
          <Image alt="disco" src={BolaDisco} />
        </motion.div>
        {/* Inferior izquierda 2*/}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: [0, 1.2, 1], // 👈 clave del pulso
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="absolute bottom-[50px] left-[104px] z-0 w-[88px]"
        >
          <Image alt="disco" src={BolaDisco} />
        </motion.div>
        <div className="relative z-10">
          <div className={` py-6 `}>
            <Title />
          </div>
          <div>
            <Datos />
          </div>
        </div>
      </div>

      {/* <SongButtonPlayer2 backgroundColor="bg-[#d83a85]" /> */}
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
        <p className={`${RetroDolly.className} ${color1} text-center text-3xl`}>
          Estas invitado a mi fiesta!
        </p>
      </div>
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
