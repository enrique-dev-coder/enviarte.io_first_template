"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import GraciasBanner from "@/app/InvitationTemplates/TemplateComponents/Customized/Agradecimientos/GraciasBanner";
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
import PadrinosDeBoda from "@/app/InvitationTemplates/TemplateComponents/Customized/PadrinosDeBoda";
import Hero from "./Hero";
import Contador from "./Contador";
//images
import imgBanner from "/public/assets/images/luz&gustavo/img1.jpeg";
import img2 from "/public/assets/images/luz&gustavo/img2.jpeg";
import img3 from "/public/assets/images/luz&gustavo/img3.jpeg";
import img4 from "/public/assets/images/luz&gustavo/img4.jpeg";
import img5 from "/public/assets/images/luz&gustavo/img5.jpeg";
import img6 from "/public/assets/images/luz&gustavo/img6.jpeg";
import img7 from "/public/assets/images/luz&gustavo/img7.jpeg";
import img8 from "/public/assets/images/luz&gustavo/img8.jpeg";
import img9 from "/public/assets/images/luz&gustavo/img9.jpeg";
import img10 from "/public/assets/images/luz&gustavo/img10.jpeg";
import img11 from "/public/assets/images/luz&gustavo/img12.jpeg";
import img13 from "/public/assets/images/luz&gustavo/img13.jpeg";
import img16 from "/public/assets/images/luz&gustavo/img16.jpeg";
import LazoNegro from "/public/assets/images/lazo-negro.png";

