"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import sobresote from "/public/assets/images/guadalupeysalvador/sobresote.png";
import sello from "/public/assets/images/guadalupeysalvador/sello.png";
import texture from "/public/assets/images/guadalupeysalvador/texture2.jpg";
import iglesiaIcon from "/public/assets/images/guadalupeysalvador/iglesiaicon.png";
import noviosverde from "/public/assets/images/guadalupeysalvador/noviosverde.png";
import cheers from "/public/assets/images/guadalupeysalvador/cheers.png";
import dresscode from "/public/assets/images/guadalupeysalvador/dresscode-removebg-preview.png";
import churchit from "/public/assets/images/guadalupeysalvador/churchitinerario.png";
import cena from "/public/assets/images/guadalupeysalvador/cena.png";
import cierre from "/public/assets/images/guadalupeysalvador/baileit.png";
import ceremonia from "/public/assets/images/guadalupeysalvador/ceremoniait.png";
import cake from "/public/assets/images/guadalupeysalvador/cake.png";
import envelope from "/public/assets/images/guadalupeysalvador/et_envelope.png";

import {
  lora,
  champagne,
  dancing,
  paris,
  Imperial,
  montse,
  inter,
} from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contador from "./Contador";

//images
import imgBanner from "/public/assets/images/guadalupeysalvador/img1.jpeg";
import img2 from "/public/assets/images/guadalupeysalvador/img2.jpeg";
import img3 from "/public/assets/images/guadalupeysalvador/img3.jpeg";
import img4 from "/public/assets/images/guadalupeysalvador/img4.jpeg";
import img5 from "/public/assets/images/guadalupeysalvador/img5.jpeg";
import img7 from "/public/assets/images/guadalupeysalvador/img7.jpeg";
import img9 from "/public/assets/images/guadalupeysalvador/img9.jpeg";
import img10 from "/public/assets/images/guadalupeysalvador/img10.jpeg";
import img11 from "/public/assets/images/guadalupeysalvador/img11.jpeg";

const textOlive = "text-[#7A553A]";
const bgOlive = "bg-[#6b705c]";
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
      songLink="/assets/songs/gysboda.mp3"
    >
      <IngresarBoton
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
      />
      <Hero />
      <Invitacion />

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={imgBanner} alt="boda" className="grayscale" />
      </motion.div>
      <div className="bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8] py-10 ">
        <SeccionCeremonia />
        <TarjetitaRecepcion />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img4} alt="boda" className="grayscale" />
      </motion.div>
      <div className="bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8] py-10 ">
        <div className="max-w-sm mx-auto">
          <div className="mb-4">
            <Tarjetita />
          </div>
          <div className="flex justify-end mb-4">
            <TarjetitaDressCode />
          </div>
          <div className="flex ">
            <Tarjetita2 />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img3} alt="boda" className="grayscale" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img7} alt="boda" className="grayscale" />
      </motion.div>
      <div className="bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8] py-10 ">
        <div className="max-w-sm mx-auto">
          <Itinerario />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img10} alt="boda" className="grayscale" />
      </motion.div>
      <div className="bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8] py-10 ">
        <div className="max-w-sm mx-auto">
          <TarjetitaConfirmacion />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img11} alt="boda" className="grayscale" />
      </motion.div>
      <div className="bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8] py-10 ">
        <div className="max-w-sm mx-auto">
          <Contador
            fechaEvento={new Date("2026-06-13T00:00:00")}
            fechaString="Sábado, 13 de Junio de 2026"
            fotoContador="bg-[url('/assets/images/guadalupeysalvador/img1.jpeg')]"
          />{" "}
        </div>
      </div>

      <SongButtonPlayer backgroundColor={bgOlive} />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img9} alt="boda" className="grayscale" />
      </motion.div>
    </InvitationContainer>
  );
};

export default Body;

