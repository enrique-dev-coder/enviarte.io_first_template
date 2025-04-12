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
import { lora, champagne, dancing, paris } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import PadrinosDeBoda from "@/app/InvitationTemplates/TemplateComponents/Customized/PadrinosDeBoda";
import Hero from "./Hero";
import Contador from "./Contador";
//images
import imgBanner from "/public/assets/images/arely&bryan/date.jpeg";
import img1 from "/public/assets/images/arely&bryan/img1.jpeg";
import img3 from "/public/assets/images/arely&bryan/img3.jpeg";
import img4 from "/public/assets/images/arely&bryan/img4.jpeg";
import img5 from "/public/assets/images/arely&bryan/img5.jpeg";
import img6 from "/public/assets/images/arely&bryan/img6.jpeg";
import img7 from "/public/assets/images/arely&bryan/img7.jpeg";
import img8 from "/public/assets/images/arely&bryan/img8.jpeg";
import img9 from "/public/assets/images/arely&bryan/img9.jpeg";
import img10 from "/public/assets/images/arely&bryan/img10.jpeg";
import img11 from "/public/assets/images/arely&bryan/img12.jpeg";
import img13 from "/public/assets/images/arely&bryan/img13.jpeg";
import FiestaLogo from "/public/assets/images/arely&bryan/Fiesta_Inn_logo.svg";

import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-[#96305a]";
const bgOlive = "bg-[#a54068]";
// redeploy x2
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
      songLink="/assets/songs/arelyybryan.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        extraClases="!justify-start !mt-[16px] !bg-transparent"
        font={paris}
        novia="Arely"
        novio="Bryan"
        join="&"
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <GraciasBanner
        showBanner={true}
        frase={{
          content: "Invitación válida para:",
          font: paris,
          styling: { color: textOlive, size: "text-4xl" },
        }}
        name={{
          content: "Enrique Alvarado",
          font: lora,
          styling: { color: textOlive, size: "text-xl" },
        }}
        pases={{
          content: "2 pases",
          font: lora,
          styling: { color: textOlive, size: "text-xl" },
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
      <div className=" bg-white py-8">
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
            <p className={`${dancing.className} text-[28px]  font-medium`}>
              Matilde Sánchez Medina{" "}
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              Ramón Morales Reyna
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 my-2 w-[300px] cell:w-full bg-white py-4 text-center cell:text-2xl cell:text-center"
          >
            <p className={`text-2xl font-bold ${textOlive}`}>Papás del novio</p>
            <p className={`${dancing.className} text-[28px]  font-medium`}>
              Julia Esther Fernández Arteaga
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              Lucano García Pérez{" "}
            </p>
          </motion.div>
        </div>
      </div>
      <Contador
        fechaEvento={new Date("2025-08-09T00:00:00")}
        fechaString="Sábado, 20 de Diciembre de 2025"
        fotoContador="bg-[url('/assets/images/arely&bryan/img4.jpeg')]"
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Misa"}
        direccion={
          "Huitzilopochtli 591, Los Pinos 2do y 3er Sector, 25204 Saltillo, Coah."
        }
        hora={"4:30 pm "}
        nombre={{
          content: "Iglesia Santa María Reyna de los Apóstoles ",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/gwevZwHCgNtRgNuB7"}
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={"Ceremonia Civil y Recepción"}
        direccion={
          "Juan F. González 231, Sin Nombre de Col 19, 25299 Saltillo, Coah."
        }
        hora={"8:00 pm "}
        nombre={{
          content: "Salón Villa de San Juán",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/RW2NaGpUb14cXMS38?g_st=iw"}
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
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 2,
            evento: "Misa ",
            hora: "4:30 pm",
            Icon: "church",
          },
          {
            id: 1,
            evento: `Recepción`,
            hora: "8:00 pm",
            Icon: "recepcion",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "8:45 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Baile!",
            hora: "9:30 pm",
            Icon: "party",
          },
          {
            id: 6,
            evento: "Cierre del evento",
            hora: "1:00 am",
            Icon: "flores",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#a54068]",
          lineBg: "bg-[#a54068]/20",
          circleColor: "stroke-[#a54068]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#a54068]/20",
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
        <Image src={img5} alt="boda" />
      </motion.div>
      <PadrinosDeBoda
        showSlider={true}
        cardStyling={{ titleColor: textOlive, titleFont: dancing }}
        padrinos={[
          {
            madrinasRamos: false,
            madrina: "Rosa Eugenia Fernandez Arteaga",
            padrino: "Luis Horacio Maury Maya",
            tema: "Padrinos de Velación",
          },
          {
            madrinasRamos: false,
            madrina: "Eva Marina Luisa Guadalupe Zafra de Chapa",
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
            madrina: "Marina Morales Reyna",
            padrino: "Aaron Reyna Saldañ",
            tema: "Padrinos de Lazo",
          },
        ]}
      />
      <MesaDeRegalos
        customBorder={"border-[#a54068]"}
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
        ShowTransferencia={true}
        datosTransferencia={{
          numero: `Cuenta BBVA\n 4152 3139 5795 4915`,
          owner: "",
        }}
        SobresImg={Sobre}
        SobresTextColor={textOlive}
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround=""
        ShowLiverpool={true}
        liverpoolNoEvento="51605247"
        showAmazon={false}
        bgLiverpoolButton={bgOlive}
        linkLiverpool="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51605247"
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
        Estrictamente Formal
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
        <div className=" w-[80%]">
          <Image src={FiestaLogo} alt="hotel" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${lora.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
        >
          Fiesta Inn Saltillo{" "}
        </motion.h2>

        <div>
          <p
            className={`${lora.className} text-center ${textOlive} font-medium  text-5xl cell:text-2xl py-4 px-2 `}
          >
            CODIGO:
            <br /> G1TED7
          </p>
        </div>
        <div className={`w-[88%] ${textOlive}  rounded-md py-2 px-4`}>
          <div className="mb-2 text-center text-xl font-semibold">
            <h2>Reservaciones:</h2>
            <p>443 310 8073</p>
            <p>443 310 8052</p>
          </div>

          <div className="mb-2 text-center text-xl font-semibold">
            <p>Dirección:</p>
            <p>
              Carr. Monterrey - Saltillo No. 6607, Zona Industrial, 25270
              Saltillo, Coah.{" "}
            </p>
            <div className="w-full my-4">
              <a href="https://maps.app.goo.gl/hEuSbe5J7m1Lpqb56">
                <button
                  className={`${bgOlive}  w-full text-center text-white font-medium text-xl py-2 rounded-lg`}
                >
                  Como llegar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" shadow-md text-center border-2  rounded-md m-2 p-2 border-[#a54068] ">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${dancing.className} text-center ${textOlive}    text-5xl cell:text-3xl py-1 `}
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
