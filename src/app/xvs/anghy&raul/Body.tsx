"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import { lora, champagne, montse } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contador from "./Contador";
//images
import img1 from "/public/assets/images/xvs/angyraul/img1.jpeg";
import img2 from "/public/assets/images/xvs/angyraul/img2.jpeg";
import img3 from "/public/assets/images/xvs/angyraul/img3.jpeg";
import img4 from "/public/assets/images/xvs/angyraul/img4.jpeg";
import img5 from "/public/assets/images/xvs/angyraul/img5.jpeg";
import img6 from "/public/assets/images/xvs/angyraul/img6.jpeg";
import img7 from "/public/assets/images/xvs/angyraul/img7.jpeg";
import img8 from "/public/assets/images/xvs/angyraul/img8.jpeg";
import img9 from "/public/assets/images/xvs/angyraul/img9.jpeg";
import img10 from "/public/assets/images/xvs/angyraul/img10.jpeg";
import { MapPin } from "lucide-react";
import imgExtra from "/public/assets/images/xvs/angyraul/img1.jpeg";
import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";
import { Gift } from "lucide-react";

const textOlive = "text-[#40566B]";
const bgOlive = "bg-[#e0929e]";
const lilaFuerte = "text-[#40566B]";

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
      spBackground="flowers"
      songLink="/assets/songs/xvsanghy.mp3"
    >
      <IngresarBoton
        showSobre={true}
        selloColor="#b8cfd9"
        selloText="Anghy & Raul"
        bgCuadrito="bg-[#FFF0F0]"
        buttonText="Ingresar"
        extraClases="  !bg-transparent"
        font={champagne}
        novia="XVs"
        novio="Angy & Raul"
        join=""
        color={{
          bgColor: bgOlive,
          titleColor: "text-[#6e8f9d]",
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      {/* <div className="my-5">
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`w-full ${textOlive} text-center cell:text-4xl my-4 py-4 `}
        >
          &quot;
          <span className={`${dancing.className}  text-6xl`}>Guárdame</span>
          <br />
          <span className={`${montse.className}  text-2xl uppercase`}>
            {" "}
            como a la
          </span>
          <br />
          <span className={`${dancing.className}  text-5xl `}>
            {" "}
            niña de tus ojos
          </span>
          <br />
          <span className={`${montse.className}  text-2xl uppercase`}>
            escóndeme{" "}
          </span>
          <br />
          <span className={`${montse.className}  text-2xl uppercase`}>
            bajo la{" "}
          </span>
          <br />
          <span className={`${dancing.className}  text-5xl `}>
            {" "}
            sombra de tus{" "}
          </span>
          <br />
          <span className={`${dancing.className}  text-5xl uppercase`}>
            alas
          </span>
          &quot;
          <br />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${montse.className} w-full ${textOlive} text-right cell:text-2xl my-4 px-2 `}
        >
          Salmo 17:8
        </motion.p>
      </div> */}
      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="
      flex
      flex-col
      gap-1
      w-[300px]
      cell:w-full
      py-4
      my-2
      text-center
      cell:text-2xl
      cell:text-center
      rounded-2xl
      overflow-hidden
      border border-white/70
      shadow-[0_8px_30px_rgba(150,190,220,0.18)]
    "
          style={{
            background: `
        radial-gradient(
          ellipse at 0% 0%,
          rgba(244, 180, 190, 0.65) 0%,
          rgba(244, 180, 190, 0.30) 18%,
          transparent 45%
        ),
        radial-gradient(
          ellipse at 100% 20%,
          rgba(170, 215, 245, 0.60) 0%,
          rgba(170, 215, 245, 0.25) 20%,
          transparent 48%
        ),
        radial-gradient(
          ellipse at 50% 100%,
          rgba(205, 190, 240, 0.35) 0%,
          rgba(205, 190, 240, 0.15) 20%,
          transparent 50%
        ),
        rgba(255, 255, 255, 0.4)
      `,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className={`
        ${champagne.className}
        font-semibold
        text-center
        text-[28px]
        py-4
        text-[#40566B]
      `}
          >
            Con la bendición de mis papás
          </motion.h2>

          <p
            className={`    ${champagne.className} text-2xl font-bold text-[#33485A]`}
          >
            Jose Raul Cortes Medina <br />
            y <br />
            Ma de los Angeles Mtz Gaytan
          </p>
        </motion.div>
      </div>
      <Contador
        fechaEvento={new Date("2026-09-18T00:00:00")}
        fechaString="Viernes, 18 de Septiembre de 2026"
        fotoContador="bg-[url('/assets/images/xvs/angyraul/img8.jpeg')]"
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img10} alt="boda" />
      </motion.div>
      <section className="py-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className={`${champagne.className}  flex
      flex-col
      gap-2
      justify-center
      items-center
      w-[45%]
      py-6
      mx-auto
      cell:w-full
      rounded-2xl
      overflow-hidden
      border border-white/70
      shadow-[0_8px_30px_rgba(150,190,220,0.18)]`}
          style={{
            background: `
        radial-gradient(
          ellipse at 0% 0%,
          rgba(244, 180, 190, 0.65) 0%,
          rgba(244, 180, 190, 0.30) 18%,
          transparent 45%
        ),
        radial-gradient(
          ellipse at 100% 20%,
          rgba(170, 215, 245, 0.60) 0%,
          rgba(170, 215, 245, 0.25) 20%,
          transparent 48%
        ),
        radial-gradient(
          ellipse at 50% 100%,
          rgba(205, 190, 240, 0.35) 0%,
          rgba(205, 190, 240, 0.15) 20%,
          transparent 50%
        ),
        rgba(255, 255, 255, 0.4)
      `,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className="
        font-bold
        text-center
        text-4xl
        py-1
        px-4
        text-[#40566B]
        cell:text-3xl
      "
          >
            Recepción
          </motion.h2>

          <p
            className="
        text-[#40566B]
        text-2xl
        font-bold
        cell:text-xl
        cell:px-2
      "
          >
            Trei Recepciones
          </p>
          <p
            className="
        text-[#40566B]
        text-2xl
        font-bold
        cell:text-xl
        cell:px-2
      "
          >
            Horario de Inicio
          </p>

          <p
            className="
        text-[#40566B]
        text-2xl
        font-bold
        cell:text-xl
        cell:px-2
      "
          >
            8:30 PM
          </p>
          <p
            className="
        text-[#40566B]
        text-2xl
        font-bold
        cell:text-xl
        cell:px-2
      "
          >
            Fin del Evento
          </p>

          <p
            className="
        text-[#40566B]
        text-2xl
        font-bold
        cell:text-xl
        cell:px-2
      "
          >
            2:00 am
          </p>

          <div
            className="
        flex
        items-center
        cell:w-[90%]
        cell:mx-auto
        cell:flex-col
      "
          >
            <MapPin className="text-[#40566B] font-bold" />

            <p
              className="
          text-[#40566B]
          text-xl
          text-center
          cell:text-base
        "
            >
              Blvd. Venustiano Carranza 7046, Los Rodríguez, 25200 Saltillo,
              Coah
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/mcujyiyrhADVDPiZ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
          bg-[#40566B]
          text-white
          py-2
          px-5
          rounded-full
          border-2
          border-white/70
          shadow-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-[#33485A]
        "
            >
              Cómo llegar
            </button>
          </a>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img1} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img7} alt="boda" />
      </motion.div>

      {/* <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 2,
            evento: "Misa ",
            hora: "5:20 pm",
            Icon: "church",
          },
          {
            id: 1,
            evento: `Recepción`,
            hora: "8:30 pm",
            Icon: "recepcion",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "9:30 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Fiesta",
            hora: "10:20 pm",
            Icon: "party",
          },
          {
            id: 6,
            evento: "Cierre del evento",
            hora: "1:30 am",
            Icon: "flores",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#cc90c7]",
          lineBg: "bg-[#cc90c7]/20",
          circleColor: "stroke-[#cc90c7]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#cc90c7]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
      /> */}

      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="
      flex
      flex-col
      items-center
      gap-2
      w-[300px]
      cell:w-full
      py-5
      px-4
      my-2
      text-center
      rounded-2xl
      overflow-hidden
      border border-white/70
      shadow-[0_8px_30px_rgba(150,190,220,0.18)]
    "
          style={{
            background: `
        radial-gradient(
          ellipse at 0% 0%,
          rgba(244, 180, 190, 0.65) 0%,
          rgba(244, 180, 190, 0.30) 18%,
          transparent 45%
        ),
        radial-gradient(
          ellipse at 100% 20%,
          rgba(170, 215, 245, 0.60) 0%,
          rgba(170, 215, 245, 0.25) 20%,
          transparent 48%
        ),
        radial-gradient(
          ellipse at 50% 100%,
          rgba(205, 190, 240, 0.35) 0%,
          rgba(205, 190, 240, 0.15) 20%,
          transparent 50%
        ),
        rgba(255, 255, 255, 0.4)
      `,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className={`
        ${champagne.className}
        font-semibold
        text-center
        text-[28px]
        py-2
        text-[#40566B]
      `}
          >
            Sugerencia de regalos
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="py-3"
          >
            <Gift size={80} strokeWidth={1.5} className="text-[#40566B]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.8,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className={`
        ${champagne.className}
        text-2xl
        font-bold
        text-[#33485A]
        pb-2
      `}
          >
            Sobre o regalo
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img4} alt="boda" />
      </motion.div>
      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="
      flex
      flex-col
      items-center
      gap-2
      w-[300px]
      cell:w-full
      py-5
      px-4
      my-2
      text-center
      rounded-2xl
      overflow-hidden
      border border-white/70
      shadow-[0_8px_30px_rgba(150,190,220,0.18)]
    "
          style={{
            background: `
        radial-gradient(
          ellipse at 0% 0%,
          rgba(244, 180, 190, 0.65) 0%,
          rgba(244, 180, 190, 0.30) 18%,
          transparent 45%
        ),
        radial-gradient(
          ellipse at 100% 20%,
          rgba(170, 215, 245, 0.60) 0%,
          rgba(170, 215, 245, 0.25) 20%,
          transparent 48%
        ),
        radial-gradient(
          ellipse at 50% 100%,
          rgba(205, 190, 240, 0.35) 0%,
          rgba(205, 190, 240, 0.15) 20%,
          transparent 50%
        ),
        rgba(255, 255, 255, 0.4)
      `,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className={`
        ${champagne.className}
        font-semibold
        text-center
        text-[30px]
        py-2
        text-[#40566B]
      `}
          >
            Dress Code
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className={`
        ${champagne.className}
        text-[24px]
        font-bold
        text-[#33485A]
        py-2
      `}
          >
            FORMAL
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.8,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
        text-xl
        font-semibold
        text-[#40566B]
        cell:text-lg
      "
          >
            Traje y vestido
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.6,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center py-3"
          >
            <p
              className={`
          ${champagne.className}
          text-xl
          font-semibold
          text-[#40566B]
          mb-3
        `}
            >
              Colores reservados para Anghy
            </p>

            <div className="flex items-center justify-center gap-3">
              {/* Celeste */}
              <div
                className="
            w-10
            h-10
            rounded-full
            bg-[#AAD7F5]
            border-2
            border-white/80
            shadow-md
          "
                title="Celeste"
              />

              {/* Plata */}
              <div
                className="
            w-10
            h-10
            rounded-full
            bg-gradient-to-br from-[#F5F5F5] via-[#C8CDD2] to-[#8E969E]
            border-2
            border-white/80
            shadow-md
          "
                title="Plata"
              />

              {/* Rose Gold */}
              <div
                className="
            w-10
            h-10
            rounded-full
            bg-gradient-to-br from-[#F5C7C7] via-[#D9A0A8] to-[#B87882]
            border-2
            border-white/80
            shadow-md
          "
                title="Rose Gold"
              />
            </div>

            <p
              className="
          text-sm
          text-[#40566B]/80
          mt-2
        "
            >
              Celeste · Plata · Rose Gold
            </p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img3} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img8} alt="boda" />
      </motion.div>
      {/* <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${textOlive}  uppercase text-center ${champagne.className}  text-[28px] p-4 font-bold`}
        >
          Fecha límite de confirmación 23 de Mayo de 2025
        </motion.p>
      </div> */}
      <div className="relative py-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="
      flex
      flex-col
      justify-center
      items-center
      w-[300px]
      cell:w-full
      mx-auto
      py-5
      px-4
      rounded-2xl
      overflow-hidden
      border border-white/70
      shadow-[0_8px_30px_rgba(150,190,220,0.18)]
    "
          style={{
            background: `
        radial-gradient(
          ellipse at 0% 0%,
          rgba(244, 180, 190, 0.65) 0%,
          rgba(244, 180, 190, 0.30) 18%,
          transparent 45%
        ),
        radial-gradient(
          ellipse at 100% 20%,
          rgba(170, 215, 245, 0.60) 0%,
          rgba(170, 215, 245, 0.25) 20%,
          transparent 48%
        ),
        radial-gradient(
          ellipse at 50% 100%,
          rgba(205, 190, 240, 0.35) 0%,
          rgba(205, 190, 240, 0.15) 20%,
          transparent 50%
        ),
        rgba(255, 255, 255, 0.4)
      `,
          }}
        >
          <div>
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className={`${textOlive}  uppercase text-center ${champagne.className}  text-[28px] p-4 font-bold`}
            >
              Confirma tu asistencia en el siguiente botón
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: true }}
            className={`
        ${lora.className}
        text-[#40566B]
        text-3xl
        cell:text-2xl
        text-center
        font-bold
      `}
          >
            Amare Planners
          </motion.p>

          <motion.a
            href="https://api.whatsapp.com/send?phone=5218421088081&text=Confirmo%20mi%20asistencia%20para%20los%20Xvs%20de%20Anghy%20y%20Raul"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.8,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
        flex
        items-center
        gap-3
        my-3
        rounded-full
        px-5
        py-2
        bg-[#40566B]
        border
        border-white/70
        shadow-md
        transition-all
        duration-300
        hover:scale-105
        hover:bg-[#33485A]
      "
          >
            <WhatsIcon className="fill-white text-2xl" />

            <span className="text-xl text-white font-semibold">
              842 108 8081
            </span>
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img6} alt="boda" />
      </motion.div>
      <SongButtonPlayer backgroundColor={bgOlive} />
    </InvitationContainer>
  );
};

export default Body;
