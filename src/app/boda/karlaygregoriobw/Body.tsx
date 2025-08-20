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
import imgBanner from "/public/assets/images/karlaygregorio/img1.jpeg";
import img1 from "/public/assets/images/karlaygregorio/img1.jpeg";
import img2 from "/public/assets/images/karlaygregorio/img2.jpeg";
import crossgold from "/public/assets/images/cross.png";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-[#000]";
const bgOlive = "bg-[#000]";

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
    <InvitationContainer spBackground="none" songLink="/assets/songs/kyg.mp3">
      <IngresarBoton
        buttonText="Ingresar"
        extraClases="!justify-start !mt-[16px] !bg-transparent"
        font={paris}
        novia="Karla"
        novio="Gregorio"
        join="&"
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-white",
        }}
      />
      <Hero />
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
      <div className={` my-5`}>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`w-full ${textOlive} text-center cell:text-4xl my-4 py-4 `}
        >
          &quot;
          <span className={`${dancing.className}  text-6xl`}>El amor</span>
          <br />
          <span
            className={`${montse.className} text-[#000] text-2xl uppercase`}
          >
            {" "}
            es paciente y bondadoso,{" "}
          </span>
          <br />
          <span className={`${dancing.className}  text-5xl `}>
            {" "}
            no es envidioso,{" "}
          </span>
          <br />
          <span
            className={`${montse.className} text-[#000]  text-2xl uppercase`}
          >
            no se desvanece{" "}
          </span>
          &quot;
          <br />
        </motion.p>
        <p
          className={`${montse.className} ${textOlive}  font-semibold text-2xl uppercase text-center`}
        >
          Corintios 13:4
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={imgBanner} alt="boda" className=" grayscale" />
      </motion.div>
      <div className=" bg-white py-8">
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={` ${textOlive} ${montse.className} font-semibold text-center  text-[28px]    py-4 `}
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
            <p
              className={`${dancing.className} text-[#000]  text-[28px]  font-bold`}
            >
              Jaime Esquivel{" "}
            </p>
            <p
              className={`${dancing.className} text-[#000]  text-[28px]  font-bold`}
            >
              +
            </p>
            <p
              className={`${dancing.className} text-[#000]  text-[28px]  font-bold`}
            >
              Esmeralda Ponce{" "}
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 my-2 w-[300px] cell:w-full bg-white py-4 text-center cell:text-2xl cell:text-center"
          >
            <p
              className={`${dancing.className} text-[#000]  text-[28px] flex justify-center items-center  font-bold`}
            >
              Gregorio Bautista{" "}
              <span>
                <Image src={crossgold} alt="cross" className=" w-10" />
              </span>
            </p>
            <p
              className={`${dancing.className} text-[#000]  text-[28px]  font-bold`}
            >
              +
            </p>
            <p
              className={`${dancing.className} text-[#000]  text-[28px] capitalize font-bold`}
            >
              Graciana Reyes
            </p>
          </motion.div>
        </div>
      </div>
      <Contador
        fechaEvento={new Date("2025-12-13T00:00:00")}
        fechaString=""
        fotoContador="bg-[url('/assets/images/karlaygregorio/date.jpeg')]"
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
          "Prol. David Berlanga 888A, Topochico, 25284 Saltillo, Coah."
        }
        hora={"6:00 pm "}
        nombre={{
          content: " Iglesia Espíritu Santo ",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/7x6zS6xvVqVy59M8A"}
      />
      <PlaceCard
        show={true}
        titleColor={textOlive}
        titleFont={dancing}
        bgButtonColor={bgOlive}
        borderColor=""
        buttonTextColor={"text-white"}
        desc={" Recepción"}
        direccion={"C. Prol. Urdiñola 3725, 10 de Mayo, 25093 Saltillo, Coah."}
        hora={"8:30 pm "}
        nombre={{
          content: "Salón Enrique III",
          color: textOlive,
          font: lora,
        }}
        ubicacion={"https://maps.app.goo.gl/dw8DCdcdmrZKZHaQ8"}
      />
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
            evento: "Misa ",
            hora: "6:00 pm",
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
            evento: " Vals",
            hora: "9:00 pm",
            Icon: "dance",
          },
          {
            id: 4,
            evento: " Cena",
            hora: "9:30 pm",
            Icon: "dinner",
          },
          {
            id: 5,
            evento: "Baile!",
            hora: "10:00 pm",
            Icon: "party",
          },
        ]}
        sectionStyling={{
          lineColor: "bg-[#000]",
          lineBg: "bg-[#000]/20",
          circleColor: "stroke-[#000]",
          circleBg: "bg-gray-50",
          circleSoftStroke: "stroke-[#000]/20",
          iconColor: "text-gray-900",
          cardBg: "bg-white",
        }}
      />
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
        customBorder={"border-[#000]"}
        FraseAgradecimientoFinalColor=""
        FraseAgradecimientoFinalFont={undefined}
        FraseAgradecimientoFinalSize=""
        FraseAgradecimientoFinalText=""
        FraseAgradecimientoInicioColor={textOlive}
        FraseAgradecimientoInicioFont={undefined}
        FraseAgradecimientoInicioSize="text-xl"
        FraseAgradecimientoInicioText="Nuestro mejor regalo será
        celebrar contigo este día tan
        especial. Cualquier detalle de
        tu parte será bienvenido con
        mucho cariño.
        Les dejamos nuestras
        sugerencias:"
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
        backGround=""
        ShowLiverpool={false}
        liverpoolNoEvento="51605247"
        linkAmazon="https://www.amazon.com.mx/wedding/registry/EBH4IWT079VA"
        showAmazon={true}
        bgLiverpoolButton={bgOlive}
        linkLiverpool="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51605247"
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img2} alt="boda" className="grayscale" />
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
        <p className="  text-4xl mb-4 cell:text-xl cell:mb-1 text-[#000]">
          Vestido Largo
        </p>
        <div className="p-4">
          <p className="  border-2 border-[#000] text-[#000] rounded   font-medium  text-4xl text-center p-4 mb-4 cell:text-xl cell:mb-1">
            *Los colores verde olivo y sobre todo blanco quedan reservados para
            la novia y las damas.
          </p>
        </div>
      </div>
      <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
        {" "}
        <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
        <p className={`font-bold text-4xl ${textOlive} cell:text-2xl`}>
          Hombres
        </p>
        <p className="  text-4xl mb-4 cell:mb-1 cell:text-xl text-[#000]">
          Traje Formal
        </p>
        <div className="p-4">
          <p className="  rounded text-[#000]   font-medium  text-4xl text-center p-4 mb-4 cell:text-xl cell:mb-1">
            * No Mezclilla
          </p>
        </div>
      </div>
      {/* <motion.h2
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
      </div> */}
      <div className=" shadow-md text-center border-2  rounded-md m-2 p-2 border-[#000] ">
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

      <ConfirmacionForm
        invitationId={{ id: invitationIdForQuery.id }}
        nombreInvitado={nombre}
        pasesAsignados={pasesAsignados}
        telInvitado={tel}
        styling={{
          confirmButton: {
            backgroundColor: bgOlive,
            disabledBackgroundColor: "bg-[#000]/50",
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
