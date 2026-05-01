"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import { ClassicDolly, RetroDolly } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer2";

const invitationbg = "bg-[#F9E6ED]";
const color1 = "text-[#d83a85]";
const color2 = "text-[#fe9dc8]";

import BolaDisco from "/public/assets/images/anabell/boladisco-removebg-preview.png";

//////////////////////////////////////////////////////////
// 🔥 ANIMACIONES
//////////////////////////////////////////////////////////

// 🔥 Controla TODO (decoraciones → title → datos)
const mainContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.2,
    },
  },
};

// 🪩 Decoraciones
const decoContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const decoItem = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: [0, 1.3, 0.95, 1],
    rotate: [-10, 5, 0],
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// 🎀 Contenido interno
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: [0, 1.1, 1],
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

//////////////////////////////////////////////////////////
// 🎀 BODY
//////////////////////////////////////////////////////////

const Body = () => {
  return (
    <InvitationContainer
      spBackground="none"
      songLink="/assets/songs/anabellcut.mp3"
    >
      <div
        className={`${invitationbg} h-screen flex flex-col justify-center items-center overflow-hidden relative`}
      >
        {/* 🔥 CONTENEDOR GLOBAL */}
        <motion.div
          variants={mainContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          {/* 🪩 DECORACIONES (PRIMERO) */}
          <motion.div variants={decoContainer}>
            {[
              "top-[-120px] right-[-106px]",
              "top-[22px] left-[12px] w-16",
              "bottom-[-120px] left-[-106px]",
              "bottom-[50px] left-[104px] w-[88px]",
            ].map((pos, i) => (
              <motion.div
                key={i}
                variants={decoItem}
                className={`absolute ${pos} z-0`}
              >
                <Image alt="disco" src={BolaDisco} />
              </motion.div>
            ))}
          </motion.div>

          {/* 🎀 CONTENIDO */}
          <motion.div className="relative z-10 flex flex-col items-center justify-center h-full">
            {/* TITLE */}
            <motion.div variants={item} className="py-8">
              <Title />
            </motion.div>

            {/* DATOS */}
            <motion.div variants={item}>
              <Datos />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <SongButtonPlayer backgroundColor={"bg-[#d83a85]"} />
    </InvitationContainer>
  );
};

export default Body;

//////////////////////////////////////////////////////////
// 🎀 TITLE
//////////////////////////////////////////////////////////

const Title = () => {
  return (
    <motion.div variants={container} className="text-center">
      <motion.p
        variants={item}
        className={`${RetroDolly.className} text-3xl italic ${color1}`}
      >
        this
      </motion.p>

      <motion.p
        variants={item}
        className={`${RetroDolly.className} text-[88px] font-black italic ${color2}`}
        style={{ textShadow: "4px 4px 0px #d83a85", lineHeight: "60px" }}
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
        className={`${RetroDolly.className} text-[88px] font-black italic ${color2}`}
        style={{ textShadow: "4px 4px 0px #d83a85", lineHeight: "60px" }}
      >
        29
      </motion.p>
    </motion.div>
  );
};

//////////////////////////////////////////////////////////
// 📍 DATOS
//////////////////////////////////////////////////////////

const Datos = () => {
  return (
    <motion.div variants={container}>
      <motion.div
        variants={item}
        className={`${RetroDolly.className} text-4xl text-center font-black italic ${color1}`}
      >
        Estas invitado a mi fiesta!
      </motion.div>

      <motion.div variants={item} className="py-2">
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-3xl underline`}
        >
          Dress Code: Pink
        </p>
      </motion.div>

      <motion.div variants={item} className="py-2">
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-2xl`}
        >
          Fecha:
        </p>
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-2xl`}
        >
          Viernes 29 de Mayo <br /> 8:00 pm a 1:00 am
        </p>
      </motion.div>

      <motion.div variants={item} className="py-2">
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-2xl`}
        >
          Lugar:
        </p>
        <p
          className={`${ClassicDolly.className} ${color1} text-center text-2xl`}
        >
          Jardines Eventos
        </p>

        <div className="px-10 py-2 flex justify-center">
          <a href="https://maps.app.goo.gl/1Jb4X25FrfR2jb947">
            <button
              className={`bg-[#d83a85] flex justify-center px-10 text-white text-xl py-2 rounded-lg ${ClassicDolly.className}`}
            >
              <MapPin />
              Como llegar
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
