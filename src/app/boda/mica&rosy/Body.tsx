"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import { lora, montse } from "@/fonts";
import imgCalle from "/public/assets/images/micayrosy/calle.jpg";
import imgPago1 from "/public/assets/images/micayrosy/pago1.jpeg";
import imgPago2 from "/public/assets/images/micayrosy/pago2.jpeg";
import imgPago3 from "/public/assets/images/micayrosy/pago3.jpeg";
import imgEscaleras1 from "/public/assets/images/micayrosy/Escaleras1.jpg";
import imgEscaleras2 from "/public/assets/images/micayrosy/escaleras2.jpg";
import imgAmorEterno from "/public/assets/images/micayrosy/amorEterno.jpg";
import imgFut from "/public/assets/images/micayrosy/Fut.jpg";
import whatsLogo from "/public/assets/images/micayrosy/whatslogo-removebg-preview.png";
import Hero from "./Hero";
import Image from "next/image";
import Contador from "@/app/InvitationTemplates/TemplateComponents/Modern/Contador";
import img1 from "/public/assets/images/micayrosy/introupdate.png";
import { motion } from "framer-motion";

const Body = () => {
  const invitationData = {
    IngresarBotonProps: {
      font: lora,
      novia: "Mica",
      novio: "Rosy",
      join: "&",
      color: {
        titleColor: "text-[#AB765A]",
        bgColor: "bg-[#AB765A]",
        textButtonColor: "text-white",
      },
    },
  };
  const { IngresarBotonProps } = invitationData;
  return (
    <InvitationContainer songLink="/assets/songs/micayrosy.m4a">
      <IngresarBoton
        buttonText="Ingresar"
        font={IngresarBotonProps.font}
        novia={IngresarBotonProps.novia}
        novio={IngresarBotonProps.novio}
        join={IngresarBotonProps.join}
        color={IngresarBotonProps.color}
      />
      <Hero />
      <div className=" w-full  py-8">
        {/*Intro*/}
        <div className="text-center mx-auto">
          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className="uppercase text-[#AB765A]  my-2 text-[40px]"
          >
            ¡Nos Casamos!
          </motion.p>
          <div className="text-[#AB765A] text-center text-[22px] px-4 py-6">
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className={`${montse.className}`}
            >
              &quot;El destino nos ha unido, y ahora queremos que tú formes
              parte de nuestra historia en un lugar mágico.&quot;
            </motion.p>
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className={`${montse.className}`}
            >
              ¡Nos encantaría contar con tu presencia, nuestra boda es en playa!
            </motion.p>
          </div>
        </div>
      </div>
      {/*Poner el contador, despues cuando haya mas tiempo??*/}
      <Contador
        fechaEvento={new Date("2026-05-16T00:00:00")}
        fechaString="16 Mayo 2026"
        color="goldPalette"
        fotoContador="bg-[url('/assets/images/micayrosy/anillo.jpg')]"
      />

      {/*Picture 1*/}
      {/*Mas Fotos*/}

      <div
        style={{
          backgroundImage: `url(${imgEscaleras1.src})`,
        }}
        className=" h-screen bg-cover bg-center  bg-no-repeat "
      ></div>

      {/* {Hoteles y precios} */}
      <div
        className={`${montse.className}  text-[#AB765A] text-center text-[28px] px-4 py-6`}
      >
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          PUERTO VALLARTA, JALISCO
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" font-bold text-[36px]"
        >
          15, 16 y 17
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" font-bold"
        >
          Mayo 2026
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          Hotel Krystal Grand Nuevo Vallarta
        </motion.p>
      </div>
      {/* Tarifas y plan de pagos*/}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image alt="boda" src={imgPago2} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image alt="boda" src={imgPago1} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image alt="boda" src={imgPago3} />
      </motion.div>
      {/*Reservar asistencia*/}
      <div
        className={`${montse.className}  text-[#AB765A] text-center text-[28px] px-4 py-6`}
      >
        <motion.p
          className="uppercase font-bold mb-2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          HABITACIONES TODO INCLUIDO
        </motion.p>
        <p className=" text-[22px]">
          Para <span className=" font-bold">RESERVAR TU ASISTENCIA</span> es
          necesario contactes nuestra agencia de viaje, aquí te dejamos el
          contacto
        </p>
        <motion.a
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          href="https://api.whatsapp.com/send?phone=5218441180895&text=Hola!%20Estoy%20interesado%20en%20la%20reservaci%C3%B3n%20para%20la%20boda%20de%20Mica%20y%20Rosy%20"
        >
          <div className="flex bg-[#AB765A] text-white items-center justify-around my-4 p-2 rounded-md text-[20px]">
            <Image alt="whats logo" src={whatsLogo} className="w-[20%]" />
            Whatssapp Alisson Viajes
          </div>
        </motion.a>
        <p className=" text-[24px]">
          Inicias tu contrato con el pago de tu primer mensualidad.
        </p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" font-bold"
        >
          FECHA LIMITE DE RESERVACIÓN{" "}
        </motion.p>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" font-bold underline"
        >
          30 DE MARZO 2025
        </motion.p>
      </div>
      {/*Mas fotos*/}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image alt="boda" src={img1} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image alt="boda" src={imgEscaleras2} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image alt="boda" src={imgEscaleras1} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image alt="boda" src={imgAmorEterno} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image alt="boda" src={imgCalle} />
      </motion.div>
      {/*Final*/}
      <div className="bg-stone-50 text-[#AB765A] text-center text-[28px] px-4 py-6">
        <p>Nos encantará,</p>
        <p>contar con tu presencia...</p>
        <motion.h1
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className=" uppercase  text-[#AB765A]  text-[54px] leading-[60px]  my-4"
        >
          Mica
          <span className="">&</span>
          Rosy
        </motion.h1>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <Image alt="boda" src={imgFut} />
      </motion.div>
      <SongButtonPlayer backgroundColor="bg-[#AB765A]" />
    </InvitationContainer>
  );
};

export default Body;
