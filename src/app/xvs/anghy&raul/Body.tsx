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
      spBackground="none"
      songLink="/assets/songs/xvsanghy.mp3"
    >
      <IngresarBoton
        showSobre={true}
        selloColor="#b8cfd9"
        selloText="Raul & Anghy"
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
      <div className="w-full flex justify-center py-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          viewport={{ once: true }}
          className="
      relative
      w-full
      max-w-[850px]
      p-[3px]
      rounded-[24px]
      overflow-hidden
      shadow-[0_10px_40px_rgba(150,190,220,0.22)]
    "
          style={{
            background: `
        linear-gradient(
          110deg,
          #e7a1aa 0%,
          #f0c5c9 20%,
          #d7c5ed 50%,
          #b5dff2 80%,
          #d7a1ad 100%
        )
      `,
          }}
        >
          {/* Interior */}
          <div
            className="
        relative
        overflow-hidden
        rounded-[21px]
        px-8
        py-10
        cell:px-5
        cell:py-8
      "
            style={{
              background: `
          radial-gradient(
            ellipse at 0% 0%,
            rgba(244, 180, 190, 0.55) 0%,
            rgba(244, 180, 190, 0.20) 20%,
            transparent 45%
          ),
          radial-gradient(
            ellipse at 100% 20%,
            rgba(170, 215, 245, 0.55) 0%,
            rgba(170, 215, 245, 0.20) 22%,
            transparent 48%
          ),
          radial-gradient(
            ellipse at 50% 100%,
            rgba(205, 190, 240, 0.35) 0%,
            rgba(205, 190, 240, 0.15) 25%,
            transparent 50%
          ),
          rgba(255, 255, 255, 0.82)
        `,
            }}
          >
            {/* Borde interior */}
            <div
              className="
          pointer-events-none
          absolute
          inset-[10px]
          rounded-[16px]
          border
          border-white/80
        "
            />

            {/* Esquina superior izquierda */}
            <div
              className="
          absolute
          top-[10px]
          left-[10px]
          w-16
          h-16
          border-t-2
          border-l-2
          rounded-tl-[16px]
          border-[#E3A5AF]
          opacity-80
        "
            />

            {/* Esquina superior derecha */}
            <div
              className="
          absolute
          top-[10px]
          right-[10px]
          w-16
          h-16
          border-t-2
          border-r-2
          rounded-tr-[16px]
          border-[#B6DDF0]
          opacity-80
        "
            />

            {/* Esquina inferior izquierda */}
            <div
              className="
          absolute
          bottom-[10px]
          left-[10px]
          w-16
          h-16
          border-b-2
          border-l-2
          rounded-bl-[16px]
          border-[#E3A5AF]
          opacity-80
        "
            />

            {/* Esquina inferior derecha */}
            <div
              className="
          absolute
          bottom-[10px]
          right-[10px]
          w-16
          h-16
          border-b-2
          border-r-2
          rounded-br-[16px]
          border-[#B6DDF0]
          opacity-80
        "
            />

            {/* Decoración superior */}
            <div className="relative flex justify-center items-center mb-5">
              <div
                className="
            absolute
            w-[35%]
            h-[1px]
            left-0
            bg-gradient-to-r
            from-transparent
            via-[#D9A0A8]
            to-[#CFC5F0]
          "
              />

              <div
                className="
            absolute
            w-[35%]
            h-[1px]
            right-0
            bg-gradient-to-l
            from-transparent
            via-[#B5DDF2]
            to-[#CFC5F0]
          "
              />

              <span
                className="
            relative
            z-10
            px-4
            text-2xl
            text-[#C78F9A]
          "
              >
                ✦
              </span>
            </div>

            {/* Texto */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className={`
          relative
          z-10
          ${champagne.className}
          text-center
          text-[25px]
          leading-[1.65]
          font-semibold
          cell:text-[19px]
          cell:leading-[1.55]
        `}
              style={{
                background:
                  "linear-gradient(90deg, #B86F7D 0%, #8C719B 50%, #527A9A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Querido invitado estamos felices de compartir este momento con
              todos ustedes donde nuestros hijos hoy dejan una etapa de su vida
              para dirigirse a un mundo nuevo lleno de ilusiones pero sobre todo
              decisiones, esperamos contar con su presencia este día tan
              importante y significativo para nosotros.
            </motion.p>

            {/* Decoración inferior */}
            <div className="relative flex justify-center items-center mt-6">
              <div
                className="
            absolute
            w-[35%]
            h-[1px]
            left-0
            bg-gradient-to-r
            from-transparent
            via-[#D9A0A8]
            to-[#CFC5F0]
          "
              />

              <div
                className="
            absolute
            w-[35%]
            h-[1px]
            right-0
            bg-gradient-to-l
            from-transparent
            via-[#B5DDF2]
            to-[#CFC5F0]
          "
              />

              <span
                className="
            relative
            z-10
            px-4
            text-xl
            text-[#C78F9A]
          "
              >
                ✦
              </span>
            </div>
          </div>
        </motion.div>
      </div>
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

      <Contador
        fechaEvento={new Date("2026-09-18T00:00:00")}
        fechaString="Viernes, 18 de Septiembre de 2026"
        fotoContador="bg-[url('/assets/images/xvs/angyraul/img8.jpeg')]"
      />
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
            José Raúl Cortés Medina <br />
            y <br />
            Ma de los Angeles Mtz Gaytán
          </p>
        </motion.div>
      </div>
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
            Trei Recepciones
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
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 1,
            evento: ` Inicio de Recepción `,
            hora: "8:30 pm",
            Icon: "coctel",
          },
          {
            id: 2,
            evento: ` Vals de Entrada`,
            hora: "9:15 pm",
            Icon: "dance",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "10:00 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Fiesta",
            hora: "11:00 pm",
            Icon: "party",
          },
          {
            id: 6,
            evento: "Cierre del evento",
            hora: "2:00 am",
            Icon: "flores",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#e0929e]",
          lineBg: "bg-[#e0929e]/20",
          circleColor: "stroke-[#e0929e]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#e0929e]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
        cardGradient={true}
        textFont={champagne.className}
        textColor="text-[#40566B]"
        showRombito={false}
        textSize="text-xl"
      />

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
