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
import cierre2 from "/public/assets/images/champagne-glass.png";

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
import imgBanner from "/public/assets/images/darianaymario/img1.jpeg";
import img2 from "/public/assets/images/darianaymario/img2.jpeg";
import img3 from "/public/assets/images/darianaymario/img3.jpeg";
import img4 from "/public/assets/images/darianaymario/img4.jpeg";
import img5 from "/public/assets/images/darianaymario/img5.jpeg";
import img7 from "/public/assets/images/darianaymario/img7.jpeg";
import img9 from "/public/assets/images/darianaymario/img9.jpeg";
import img10 from "/public/assets/images/darianaymario/img10.jpeg";
import img11 from "/public/assets/images/darianaymario/img11.jpeg";

// #C2DAE8 Delicate blue
// #EDE3D2 Antique White
// #ACB6B3 Aqua
const textOlive = "text-[#7A553A]";
const bgOlive = "bg-[#C2DAE8]";
const thirdColor = "text-[#c2dae8]";
const extraBg = "bg-[#f2ebe2]";
const mainGradient =
  "bg-gradient-to-br from-[#EDE3D2] via-[#ffffff] to-[#EDE3D2]";

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
      songLink="/assets/songs/darianaymario.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        bgCuadrito="bg-white"
        extraClases=" !mt-[64px] !bg-transparent !justify-start "
        font={paris}
        novia="Dariana"
        novio="Mario"
        join="y"
        color={{
          bgColor: "bg-[#C2DAE8]",
          titleColor: "text-cyan-600",
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <Invitacion
        textColor="text-gray-700"
        accentTextColor="text-cyan-600"
        envelopeBorderColor="border-[#C2DAE8]"
        envelopeOverlayColor="bg-[#C2DAE8]/70"
      />

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={imgBanner} alt="boda" />
      </motion.div>
      <div className={`${mainGradient} py-10`}>
        <SeccionCeremonia />
        <TarjetitaRecepcion
          textColor="text-[#d6c7bd]"
          bgBtnColor="bg-[#d6c7bd]"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img4} alt="boda" />
      </motion.div>
      <div className={`${mainGradient} py-10`}>
        <div className="max-w-sm mx-auto">
          <div className="mb-4">
            <Tarjetita
              bgColor={bgOlive}
              textColor="text-sky-800"
              iconColor="bg-cyan-800"
            />
          </div>
          <div className="flex justify-end mb-4">
            <TarjetitaDressCode
              bgColor="bg-white"
              textColor="text-[#d6c7bd]"
              iconColor="bg-[#d6c7bd]"
            />
          </div>
          <div className="flex ">
            <Tarjetita2
              bgColor={bgOlive}
              textColor="text-sky-800"
              iconColor="bg-sky-800"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img3} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img7} alt="boda" />
      </motion.div>
      <div className={`${mainGradient} py-10`}>
        <div className="max-w-sm mx-auto">
          <Itinerario
            textColor="text-white"
            iconColor="bg-white"
            circleColor="bg-white"
            textureOverlayColor="bg-[#d6c7bd]/80"
            gradientFrom="from-[#EDE3D2]"
            gradientVia="via-[#ffffff]"
            gradientTo="to-[#EDE3D2]"
            lineColor="bg-white"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img10} alt="boda" />
      </motion.div>
      <div className={`${mainGradient} py-10`}>
        <div className="max-w-sm mx-auto">
          <TarjetitaConfirmacion
            bgColor="bg-white"
            textColor="text-[#d6c7bd]"
            buttonBgColor="bg-[#d6c7bd]"
            buttonTextColor="text-white"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img11} alt="boda" />
      </motion.div>
      <div className={`${mainGradient} py-10`}>
        <div className="max-w-sm mx-auto">
          <Contador
            fechaEvento={new Date("2026-08-29T00:00:00")}
            fechaString="Sábado, 29 de Agosto de 2026"
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
        <Image src={img9} alt="boda" />
      </motion.div>
    </InvitationContainer>
  );
};

export default Body;

