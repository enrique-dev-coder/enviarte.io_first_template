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
import { lora, champagne, dancing, paris, montse } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import PadrinosDeBoda from "@/app/InvitationTemplates/TemplateComponents/Customized/PadrinosDeBoda";
import Hero from "./Hero";
import Contador from "./Contador";
//images
import imgBanner from "/public/assets/images/marianaybeto/banner1.png";
import img1 from "/public/assets/images/marianaybeto/img1.jpeg";
import img2 from "/public/assets/images/marianaybeto/img2.jpeg";
import img3 from "/public/assets/images/marianaybeto/img3.jpeg";
import img4 from "/public/assets/images/marianaybeto/img4.jpeg";
import img5 from "/public/assets/images/marianaybeto/img5.jpeg";
import img6 from "/public/assets/images/marianaybeto/img6.jpeg";
import img7 from "/public/assets/images/marianaybeto/img7.jpeg";
import img8 from "/public/assets/images/marianaybeto/img8.jpeg";
import img9 from "/public/assets/images/marianaybeto/img9.jpeg";

import FiestaLogo from "/public/assets/images/arely&bryan/Fiesta_Inn_logo.svg";

import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-[#451c20]";
const bgOlive = "bg-[#590b18]";
const altBg = "bg-[#fffdf9]";
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
      songLink="/assets/songs/marianaybeto.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        extraClases="!justify-start !mt-[16px] !bg-transparent"
        font={paris}
        novia="Mariana"
        novio="Roberto"
        join="&"
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <div className={`${altBg} my-5`}>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`w-full ${textOlive} text-center cell:text-4xl my-4 py-4 `}
        >
          &quot;
          <span className={`${dancing.className}  text-6xl`}>Un amor</span>
          <br />
          <span
            className={`${montse.className} text-[#62745c] text-2xl uppercase`}
          >
            {" "}
            como el nuestro
          </span>
          <br />
          <span className={`${dancing.className}  text-5xl `}>
            {" "}
            no sucede dos veces
          </span>
          <br />
          <span
            className={`${montse.className} text-[#62745c]  text-2xl uppercase`}
          >
            en la vida{" "}
          </span>
          &quot;
          <br />
        </motion.p>
      </div>
      {/* <GraciasBanner
        showBanner={true}
        frase={{
          content: "Invitación válida para:",
          font: paris,
          styling: { color: textOlive, size: "text-4xl" },
        }}
        name={{
          content: nombre || "Nombre invitado",
          font: lora,
          styling: { color: textOlive, size: "text-xl" },
        }}
        pases={{
          content: `${pasesAsignados || "Numero"} pases`,
          font: lora,
          styling: { color: textOlive, size: "text-xl" },
        }}
      /> */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={imgBanner} alt="boda" />
      </motion.div>
      <div className={`${altBg} py-8`}>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={` ${textOlive} text-center  text-[28px]    py-4 `}
        >
          Con la bendición de nuestros padres
        </motion.h2>
        <div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 w-[300px] cell:w-full   py-4 my-2 text-center cell:text-2xl cell:text-center"
          >
            <p className={`text-2xl font-bold ${textOlive}`}>
              Papás de la novia
            </p>
            <p
              className={`${dancing.className} text-[28px]  text-[#62745c] font-medium`}
            >
              Olivia Aguirre torres{" "}
            </p>
            <p
              className={`${dancing.className} text-[28px]  text-[#62745c] font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px]  text-[#62745c] font-medium`}
            >
              Leopoldo Gil Solís
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 my-2 w-[300px] cell:w-full  py-4 text-center cell:text-2xl cell:text-center"
          >
            <p className={`text-2xl font-bold  ${textOlive}`}>
              Papás del novio
            </p>
            <p
              className={`${dancing.className} text-[28px]   text-[#62745c] font-medium`}
            >
              Mesarid Rodríguez Esquivel
            </p>
            <p
              className={`${dancing.className} text-[28px]  text-[#62745c] font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px]  text-[#62745c] font-medium`}
            >
              Roberto Rodríguez flores{" "}
            </p>
          </motion.div>
        </div>
      </div>
      <Contador
        fechaEvento={new Date("2025-10-25T00:00:00")}
        fechaString="Sábado, 25 de Octubre de 2025"
        fotoContador="bg-[url('/assets/images/marianaybeto/date.png')]"
      />
      <PlaceCard
        show={true}
        bgCard={altBg}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={"bg-[#62745c]"}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Misa"}
        direccion={"Av. 20 de noviembre 1000, zona centro 34000"}
        hora={"6:00 pm "}
        nombre={{
          content: " Templo de san Agustín ",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/g9RSsBWAZ6YAM5J39"}
      />
      <PlaceCard
        show={true}
        bgCard={altBg}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={"bg-[#62745c]"}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Civil"}
        direccion={" Me la pasan porfa, con la ubicacion de google"}
        hora={"8:00 pm "}
        nombre={{
          content: " Salon tapihal vivero terraza  ",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/gwevZwHCgNtRgNuB7"}
      />
      <PlaceCard
        show={true}
        bgCard={altBg}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={"bg-[#62745c]"}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Rececpción"}
        direccion={"Dolores Hidalgo 34307 Dolores Hidalgo 34307, 34307 Dgo."}
        hora={"9:00 pm "}
        nombre={{
          content: " Salon tapihal vivero terraza  ",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://share.google/qbNID0BQIZBkyhQ8S"}
      />

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
      <div className={`${altBg}`}>
        <ItinerarioScrollable
          showItinerario={true}
          eventData={[
            {
              id: 2,
              evento: "Misa ",
              hora: "6:00 pm - 7:00 pm",
              Icon: "church",
            },
            {
              id: 1,
              evento: `Civil`,
              hora: " 8:00 pm - 8:30pm",
              Icon: "recepcion",
            },
            {
              id: 4,
              evento: " Coctel",
              hora: "8:30 pm - 9:00 pm",
              Icon: "coctel",
            },
            {
              id: 5,
              evento: "Recepción",
              hora: "9:00 pm - 3:00 am",
              Icon: "party",
            },
          ]}
          sectionStyling={{
            lineColor: "bg-[#590b17]",
            lineBg: "bg-[#590b17]/20",
            circleColor: "stroke-[#590b17]",
            circleBg: "bg-gray-50",
            circleSoftStroke: "stroke-[#590b17]/20",
            iconColor: "text-gray-900",
            cardBg: "bg-white",
          }}
        />
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img5} alt="boda" />
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
        backGround={altBg}
        customBorder={"border-[#62745c]"}
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
        ShowFraseDeAgradecimientoInicio={true}
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
        ShowLiverpool={true}
        liverpoolNoEvento="51612156"
        showAmazon={false}
        bgLiverpoolButton={bgOlive}
        linkLiverpool="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51612156"
      />
      <motion.div
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
      </motion.div>
      <div className={`${altBg}`}>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${dancing.className}  text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
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
          Estrictamente Formal
        </motion.h2>
        <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
          {" "}
          <Image alt="boda" src={DressCodeMujeres} className="w-[50%]" />
          <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
            Mujeres
          </p>
          <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">
            Vestido Largo
          </p>
          <div className="p-4">
            <p className="  border-2 border-[#62745c]  rounded   font-medium  text-4xl text-center p-4 mb-4 cell:text-xl cell:mb-1">
              Los colores claros y sobre todo blanco quedan reservados para la
              novia y las damas.
            </p>
          </div>
        </div>
        <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
          {" "}
          <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
          <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
            Hombres
          </p>
          <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">Traje Formal</p>
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${dancing.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Recomendación de hospedaje{" "}
      </motion.h2>
      <div className="flex flex-col justify-center items-center py-4">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-center text-[#62745c] font-bold   text-5xl cell:text-4xl py-4 `}
        >
          Hampton Inn by Hilton Durango{" "}
        </motion.h2>
        <div className={`w-[88%] ${textOlive}  rounded-md py-2 px-4`}>
          <div className="mb-2 text-center text-xl font-semibold">
            <p>Dirección:</p>
            <p>
              Av. Heroico Colegio Militar 101, Nueva Vizcaya, 34080 Durango,
              Dgo.{" "}
            </p>
            <div className="w-full my-4">
              <a href="https://maps.app.goo.gl/rrp5BmrkD6ZbjLXw8">
                <button
                  className={`bg-[#62745c]  w-full text-center text-white font-medium text-xl py-2 rounded-lg`}
                >
                  Como llegar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-center text-[#62745c] font-bold   text-5xl cell:text-4xl py-4 `}
        >
          Hotel Gobernador{" "}
        </motion.h2>
        <div className={`w-[88%] ${textOlive}  rounded-md py-2 px-4`}>
          <div className="mb-2 text-center text-xl font-semibold">
            <p>Dirección:</p>
            <p>Av. 20 de Noviembre 257, Zona Centro, 34000 Durango, Dgo. </p>
            <div className="w-full my-4">
              <a href="https://maps.app.goo.gl/6TTbgiaH4Q1FQDYRA">
                <button
                  className={`bg-[#62745c]  w-full text-center text-white font-medium text-xl py-2 rounded-lg`}
                >
                  Como llegar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" shadow-md text-center border-2  rounded-md m-2 p-2 border-[#62745c] ">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${dancing.className} text-center ${textOlive}    text-5xl cell:text-3xl py-1 `}
        >
          No Niños
        </motion.h2>
        <p className="text-[#590b18]">
          Niños en casa descansando y padres disfrutando.
        </p>
        <p className="text-[#590b18]">
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
      <ConfirmacionForm
        invitationId={{ id: invitationIdForQuery.id }}
        nombreInvitado={nombre}
        pasesAsignados={pasesAsignados}
        telInvitado={tel}
        styling={{
          confirmButton: {
            backgroundColor: bgOlive,
            disabledBackgroundColor: "bg-[#a54068]/50",
          },
          section: {
            backgroundColor: "bg-white",
            carita: "no",
            textColor: textOlive,
          },
        }}
      />
      <SongButtonPlayer backgroundColor={bgOlive} />
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
