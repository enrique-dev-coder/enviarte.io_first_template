"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";

import { lora, champagne, dancing } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

import Hero from "./Hero";
import Contador from "./Contador";
//images
import imgBanner from "/public/assets/images/michelleydaniel/img1.png";
import img3 from "/public/assets/images/michelleydaniel/img2.png";
import img5 from "/public/assets/images/michelleydaniel/img4.png";
import img6 from "/public/assets/images/michelleydaniel/img5.png";
import img7 from "/public/assets/images/michelleydaniel/img6.png";
import img8 from "/public/assets/images/michelleydaniel/img7.png";
import img9 from "/public/assets/images/michelleydaniel/img8.png";
import img10 from "/public/assets/images/michelleydaniel/img9.png";

import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";
import { PointerIcon } from "lucide-react";
const textOlive = "text-[#b08968]";
const bgOlive = "bg-white";
// redeploy x2
const Body = () => {
  return (
    <InvitationContainer spBackground="none" songLink="/assets/songs/fyd.mp3">
      <IngresarBoton
        buttonText="Ingresar"
        extraClases="!justify-start !mt-[16px] !bg-transparent"
        font={dancing}
        novia="Fernanda"
        novio="Daniel"
        join="y"
        color={{
          bgColor: "bg-white",
          titleColor: textOlive,
          textButtonColor: textOlive,
          borderColor: "border-[#b08968]",
        }}
      />
      <Hero />
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
            className="flex flex-col gap-1 w-[300px] cell:w-full bg-white  py-4 my-2 text-center cell:text-2xl cell:text-center"
          >
            <p className={`text-2xl font-bold ${textOlive}`}>
              Papás de la novia
            </p>
            <p className={`${dancing.className} text-[28px]  font-medium`}>
              María del Rosario Ramírez Alvarado{" "}
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              Mauro Gustavo Medina Corral
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
              Claudia Margarita Salazar López
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              y
            </p>
            <p
              className={`${dancing.className} text-[28px] text-gray-800 font-medium`}
            >
              Juan Domingo Almanza Lara
            </p>
          </motion.div>
        </div>
      </div>
      <Contador
        fechaEvento={new Date("2025-08-09T00:00:00")}
        fechaString="Sábado, 9 de Agosto de 2025"
        fotoContador="bg-[url('/assets/images/michelleydaniel/date.png')]"
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        borderColor="border-[#b08968]"
        buttonTextColor={textOlive}
        desc={"Ceremonia Religiosa"}
        direccion={
          "Prol. David Berlanga 888A, Topochico, 25284 Saltillo, Coah."
        }
        hora={"6:00 pm "}
        nombre={{
          content: "Parroquia Espíritu Santo",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/rRhFuvE2EpLQeMjt6"}
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        borderColor="border-[#b08968]"
        buttonTextColor={textOlive}
        desc={"Ceremonia Civil y Recepción"}
        direccion={
          "Juan Luis Adolfo Cepeda 175, Torrecillas, 25298 Saltillo, Coah."
        }
        hora={"8:00 pm "}
        nombre={{
          content: "Salón Los Arcángeles",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/8chzHxdv15be3rkX9"}
      />

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={imgBanner} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img3} alt="boda" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${dancing.className} text-center ${textOlive} font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Itinerario
      </motion.h2>
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 2,
            evento: "Ceremonia Religiosa ",
            hora: "6:00 pm",
            Icon: "church",
          },
          {
            id: 1,
            evento: `Ceremonia Civil\n y Recepción`,
            hora: "8:00 pm",
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
            evento: "Tradiciones",
            hora: "11:30 pm",
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
          lineColor: "bg-[#b08968]",
          lineBg: "bg-[#b08968]/20",
          circleColor: "stroke-[#b08968]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#b08968]/20",
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
        <Image src={img6} alt="boda" />
      </motion.div>

      <MesaDeRegalos
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
          numero: `Fernanda Michelle Medina Ramírez\n 4915 6694 1164 1499`,
          owner: "",
        }}
        SobresImg={Sobre}
        SobresTextColor=""
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround=""
        ShowLiverpool={false}
        liverpoolNoEvento="51556397"
        showAmazon={false}
        linkLiverpool="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51556397"
      />

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img5} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img7} alt="boda" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img8} alt="boda" />
      </motion.div>
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
      <div className=" shadow-md text-center border-2  rounded-md m-2 p-2 border-[#b08968] ">
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
      <div className="relative">
        <div className="  py-2">
          <div className="flex flex-col justify-center items-center py-2">
            <p
              className={`${lora.className} text-[#b08968] text-4xl cell:text-2xl text-center font-bold`}
            >
              Wedding Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218447006000&text=Hola!%20Me%20gustar%C3%ADa%20confirmar%20mi%20asistencia%20a%20la%20boda%20de%20Fernanda%20y%20Daniel">
              <button
                className={`${bgOlive} border border-[#b08968] flex items-center gap-3  my-3 rounded-full px-4 py-2`}
              >
                <WhatsIcon className="fill-[#b08968] text-2xl " />
                <p className=" text-3xl text-[#b08968] ">844 700 6000</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <SongButtonPlayer backgroundColor={"bg-[#b08968]"} />
    </InvitationContainer>
  );
};

export default Body;
