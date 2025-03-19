"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";

import { lora, montse, dancing } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

import Hero from "./Hero";
import Contador from "./Contador";
//images
import imgBanner from "/public/assets/images/anelyroberto/img1.png";
import img2 from "/public/assets/images/anelyroberto/img2.png";
import img3 from "/public/assets/images/anelyroberto/img3.png";
import img4 from "/public/assets/images/anelyroberto/img_hrz.png";
import img5 from "/public/assets/images/anelyroberto/img_hrz2.png";
import img6 from "/public/assets/images/anelyroberto/img_hrz3.png";
import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import HotelCard from "./HotelCard";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const Body = () => {
  return (
    <InvitationContainer songLink="/assets/songs/anelyroberto.mp3">
      <IngresarBoton
        buttonText="Ingresar"
        font={lora}
        novia="Anel"
        novio="Roberto"
        join="&"
        color={{
          bgColor: "bg-[#014b66]",
          titleColor: "text-[#014b66]",
          textButtonColor: "text-white",
        }}
      />
      <Hero />
      <div className=" bg-white py-8">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`text-[#014b66] text-center  text-[28px]    py-4 `}
        >
          Con la bendición de nuestros padres
        </motion.h2>
        <div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 w-[300px] cell:w-full bg-white shadow-md py-4 my-2 text-center cell:text-2xl cell:text-center"
          >
            <p className="text-2xl font-bold text-[#014b66]">
              Papás de la novia
            </p>
            <p className="text-xl  font-medium">Juan de Jesús Angel Ordoñez </p>
            <p className="text-xl text-gray-800 font-medium">&</p>

            <p className="text-xl text-gray-800 font-medium">
              Elsa María Galaz Espinosa
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 my-2 w-[300px] cell:w-full bg-white shadow-md py-4 text-center cell:text-2xl cell:text-center"
          >
            <p className="text-2xl font-bold text-[#014b66]">Papás del novio</p>
            <p className="text-xl  font-medium">Mario Alberto Torres Torres </p>
            <p className="text-xl text-gray-800 font-medium">&</p>

            <p className="text-xl text-gray-800 font-medium">
              Juana María Alvarado Cruz
            </p>
          </motion.div>
        </div>
      </div>
      <Contador
        fechaEvento={new Date("2025-04-12T00:00:00")}
        fechaString="Sábado, 12 de Abril de 2025"
        fotoContador="bg-[url('/assets/images/anelyroberto/save.png')]"
      />
      <PlaceCard
        show={true}
        titleColor={"text-[#014b66]"}
        titleFont={lora}
        bgButtonColor={"bg-[#014b66]"}
        desc={"Recepción"}
        direccion={"C. Hidalgo 151, Zona Centro, 25000 Saltillo, Coah."}
        hora={"8pm a 1:30 am "}
        nombre={{
          content: "Museo de las Aves",
          color: "text-[#577BC1]",
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/7hj2g6YrkQhxn4Zk9"}
      />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={imgBanner} alt="boda" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Itinerario
      </motion.h2>
      <ItinerarioScrollable
        showItinerario={true}
        eventData={[
          {
            id: 1,
            evento: " Cóctel de bienvenida ",
            hora: "7:30 pm",
            Icon: "coctel",
          },
          {
            id: 2,
            evento: " Asignación de mesas",
            hora: "8:00 pm",
            Icon: "flores",
          },
          {
            id: 3,
            evento: " Vals de novios",
            hora: "8:30 pm",
            Icon: "civil",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "9:00 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Inicia la fiesta",
            hora: "10:00 pm",
            Icon: "party",
          },
          {
            id: 6,
            evento: "Cierre del evento",
            hora: "1:30 am",
            Icon: "civil",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#014b66]",
          lineBg: "bg-[#00AEAE]/20",
          circleColor: "stroke-[#014b66]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#00AEAE]/20",
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
        <Image src={img3} alt="boda" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Sugerencia de hoteles
      </motion.h2>
      <HotelCard />
      <MesaDeRegalos
        FraseAgradecimientoFinalColor=""
        FraseAgradecimientoFinalFont={undefined}
        FraseAgradecimientoFinalSize=""
        FraseAgradecimientoFinalText=""
        FraseAgradecimientoInicioColor=""
        FraseAgradecimientoInicioFont={undefined}
        FraseAgradecimientoInicioSize=""
        FraseAgradecimientoInicioText=""
        SectionTitleColor="text-[#014b66]"
        SectionTitleFont={lora}
        ShowFraseDeAgradecimientoFinal={false}
        ShowFraseDeAgradecimientoInicio={false}
        ShowRegalo={false}
        ShowSobres={true}
        ShowTransferencia={false}
        datosTransferencia={{
          numero: "4152 3142 3205 7730 BBVA",
          owner: "Oscar Alejandro Alemán",
        }}
        SobresImg={Sobre}
        SobresTextColor=""
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround=""
        ShowLiverpool={true}
        liverpoolNoEvento="51410837"
        showAmazon={false}
      />

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img4} alt="boda" />
      </motion.div>
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
        <Image src={img6} alt="boda" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Dress Code
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold underline   text-5xl cell:text-4xl py-4 `}
      >
        Formal
      </motion.h2>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeMujeres} className="w-[50%]" />
        <p className={`font-bold text-4xl text-[#014b66] cell:text-2xl`}>
          Mujeres
        </p>
        <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">Vestido Largo</p>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold underline   text-5xl cell:text-2xl py-4 `}
      >
        El color azul se reserva para las damas
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold underline   text-5xl cell:text-2xl py-4 `}
      >
        El Blanco es solo para la novia
      </motion.h2>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
        <p className={`font-bold text-4xl text-[#014b66] cell:text-2xl`}>
          Hombres
        </p>
        <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">Traje Formal</p>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${lora.className} text-center text-[#014b66] font-bold underline   text-5xl cell:text-4xl py-4 `}
      >
        NO NIÑOS
      </motion.h2>
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="uppercase text-[#014b66] text-center  my-2 text-[40px]"
        >
          Confirmación de Asistencia
        </motion.p>
      </div>
      <div className="relative">
        <div className="  py-8">
          <div className="flex flex-col justify-center items-center py-8">
            <p
              className={`${lora.className} text-[#577BC1] text-4xl cell:text-2xl text-center font-bold`}
            >
              Wedding Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218447006000">
              <button className="flex items-center gap-3  my-3 rounded-full px-4 py-2  bg-[#577BC1]">
                <WhatsIcon className="fill-white text-2xl " />
                <p className=" text-3xl text-white">844 700 6000</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <SongButtonPlayer backgroundColor="bg-[#014b66]" />
    </InvitationContainer>
  );
};

export default Body;