import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-[#FFB22C]";
const bgOlive = "bg-[#FFB22C]";
const thirdColor = "text-[#FF9D23]";
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
      songLink="/assets/songs/luzygustavo.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        bgCuadrito={extraBg}
        extraClases="!justify-start !mt-[16px] !bg-transparent "
        font={paris}
        novia="Luz"
        novio="Gustavo"
        join="y"
        color={{
          bgColor: "bg-[#FF9D23]",
          titleColor: thirdColor,
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <GraciasBanner
        backgroundSection={extraBg}
        showBanner={true}
        frase={{
          content: "Invitación válida para:",
          font: paris,
          styling: { color: textOlive, size: "text-4xl" },
        }}
        name={{
          content: nombre || "Nombre invitado",
          font: lora,
          styling: { color: thirdColor, size: "text-xl" },
        }}
        pases={{
          content: `${pasesAsignados || "Numero"} pases`,
          font: lora,
          styling: { color: thirdColor, size: "text-xl" },
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={imgBanner} alt="boda" />
      </motion.div>
      <div className={`${extraBg} py-8`}>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          style={{ lineHeight: "3rem" }}
          className={`${paris.className} ${thirdColor} text-center  text-[42px]    py-4 `}
        >
          Con la bendición de nuestros padres
        </motion.h2>
        <div className={`${extraBg} py-8`}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 w-[300px] cell:w-full   py-4 my-2 text-center cell:text-2xl cell:text-center"
          >
            <p
              className={`${paris.className} text-4xl font-bold ${thirdColor}`}
            >
              Papás de la novia
            </p>
            <p
              className={`${lora.className} text-[24px] text-stone-600  font-medium`}
            >
              Concepción Morales Velázquez{" "}
            </p>
            <p
              className={`${lora.className} text-[24px] text-stone-600  font-medium`}
            >
              y
            </p>

            <span
              className={`${lora.className} text-[24px] text-stone-600  font-medium flex justify-center items-center`}
            >
              {" "}
              <Image src={LazoNegro} className="w-[8%]" alt="lazo negro" />
              Abel Leon Alcantar
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 my-2 w-[300px] cell:w-full py-4 text-center cell:text-2xl cell:text-center"
          >
            <p
              className={`${paris.className} text-4xl font-bold ${thirdColor}`}
            >
              Papás del novio
            </p>
            <p
              className={`${lora.className} text-[24px] text-stone-600  font-medium`}
            >
              Karina Flores Pérez{" "}
            </p>
            <p
              className={`${lora.className} text-[24px] text-stone-600  font-medium`}
            >
              y
            </p>
            <p
              className={`${lora.className} text-[24px] text-stone-600  font-medium`}
            >
              José Fidencio Jasso Luis
            </p>
          </motion.div>
        </div>
      </div>
      <Contador
        fechaEvento={new Date("2026-05-15T00:00:00")}
        fechaString="Viernes, 15 de Mayo de 2026"
        fotoContador="bg-[url('/assets/images/luz&gustavo/date.jpeg')]"
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img16} alt="boda" />
      </motion.div>
      <PlaceCard
        bgCard={extraBg}
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Misa"}
        direccion={
          "C. María Trinidad Sánchez 975, Los Valdez, 25209 Saltillo, Coah."
        }
        hora={"5:00 pm "}
        nombre={{
          content: "Parroquia Santiago Apostol",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/eTghhnXbgQdopXvK9"}
      />
      <PlaceCard
        show={true}
        bgCard={extraBg}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={" Civil"}
        direccion={"25354 Arteaga, Coahuila"}
        hora={"6:30 pm "}
        nombre={{
          content: "Montecielo",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/pydsCXpQHtfbGhaj6"}
      />
      <PlaceCard
        bgCard={extraBg}
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={" Recepción"}
        direccion={"25354 Arteaga, Coahuila"}
        hora={"8:00 pm "}
        nombre={{
          content: "Montecielo",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/pydsCXpQHtfbGhaj6"}
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img2} alt="boda" />
      </motion.div>
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
        <Image src={img4} alt="boda" />
      </motion.div>
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 2,
            evento: "Misa ",
            hora: "5:00 pm",
            Icon: "church",
          },
          {
            id: 1,
            evento: `Civil`,
            hora: "6:30 pm",
            Icon: "recepcion",
          },
          {
            id: 4,
            evento: "Recepción",
            hora: "8:00 pm",
            Icon: "dinner",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#FFB22C]",
          lineBg: "bg-[#FFB22C]/20",
          circleColor: "stroke-[#FFB22C]",
          circleBg: extraBg,
          circleSoftStroke: "stroke-[#FFB22C]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img11} alt="boda" />
      </motion.div>
      {/* <PadrinosDeBoda
        showSlider={true}
        cardStyling={{ titleColor: textOlive, titleFont: dancing }}
        padrinos={[
          {
            madrinasRamos: false,
            madrina: "Rosa Eugenia Fernández Arteaga",
            padrino: "Luis Horacio Maury Maya",
            tema: "Padrinos de Velación",
          },
          {
            madrinasRamos: false,
            madrina: "María Luisa Guadalupe Zafra de Chapa",
            padrino: "Eduardo Chapa Escamilla",
            tema: "Padrinos de Anillos",
          },
          {
            madrinasRamos: false,
            madrina: "Olivia Esther Hernández Sánchez",
            padrino: "Hiram Abbif Villegas Gómez",
            tema: "Padrinos de Arras",
          },
          {
            madrinasRamos: false,
            madrina: "Eva Marina Morales Reyna",
            padrino: "Aaron Reyna Saldaña",
            tema: "Padrinos de Lazo",
          },
        ]}
      /> */}
      <MesaDeRegalos
        bgCard={extraBg}
        customBorder={"border-[#FF9D23]"}
        FraseAgradecimientoFinalColor=""
        FraseAgradecimientoFinalFont={undefined}
        FraseAgradecimientoFinalSize=""
        FraseAgradecimientoFinalText=""
        FraseAgradecimientoInicioColor={textOlive}
        FraseAgradecimientoInicioFont={undefined}
        FraseAgradecimientoInicioSize="text-xl"
        FraseAgradecimientoInicioText="NUESTRO MEJOR REGALO SERÁ
          CELEBRAR CONTIGO ESTE DÍA TAN
          ESPECIAL. CUALQUIER DETALLE DE
          TU PARTE SERÁ BIENVENIDO CON
          MUCHO CARIÑO
          LES DEJAMOS NUESTRAS
          SUGERENCIAS:"
        SectionTitleColor={textOlive}
        SectionTitleFont={dancing}
        ShowFraseDeAgradecimientoFinal={false}
        ShowFraseDeAgradecimientoInicio={false}
        ShowRegalo={false}
        ShowSobres={true}
        ShowTransferencia={false}
        datosTransferencia={{
          numero: `Cuenta BBVA\n 4152 3139 5795 4915`,
          owner: "",
        }}
        SobresImg={Sobre}
        SobresTextColor={textOlive}
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround={extraBg}
        ShowLiverpool={true}
        liverpoolNoEvento="51953387"
        showAmazon={false}
        bgLiverpoolButton={bgOlive}
        linkLiverpool="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51953387
        "
      />
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img6} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img7} alt="boda" />
      </motion.div> */}
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${dancing.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Dress Code
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center ${textOlive} font-bold underline   text-5xl cell:text-4xl py-4 `}
      >
        Formal
      </motion.h2>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeMujeres} className="w-[50%]" />
        <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
          Mujeres
        </p>
        <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">Vestido Largo</p>
      </div>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
        <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
          Hombres
        </p>
        <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">Traje Formal</p>
      </div>
      <div className=" shadow-md text-center border-2  rounded-md m-2 p-2 border-[#FF9D23] ">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-center ${textOlive}    text-5xl cell:text-3xl py-1 `}
        >
          No Niños
        </motion.h2>
        <p>Niños en casa descansando y padres disfrutando.</p>
        <p>
          Queremos que vivas este momento tan especial junto a nosotros, por
          ello hemos decidido que el evento sea solo para adultos.
        </p>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img9} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img10} alt="boda" />
      </motion.div>
      <ConfirmacionForm
        invitationId={{ id: invitationIdForQuery.id }}
        nombreInvitado={nombre}
        pasesAsignados={pasesAsignados}
        telInvitado={tel}
        styling={{
          confirmButton: {
            backgroundColor: bgOlive,
            disabledBackgroundColor: "bg-[#FF9D23]/50",
          },
          section: {
            backgroundColor: "bg-white",
            carita: "no",
            textColor: thirdColor,
          },
        }}
      />
      <SongButtonPlayer backgroundColor={bgOlive} />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img13} alt="boda" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${paris.className} text-center ${textOlive}    text-5xl  font-semibold cell:text-4xl py-4 `}
      >
        Estaríamos muy agradecidos de contar con tu presencia
      </motion.h2>
    </InvitationContainer>
  );
};

export default Body;