export function Invitacion({
  textColor,
  accentTextColor,
  envelopeBorderColor,
  envelopeOverlayColor,
}: {
  textColor?: string;
  accentTextColor?: string;
  envelopeBorderColor?: string;
  envelopeOverlayColor?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-[#EDE3D2] via-[#ffffff] to-[#EDE3D2] flex items-center py-10 justify-center">
      <div className="relative w-full max-w-sm">
        <div className="absolute top-0 left-0 w-full p-4 h-[16rem] shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${sobresote.src})`,
            }}
          />

          {/* COLOR DEL SOBRE */}
          <div className={`absolute inset-0 ${envelopeOverlayColor}`} />
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
          <div className="relative bg-white w-11/12 p-3 mx-[auto] shadow-lg mt-[140px] border-gray-300 text-center">
            <div
              className={`border-2 ${envelopeBorderColor} pt-[60px] pb-[40px] px-[20px]`}
            >
              <p
                className={`text-[14px] tracking-widest uppercase ${accentTextColor} w-11/12 text-center mx-auto`}
              >
                Con la bendición de Dios y de nuestros padres
              </p>

              <div className={`mt-6 text-[14px] leading-5 ${textColor}`}>
                <p className="uppercase font-semibold">Padres de la novia</p>

                <p className="uppercase">María Guadalupe Calderón Domínguez</p>

                <p className="uppercase">Juan Francisco Li Rocha</p>

                <p className="uppercase font-semibold mt-4">Padres del novio</p>

                <p className="uppercase">Marianita Ramírez Montes</p>

                <p className="uppercase">Jaime Rodolfo Lara García</p>
              </div>

              <div className="mt-8">
                <h1
                  className={`${paris.className} text-4xl font-bold ${accentTextColor}`}
                >
                  Dariana
                </h1>

                <p
                  className={`${paris.className} text-4xl font-bold ${accentTextColor}`}
                >
                  &
                </p>

                <h1
                  className={`${paris.className} text-4xl font-bold ${accentTextColor}`}
                >
                  Mario
                </h1>
              </div>

              <p className={`mt-6 uppercase text-[14px] italic ${textColor}`}>
                &quot;El amor no consiste en mirar al otro, sino en mirar juntos
                en la misma dirección&quot;
              </p>

              <p className={`text-[14px] uppercase mt-1 ${textColor}`}>
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
          className="w-full max-w-sm bg-[#C2DAE8] text-white pt-10 pb-8 px-6 rounded-t-[200px] shadow-xl bg-cover  bg-blend-multiply bg-center"
          style={{
            backgroundImage: `url(${texture.src})`,
          }}
        >
          <p className="text-[14px] pt-4 tracking-wide text-center ">
            ACOMPAÑANOS EL DÍA
          </p>

          <div className="text-center mt-2">
            <p className=" tracking-widest font-bold">AGOSTO</p>
          </div>
          <div className="uppercase my-2 flex items-center justify-center gap-2 ">
            <div className="border-y-2 border-white text-[14px]">Sabado</div>
            <div
              className="text-[58px] mt-[-22px]"
              style={{ lineHeight: "0px" }}
            >
              29
            </div>
            <div className="border-y-2 border-white text-[14px]">7:00 PM</div>
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
              Parroquia Santa María Reyna de los apóstoles{" "}
            </p>
            <p className=" tracking-widest mt-1 text-center">
              Huitzilopochtli 591, Los Pinos 2do y 3er Sector, 25204 Saltillo,
              Coah.{" "}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <a
              href="https://maps.app.goo.gl/SxF7y2j9P6hkYF2b9"
              className="bg-white text-cyan-600 px-6 py-2 tracking-widest shadow-md hover:shadow-lg transition"
            >
              ¿CÓMO LLEGAR?
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function TarjetitaRecepcion({
  textColor,
  bgBtnColor,
}: {
  textColor: string;
  bgBtnColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`${textColor} bg-white shadow-md rounded-3xl max-w-sm mx-auto my-8 w-[320px]`}
      >
        <div className="text-center p-4">
          <p className={`${paris.className} text-3xl`}>Recepción</p>

          <p className="text-lg tracking-widest mt-1 text-center font-bold">
            Villa Toscana
          </p>

          <p className="text-lg tracking-widest mt-1 text-center font-bold">
            9:00 pm
          </p>

          {/* ICONO DINÁMICO */}
          <div className="mt-6 flex justify-center">
            <div
              className={`${bgBtnColor} w-[64px] h-[64px]`}
              style={{
                WebkitMaskImage: `url(${noviosverde.src})`,
                maskImage: `url(${noviosverde.src})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          </div>

          <p className="tracking-widest mt-1 text-center">
            Camino a Torrecillas y Ramones 2400, Torrecillas, Coah.{" "}
          </p>

          <div className="flex justify-center mt-6">
            <a
              href="https://maps.app.goo.gl/swxECJnuudRQGpCm6"
              className={`${bgBtnColor} text-white px-6 py-2 tracking-widest shadow-md hover:shadow-lg transition`}
            >
              ¿CÓMO LLEGAR?
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function Tarjetita({
  bgColor,
  textColor,
  iconColor,
}: {
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`${bgColor} ${textColor} shadow-md w-[280px] rounded-3xl p-4`}
      >
        <p className={`${paris.className} text-xl text-center`}>
          Niños Bienvenidos
        </p>

        {/* ICONO DINÁMICO */}
        <div className="mt-2 flex justify-center">
          <div
            className={`${iconColor} w-[72px] h-[72px]`}
            style={{
              WebkitMaskImage: `url(${cheers.src})`,
              maskImage: `url(${cheers.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>

        <p className="uppercase tracking-widest mt-1 text-center text-[10px]">
          Los niños son bienvenidos en nuestra celebración. Agradecemos
          atentamente su apoyo y supervisión para conservar un ambiente
          armonioso y agradable durante toda la celebración
        </p>
      </div>
    </motion.div>
  );
}
export function TarjetitaDressCode({
  bgColor,
  textColor,
  iconColor,
}: {
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`${bgColor} ${textColor} shadow-md w-[280px] rounded-3xl p-4`}
      >
        <p className={`${paris.className} text-xl text-center`}>
          Código de Vestimenta
        </p>

        <p className="uppercase tracking-widest mt-1 text-center text-[14px] font-bold">
          Vestimenta: Estrictamente formal
        </p>

        {/* ICONO DINÁMICO */}
        <div className="mt-2 flex justify-center">
          <div
            className={`${iconColor} w-[72px] h-[72px]`}
            style={{
              WebkitMaskImage: `url(${dresscode.src})`,
              maskImage: `url(${dresscode.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>

        <p className="uppercase tracking-widest mt-1 text-center text-[14px]">
          Mujeres: Vestido Largo
        </p>

        <p className="uppercase tracking-widest mt-1 text-center text-[14px]">
          Hombre: Traje
        </p>
        <p className="uppercase tracking-widest mt-1 text-center text-[14px]">
          No Mezclilla
        </p>
        <p className="uppercase tracking-widest mt-1 text-center text-[14px]">
          * El tono blanco se reserva a la novia
        </p>
        <p className="uppercase tracking-widest mt-1 text-center text-[14px]">
          * El tono baby Blue se reserva a las damas
        </p>
      </div>
    </motion.div>
  );
}

export function Tarjetita2({
  bgColor,
  textColor,
  iconColor,
}: {
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`${bgColor} ${textColor} shadow-md w-[280px] rounded-3xl p-4`}
      >
        <p className={`${paris.className} text-xl text-center`}>Regalo</p>

        {/* ICONO DINÁMICO */}
        <div className="mt-6 flex justify-center">
          <div
            className={`${iconColor} w-[64px] h-[64px]`}
            style={{
              WebkitMaskImage: `url(${envelope.src})`,
              maskImage: `url(${envelope.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>

        <p className="uppercase tracking-widest mt-1 text-center text-[14px]">
          Sobre o Regalo
        </p>
      </div>
    </motion.div>
  );
}
export function Itinerario({
  textColor,
  iconColor,
  circleColor,
  textureOverlayColor,
  gradientFrom,
  gradientVia,
  gradientTo,
  lineColor,
}: {
  textColor?: string;
  iconColor?: string;
  circleColor?: string;
  textureOverlayColor?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  lineColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex justify-center">
        <div
          className={`relative w-full max-w-sm rounded ${textureOverlayColor} bg-cover bg-center bg-blend-multiply ${textColor} pb-[68px] overflow-hidden`}
          style={{
            backgroundImage: `url(${texture.src})`,
          }}
        >
          {/* CONTENIDO */}
          <div className="relative z-10">
            {/* TRIANGLE TOP */}
            <div
              className={`triangle-top h-[68px] shadow-xl bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo}`}
            />

            <h2
              className={`${paris.className} text-center text-4xl my-10 font-bold`}
            >
              Itinerario
            </h2>

            <div className="relative mb-10">
              {/* LINEA CENTRAL */}
              <div
                className={`absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full ${lineColor}`}
              />

              {/* ITEM 1 */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center mb-12 relative">
                  <div className="w-1/2 text-right pr-6">
                    <p className="text-[14px]">7:00 P.M.</p>

                    <p className="uppercase text-sm tracking-widest">Misa</p>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-3 h-3 rounded-full ${circleColor}`} />
                  </div>

                  <div className="w-1/2">
                    <div
                      className={`w-12 h-12 ml-[24px] ${iconColor}`}
                      style={{
                        WebkitMaskImage: `url(${churchit.src})`,
                        maskImage: `url(${churchit.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* ITEM 2 */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center mb-12 relative">
                  <div className="w-1/2 text-right pr-6">
                    <div
                      className={`w-12 h-12 opacity-80 ml-auto ${iconColor}`}
                      style={{
                        WebkitMaskImage: `url(${ceremonia.src})`,
                        maskImage: `url(${ceremonia.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className={`w-3 h-3 rounded-full ${circleColor}`} />
                  </div>

                  <div className="w-1/2 pl-6">
                    <p className="text-[14px]">9:00 P.M.</p>

                    <p className="uppercase text-sm tracking-widest">
                      Inicio Recepción
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ITEM 3 */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center mb-12 relative">
                  <div className="w-1/2 text-right pr-6">
                    <p className="text-[14px]">9:15 P.M.</p>

                    <p className="uppercase text-sm tracking-widest">
                      Vals de novios
                    </p>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-3 h-3 rounded-full ${circleColor}`} />
                  </div>

                  <div className="w-1/2 pl-6">
                    <div
                      className={`w-12 h-12 opacity-80 ${iconColor}`}
                      style={{
                        WebkitMaskImage: `url(${cierre.src})`,
                        maskImage: `url(${cierre.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* ITEM 4 */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center mb-12 relative">
                  <div className="w-1/2 text-right pr-6">
                    <div
                      className={`w-12 h-12 opacity-80 ml-auto ${iconColor}`}
                      style={{
                        WebkitMaskImage: `url(${cena.src})`,
                        maskImage: `url(${cena.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className={`w-3 h-3 rounded-full ${circleColor}`} />
                  </div>

                  <div className="w-1/2 pl-6">
                    <p className="text-[14px]">10:30 P.M.</p>

                    <p className="uppercase text-sm tracking-widest">Cena</p>
                  </div>
                </div>
              </motion.div>
              {/* ITEM 5 */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center mb-12 relative">
                  <div className="w-1/2 text-right pr-6">
                    <p className="text-[14px]">11:15 P.M.</p>

                    <p className="uppercase text-sm tracking-widest">
                      Tradiciones
                    </p>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-3 h-3 rounded-full ${circleColor}`} />
                  </div>

                  <div className="w-1/2 pl-6">
                    <div
                      className={`w-12 h-12 opacity-80 ${iconColor}`}
                      style={{
                        WebkitMaskImage: `url(${cake.src})`,
                        maskImage: `url(${cake.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
              {/* ITEM 6 */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center mb-12 relative">
                  <div className="w-1/2 text-right pr-6">
                    <div
                      className={`w-12 h-12 opacity-80 ml-auto ${iconColor}`}
                      style={{
                        WebkitMaskImage: `url(${cierre2.src})`,
                        maskImage: `url(${cierre2.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className={`w-3 h-3 rounded-full ${circleColor}`} />
                  </div>

                  <div className="w-1/2 pl-6">
                    <p className="text-[14px]">2:00 A.M.</p>

                    <p className="uppercase text-sm tracking-widest">
                      Fin del Evento
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* TRIANGLE BOTTOM */}
      <div
        className={`triangle-bottom absolute w-full translate-y-[-68px] h-[68px] bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo}`}
      />
    </motion.div>
  );
}
export function TarjetitaConfirmacion({
  bgColor,
  textColor,
  buttonBgColor,
  buttonTextColor,
}: {
  bgColor?: string;
  textColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`${bgColor} shadow-md rounded-3xl ${textColor} max-w-sm mx-auto my-8 w-[320px]`}
      >
        <div className="text-center p-4">
          <p className={`${paris.className} text-3xl`}>
            Confirmación de Asistencia
          </p>

          <p className="tracking-widest mt-1 text-center text-sm uppercase">
            CELEBRAR NUESTRO AMOR ES UN SUEÑO HECHO REALIDAD, Y, PARA QUE SEA
            PERFECTO, NOS ENCANTARÍA CONTAR CONTIGO EN NUESTRA LISTA DE
            INVITADOS.
          </p>

          <p className="uppercase tracking-widest mt-3 font-semibold text-center">
            Favor de confirmar tu asistencia antes del
            <br />
            <b>01 de julio de 2026</b>
            <br />
            <b>Con nuestra WEDDING planner</b>
          </p>

          <div className="flex justify-center mt-6">
            <a
              href="https://wa.link/z5klwe"
              className={`${buttonBgColor} ${buttonTextColor} px-6 py-2 tracking-widest shadow-md hover:shadow-lg transition`}
            >
              Confirmar
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
