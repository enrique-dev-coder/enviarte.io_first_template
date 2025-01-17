"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import Hero from "../../InvitationTemplates/TemplateComponents/Modern/Hero";
import IngresarBoton from "../../InvitationTemplates/Common/IngresarBoton";
import { motion } from "framer-motion";
import Image from "next/image";
import SongButtonPlayer from "../../InvitationTemplates/Common/SongButtonPlayer";
import Contador from "./Contador";
import InfoBanner from "../../InvitationTemplates/TemplateComponents/Modern/InfoBanner";
import PlaceCard from "../../InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import ModernBanner from "../../InvitationTemplates/TemplateComponents/Modern/ModernBanner";
import MesaDeRegalos from "../../InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import GraciasBanner from "../../InvitationTemplates/TemplateComponents/Customized/Agradecimientos/GraciasBanner";
import ItinerarioScrollable from "../../InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import { analogist, dancing, sofia } from "@/fonts";

// images
import img1 from "/public/assets/images/joseygabriela/img1.jpeg";
import img2 from "/public/assets/images/joseygabriela/img2.jpeg";
import img3 from "/public/assets/images/joseygabriela/img3.jpeg";
import img4 from "/public/assets/images/joseygabriela/img4.jpeg";
import img5 from "/public/assets/images/joseygabriela/img5.jpeg";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/Dress_icon.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const Body = () => {
  return (
    <InvitationContainer
      spBackground="flowers"
      songLink="/assets/songs/gabrielayjose.mp3"
    >
      <IngresarBoton
        novio="José"
        novia="Gabriela"
        font={dancing}
        color="blackPalette"
      />
      <Hero
        frase={{
          content: "Save the date",
          font: dancing,
          textColor: "text-white",
        }}
        join="&"
        novia="Gabriela De La Fuente"
        novio="José Pachicano"
        font={dancing}
        fecha={{
          textColor: "text-white",
          content: "Viernes, 16 de Mayo de 2025",
          font: dancing,
        }}
        fotoDesktop="bg-[url('/assets/images/joseygabriela/hero.jpeg')]"
        fotoCell="cell:bg-[url('/assets/images/joseygabriela/hero_mobile.png')]"
        translateYVal={0}
      />
      <InfoBanner
        showBanner={true}
        showPadres={true}
        showFraseBibilica={false}
        padresNovia={"Alma Mabel Rodríguez y Juan Manuel De la Fuente"}
        padresNovio={"Maria Isidra Rocha y Juan Francisco Pachicano"}
        padresColor={"text-black"}
        titleFamiliaColor={"text-black"}
        padresFont={analogist}
      />

      <Contador
        fotoContador="bg-[url('/assets/images/joseygabriela/save1.jpeg')]"
        fechaEvento={new Date("2025-05-16T00:00:00")}
        fechaString={"Viernes, 16 de Mayo de 2025"}
      />
      <GraciasBanner
        showBanner={true}
        frase={{
          content: "Estas cordialmente invitado",
          font: dancing,
          styling: { color: "text-black", size: "text-5xl cell:text-3xl" },
        }}
        name={{
          content: "José Pachicano",
          font: sofia,
          styling: { color: "text-black", size: "text-5xl cell:text-3xl" },
        }}
      />
      <SongButtonPlayer backgroundColor="bg-black/30" />
      {/* // TODO:preguntar si es la catedral */}
      <PlaceCard
        show={true}
        titleColor="text-[#000000]"
        titleFont={dancing}
        bgButtonColor="bg-black"
        desc="Ceremonia Religiosa"
        direccion="Gral. Nicolás Bravo 127, Zona Centro, 25000 Saltillo, Coah."
        hora={"17:00 hrs"}
        nombre={{
          content: "Catedral de Santiago",
          font: analogist,
        }}
        ubicacion="https://maps.app.goo.gl/cCNckrMKuDPpFsKy8"
      />
      <PlaceCard
        show={true}
        bgButtonColor="bg-black"
        titleColor="text-[#000000]"
        titleFont={dancing}
        desc="Ceremonia Civil"
        direccion="25354 Arteaga, Coah."
        hora="19:30 hrs"
        nombre={{
          content: "MONTECÍELO",
          font: analogist,
        }}
        ubicacion="https://maps.app.goo.gl/gtxAg9N53vywR7c89"
      />
      <PlaceCard
        show={true}
        bgButtonColor="bg-black"
        titleColor="text-[#000000]"
        titleFont={dancing}
        desc="Rececpción"
        direccion="25354 Arteaga, Coah."
        hora="20:30 hrs"
        nombre={{
          content: "MONTECÍELO",
          font: analogist,
        }}
        ubicacion="https://maps.app.goo.gl/gtxAg9N53vywR7c89"
      />
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${dancing.className} text-center text-black font-bold   text-5xl cell:text-4xl py-4 `}
      >
        Dress Code
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
        className={`${analogist.className} text-center text-black font-bold underline   text-5xl cell:text-4xl py-4 `}
      >
        Formal Riguroso
      </motion.h2>
      <div className="flex  flex-col items-center justify-center cell:w-full">
        <div className=" w-11/12 flex justify-center my-4  cell:h-auto  cell:flex-col cell:w-12/12 cell:gap-10">
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <Image alt="boda" src={DressCodeMujeres} className="w-[50%]" />
            <p className={`font-bold text-4xl  cell:text-2xl`}>Mujeres</p>
            <p className="  text-4xl mb-4 cell:text-xl cell:mb-1">
              Vestido Largo
            </p>
          </div>
          <p className="text-center uppercase underline text-xl mb-4 cell:text-xl cell:mb-1">
            Queda prohibido llevar colores claros
          </p>
          <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
            {" "}
            <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
            <p className={`font-bold text-4xl  cell:text-2xl`}>Hombres</p>
            <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl">
              Traje con corbata
            </p>
            <p className="text-center uppercase underline text-xl mb-4 cell:text-xl cell:mb-1">
              Queda prohibido llevar
            </p>
            <div className="w-6/12 mx-auto text-xl">
              <ul className=" list-disc">
                <li>Botas vaqueras</li>
                <li>Pantalones de mezclilla </li>
                <li>Sombreros</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ItinerarioScrollable
        showItinerario={true}
        sectionStyling={{
          lineColor: "bg-gray-900",
          lineBg: "bg-gray-200",
          circleColor: "stroke-gray-900",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-gray-200",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
        eventData={[
          {
            id: 1,
            evento: "⛪️ Ceremonia Religiosa",
            hora: "17:00 hrs",
            Icon: "church",
          },
          {
            id: 2,
            evento: "❤ Cerenomia Civil",
            hora: "19:30  hrs",
            Icon: "civil",
          },
          {
            id: 3,
            evento: "🥂 Recepción",
            hora: "20:30 hrs",
            Icon: "recepcion",
          },
          {
            id: 4,
            evento: " 🤵👰 vals de los novios",
            hora: "20:45 hrs",
            Icon: "dance",
          },
          {
            id: 4,
            evento: "🍽️ Brindis & Cena",
            hora: "21:00 hrs",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "🥳 A Bailar y Divertirse",
            hora: "22:00 hrs a 2:00 hrs",
            Icon: "party",
          },
        ]}
      />
      <ModernBanner ImageGalleryList={[img1, img2, img3, img4, img5]} />
      {/* TODO: Agregar Amazon y cambiar cuenta */}
      <MesaDeRegalos
        FraseAgradecimientoFinalColor=""
        FraseAgradecimientoFinalFont={undefined}
        FraseAgradecimientoFinalSize=""
        FraseAgradecimientoFinalText=""
        FraseAgradecimientoInicioColor=""
        FraseAgradecimientoInicioFont={undefined}
        FraseAgradecimientoInicioSize=""
        FraseAgradecimientoInicioText=""
        SectionTitleColor="text-black"
        SectionTitleFont={dancing}
        ShowFraseDeAgradecimientoFinal={false}
        ShowFraseDeAgradecimientoInicio={false}
        ShowRegalo={false}
        ShowSobres={true}
        ShowTransferencia={true}
        datosTransferencia={{
          numero: "Tarjeta 5579 1004 3721 0030 Clabe 014078606201564725",
          owner: "Ceunta Bancaraia Santander",
        }}
        SobresImg={Sobre}
        SobresTextColor=""
        SobresTextContent="Lluvia de sobres"
        SobresType="modern"
        backGround=""
        ShowLiverpool={true}
        liverpoolNoEvento="51462297"
        showAmazon={true}
        linkAmazon="https://www.amazon.com.mx/wedding/registry/GAHU0ANQZDTQ"
      />

      <ConfirmacionForm
        invitationId={{ id: "1" }}
        nombreInvitado={"Jose Pachicano"}
        pasesAsignados="2"
        telInvitado="8441753173"
        styling={{
          section: {
            backgroundColor: "bg-white",
            textColor: "text-black",
          },
          confirmButton: {
            backgroundColor: "bg-black",
            disabledBackgroundColor: "bg-black/60",
          },
        }}
      />
    </InvitationContainer>
  );
};

export default Body;