export function Invitacion() {
  return (
    <div className="bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8] flex items-center py-10 justify-center">
      {" "}
      <div className="relative w-full max-w-sm">
        <div className="absolute top-0 left-0 w-full p-4 h-[16rem] shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${sobresote.src})`,
            }}
          />

          <div className="absolute inset-0 bg-[#6b705c]/40" />
        </div>

        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-10">
          <Image alt="sello" src={sello} className="w-16" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          {" "}
          <div className="relative bg-white w-11/12 p-3  mx-[auto] shadow-lg  mt-[140px] border-gray-300 text-center">
            <div className="border-2 border-[#6b705c] pt-[60px] pb-[40px] px-[20px]">
              <p className="text-[14px] tracking-widest uppercase text-gray-600 w-11/12 text-center mx-auto">
                Con la bendición de Dios y de nuestros padres
              </p>

              <div className="mt-6 text-[14px] text-gray-700 leading-5">
                <p className="uppercase font-semibold">Padres de la novia</p>
                <p className="uppercase">Claudia Cristina Hernández Nuñez</p>
                <p className="uppercase">Manuel de Jesús Castor</p>

                <p className="uppercase font-semibold mt-4">Padres del novio</p>
                <p className="uppercase">Laura Alicia Garza Ortiz</p>
                <p className="uppercase">Antonio Salvador Fuentes Rodríguez </p>
              </div>

              <div className="mt-8">
                <h1
                  className={`${paris.className} text-4xl font-bold text-gray-700`}
                >
                  Guadalupe Catalina
                </h1>
                <p
                  className={`${paris.className} text-4xl font-bold text-gray-700`}
                >
                  &
                </p>
                <h1
                  className={`${paris.className} text-4xl font-bold text-gray-700`}
                >
                  Salvador Alejandro
                </h1>
              </div>

              <p className="mt-6 uppercase text-[14px] text-gray-600 italic">
                &quot;El amor no consiste en mirar al otro, sino en mirar juntos
                en la misma dirección&quot;
              </p>
              <p className="text-[14px] uppercase text-gray-500 mt-1">
                — Antoine de Saint-Exupéry
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function SeccionCeremonia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center  w-full">
        <div
          className="w-full max-w-sm bg-[#6b705c]/80 text-white pt-10 pb-8 px-6 rounded-t-[200px] shadow-xl bg-cover  bg-blend-multiply bg-center"
          style={{
            backgroundImage: `url(${texture.src})`,
          }}
        >
          <p className="text-[14px] pt-4 tracking-wide text-center ">
            ACOMPAÑANOS EL DÍA
          </p>

          <div className="text-center mt-2">
            <p className=" tracking-widest font-bold">JUNIO</p>
          </div>
          <div className="uppercase my-2 flex items-center justify-center gap-2 ">
            <div className="border-y-2 border-white text-[14px]">Sabado</div>
            <div
              className="text-[58px] mt-[-22px]"
              style={{ lineHeight: "0px" }}
            >
              13
            </div>
            <div className="border-y-2 border-white text-[14px]">6:00 PM</div>
          </div>
          <div className="text-center">
            <p className=" tracking-widest font-bold">2026</p>
          </div>

          <div className="mt-6 flex justify-center">
            <img src={iglesiaIcon.src} alt="iglesia" className=" w-[84px]" />
          </div>

          <div className="text-center mt-4">
            <p className={`${paris.className} text-3xl`}>Ceremonia Religiosa</p>
            <p className=" tracking-widest mt-1 text-center">
              San Pablo Apóstol{" "}
            </p>
            <p className=" tracking-widest mt-1 text-center">
              Blvd. Pedro Figueroa s/n, Real de Peña, 25210 Saltillo, Coah.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <a
              href="https://maps.app.goo.gl/n5oSRZC9nHh9ZgUo7"
              className="bg-white text-gray-700 px-6 py-2 tracking-widest shadow-md hover:shadow-lg transition"
            >
              ¿CÓMO LLEGAR?
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function TarjetitaRecepcion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="bg-white shadow-md  rounded-3xl text-[#6b705c] max-w-sm mx-auto my-8 w-[320px]">
        <div className="text-center p-4">
          <p className={`${paris.className} text-3xl`}>Recepción</p>
          <p className="text-lg tracking-widest mt-1 text-center font-bold">
            Villa Santa Fe{" "}
          </p>
          <p className="text-lg tracking-widest mt-1 text-center font-bold">
            8:00 pm{" "}
          </p>

          <div className="mt-6 flex justify-center">
            <img src={noviosverde.src} alt="iglesia" className=" w-[64px]" />
          </div>

          <p className=" tracking-widest mt-1 text-center">
            Blvd. Jorge Reyna Masso Masso #214, 25904 Saltillo, Coah.{" "}
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://maps.app.goo.gl/EX6nRYEJp4NKxFAx7"
              className="bg-[#6b705c] text-white px-6 py-2 tracking-widest shadow-md hover:shadow-lg transition"
            >
              ¿CÓMO LLEGAR?
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function Tarjetita() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className=" bg-[#6b705c] text-white shadow-md w-[280px] rounded-3xl p-4">
        <p className={`${paris.className} text-xl text-center`}>
          Evento solo para adultos
        </p>
        <div className="mt-2 flex justify-center">
          <img src={cheers.src} alt="iglesia" className=" w-[72px]" />
        </div>
        <p className=" uppercase tracking-widest mt-1 text-center text-[10px]">
          quEREMOS QUE SE RELAJEN, BAILEN y CELEBREN A LO GRANDE CON NOSOTROS.
          ESTA VEZ LA FIESTA SERA SoLO PARA ADULTOS{" "}
        </p>
      </div>
    </motion.div>
  );
}
export function TarjetitaDressCode() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className=" text-[#6b705c] bg-white shadow-md w-[280px] rounded-3xl p-4">
        <p className={`${paris.className} text-xl text-center`}>
          Código de Vestimenta
        </p>
        <p className=" uppercase tracking-widest mt-1 text-center text-[14px] font-bold">
          Etiqueta
        </p>
        <div className="mt-2 flex justify-center">
          <img src={dresscode.src} alt="iglesia" className=" w-[72px]" />
        </div>
        <p className=" uppercase tracking-widest mt-1 text-center text-[14px]">
          Ellas: Vestido Largo
        </p>
        <p className=" uppercase tracking-widest mt-1 text-center text-[14px]">
          Ellos: Traje
        </p>
      </div>
    </motion.div>
  );
}
export function Tarjetita2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className=" bg-[#6b705c] text-white shadow-md w-[280px] rounded-3xl p-4">
        <p className={`${paris.className} text-xl text-center`}>Regalo</p>
        <div className="mt-6 flex justify-center">
          <img src={envelope.src} alt="iglesia" className=" w-[64px]" />
        </div>
        <p className=" uppercase tracking-widest mt-1 text-center text-[14px]">
          Lluvia de Sobres
        </p>
      </div>
    </motion.div>
  );
}
export function Itinerario() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex justify-center  ">
        <div
          className="relative w-full max-w-sm bg-white rounded   bg-cover bg-center text-[#6b705c] pb-[68px]"
          style={{ backgroundImage: `url(${texture.src})` }}
        >
          <div className="triangle-top h-[68px] shadow-xl bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8]"></div>

          <h2
            className={`${paris.className} text-center text-4xl my-10 font-bold`}
          >
            Itinerario
          </h2>

          <div className="relative mb-10">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gray-400"></div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center mb-12 relative">
                <div className="w-1/2 text-right pr-6">
                  <p className="text-[14px]">6:00 P.M.</p>
                  <p className="uppercase text-sm tracking-widest">
                    Ceremonia Religiosa
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                </div>

                <div className="w-1/2">
                  <img src={churchit.src} className="w-12 ml-[24px]" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center mb-12 relative">
                <div className="w-1/2 text-right pr-6">
                  <img
                    src={ceremonia.src}
                    className="w-12 opacity-80 ml-auto"
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                </div>

                <div className="w-1/2 pl-6">
                  <p className="text-[14px]">8:00 P.M.</p>
                  <p className="uppercase text-sm tracking-widest">
                    Ceremonia Civil
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center mb-12 relative">
                <div className="w-1/2 text-right pr-6">
                  <p className="text-[14px]">8:30 P.M.</p>
                  <p className="uppercase text-sm tracking-widest">Recepción</p>
                </div>

                <div className="relative z-10">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                </div>

                <div className="w-1/2 pl-6">
                  <img src={cierre.src} className="w-12 opacity-80" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center mb-12  relative">
                <div className="w-1/2 text-right pr-6">
                  <img src={cena.src} className="w-12 opacity-80 ml-auto" />
                </div>

                <div className="relative z-10">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                </div>

                <div className="w-1/2 pl-6">
                  <p className="text-[14px]">10:00 P.M.</p>
                  <p className="uppercase text-sm tracking-widest">Cena</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center mb-12 relative">
                <div className="w-1/2 text-right pr-6">
                  <p className="text-[14px]">1:30 A.M.</p>
                  <p className="uppercase text-sm tracking-widest">Cierre</p>
                </div>

                <div className="relative z-10">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                </div>

                <div className="w-1/2 pl-6">
                  <img src={cake.src} className="w-12 opacity-80" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="triangle-bottom absolute w-full translate-y-[-68px] h-[68px] bg-gradient-to-br from-[#f3ede5] via-[#ffffff] to-[#e9e2d8]"></div>
    </motion.div>
  );
}

export function TarjetitaConfirmacion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="bg-white shadow-md  rounded-3xl text-[#6b705c] max-w-sm mx-auto my-8 w-[320px]">
        <div className="text-center p-4">
          <p className={`${paris.className} text-3xl`}>
            Confirmación de Asistencia
          </p>
          <p className=" tracking-widest mt-1 text-center text-sm">
            CELEBRAR NUESTRO AMOR ES UN SUENO HECHO REALIDAD, Y, PARA QUE SEA
            PERFECTO, NOS ENCANTARIA CONTAR CONTIGO EN NUESTRA LISTA DE
            INVITADOS.{" "}
          </p>

          <p className=" uppercase tracking-widest mt-3 font-semibold text-center">
            Favor de confirmar tu asistencia antes del <br />{" "}
            <b>13 de mayo de 2026</b>{" "}
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://wa.link/z5klwe"
              className="bg-[#6b705c] text-white px-6 py-2 tracking-widest shadow-md hover:shadow-lg transition"
            >
              Confirmar
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
