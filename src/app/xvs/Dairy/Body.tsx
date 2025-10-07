"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import IngresarBoton from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/IngresarBoton";
import PlaceCard from "@/app/InvitationTemplates/TemplateComponents/Modern/PlaceCard";
import MesaDeRegalos from "@/app/InvitationTemplates/TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import SongButtonPlayer from "@/app/InvitationTemplates/Common/SongButtonPlayer";
import ItinerarioScrollable from "@/app/InvitationTemplates/TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import { lora, champagne, montse, paris, analogist } from "@/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contador from "./Contador";
import Reservaciones from "./Reservaciones";
//images
import fondoBonito from "/public/assets/images/xvs/Dairy/fondobonito.jpg";
import img1 from "/public/assets/images/xvs/Leyda/Hero.jpeg";
import img1v1 from "/public/assets/images/xvs/Leyda/img1.jpeg";
import img2 from "/public/assets/images/xvs/Leyda/img2.jpeg";
import img5 from "/public/assets/images/xvs/Leyda/img5.jpeg";
import img6 from "/public/assets/images/xvs/Dairy/img2.jpeg";
import img7 from "/public/assets/images/xvs/Dairy/img8.jpeg";
import img8 from "/public/assets/images/xvs/Dairy/img3.jpeg";
import img12 from "/public/assets/images/xvs/Dairy/img1.jpeg";
import { WhatsIcon } from "@/components/Dashboard/EnviarLista/Icons";
import Sobre from "/public/assets/images/email.png";
import DressCodeMujeres from "/public/assets/images/vestidolargo.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";

const textOlive = "text-[#D4A142]";
const bgOlive = "bg-[#F6C8D1]";
const lilaFuerte = "text-[#D55D8D]";

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
      songLink="/assets/songs/xvsDairy.mp3"
    >
      <IngresarBoton
        buttonText="Ingresar"
        extraClases="  !bg-transparent"
        font={paris}
        novia="Dairy"
        novio="Crisbel"
        join=""
        color={{
          bgColor: bgOlive,
          titleColor: textOlive,
          textButtonColor: "text-gray-600",
        }}
      />
      <Hero />
      <div
        style={{
          backgroundImage: `url(${fondoBonito.src})`,
        }}
        className=" relative h-auto  bg-no-repeat   "
      >
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`w-full text-center px-6 pt-6`}
        >
          <span
            className={`${analogist.className} text-4xl font-medium bg-gradient-to-r from-[#D55D8D] to-[#D4A142] bg-clip-text text-transparent`}
          >
            La vida esta hecha de momentos inolvidables, y uno de los mas
            especiales está por llegar.
            <br /> Mis XV años son un sueño que quiero compartir contigo.{" "}
          </span>
          <br />
          <br />
        </motion.p>
        <div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex  flex-col gap-1  cell:w-full   pb-4 text-center cell:text-2xl cell:text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true }}
              className={` ${textOlive} ${analogist.className} font-semibold text-center  text-[28px]    py-4 `}
            >
              Con la bendición de mis papás
            </motion.h2>
            <p
              className={` text-2xl font-bold  ${analogist.className} ${lilaFuerte}`}
            >
              Israel Fuentes
              <br />y <br /> Gaby Contreras
            </p>
          </motion.div>
        </div>
      </div>

      <Contador
        fechaEvento={new Date("2025-11-01T00:00:00")}
        fechaString="Sabado, 01 de Noviembre de 2025"
        fotoContador="bg-[url('/assets/images/xvs/Dairy/img7.jpeg')]"
      />
      <div
        style={{
          backgroundImage: `url(${fondoBonito.src})`,
        }}
        className=" relative h-auto  bg-no-repeat   "
      >
        <PlaceCard
          show={true}
          bgCard="none"
          titleColor={textOlive}
          titleFont={paris}
          bgButtonColor={"bg-gradient-to-br from-[#D55D8D] to-[#F18CB5]"}
          borderColor=""
          buttonTextColor={"text-[#FDECEF]"}
          desc={"Ceremonia Religiosa"}
          direccion={"Emilio Arizpe de la Masa #1899 Rancho el Mimbre"}
          hora={"7:30 pm "}
          nombre={{
            content: "Capilla de Hacienda el Mimbre",
            color: textOlive,
            font: analogist,
          }}
          ubicacion={"https://maps.app.goo.gl/gMXJBKp4fnMe5MQz9"}
        />
        <PlaceCard
          bgCard="none"
          show={true}
          titleColor={textOlive}
          titleFont={paris}
          bgButtonColor={"bg-gradient-to-br from-[#D55D8D] to-[#F18CB5]"}
          borderColor=""
          buttonTextColor={"text-[#FDECEF]"}
          desc={"Fiesta"}
          direccion={"Emilio Arizpe de la Masa #1899 Rancho el Mimbre"}
          hora={"8:30 pm "}
          nombre={{
            content: " Hacienda el Mimbre ",
            color: textOlive,
            font: analogist,
          }}
          ubicacion={"https://maps.app.goo.gl/gMXJBKp4fnMe5MQz9"}
        />
      </div>
      <Reservaciones
        nombreInvitado="Fam.Prueba"
        pases="4"
        fotoContador="bg-[url('/assets/images/xvs/Dairy/img9.jpeg')]"
      />
      {/* <motion.div
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
        <Image src={imgExtra} alt="boda" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img1v1} alt="boda" />
      </motion.div> */}
      <div
        style={{
          backgroundImage: `url(${fondoBonito.src})`,
        }}
        className=" relative h-auto  bg-no-repeat mt-[-40px]  "
      >
        <ItinerarioScrollable
          showItinerario={true}
          eventData={[
            {
              id: 2,
              evento: "Ceremonia religiosa ",
              hora: "7:20 pm",
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
              hora: "9:50 pm",
              Icon: "dinner",
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
        />
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`w-full text-center px-6 pt-6`}
        >
          <span
            className={`${analogist.className} text-4xl font-medium bg-gradient-to-r from-[#D55D8D] to-[#D4A142] bg-clip-text text-transparent`}
          >
            Disfruta la fiesta el resto de la noche!!!
          </span>
          <br />
          <br />
        </motion.p>
      </div>
      <div
        style={{
          backgroundImage: `url(${fondoBonito.src})`,
        }}
        className=" relative h-auto  bg-no-repeat   "
      >
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={img7} alt="boda" />
        </motion.div>

        <MesaDeRegalos
          customBorder={"border-[#b579ae]"}
          FraseAgradecimientoFinalColor=""
          FraseAgradecimientoFinalFont={undefined}
          FraseAgradecimientoFinalSize=""
          FraseAgradecimientoFinalText=""
          FraseAgradecimientoInicioColor={textOlive}
          FraseAgradecimientoInicioFont={undefined}
          FraseAgradecimientoInicioSize="text-xl"
          FraseAgradecimientoInicioText=""
          SectionTitleColor={textOlive}
          SectionTitleFont={paris}
          ShowFraseDeAgradecimientoFinal={false}
          ShowFraseDeAgradecimientoInicio={false}
          ShowRegalo={false}
          ShowSobres={true}
          ShowTransferencia={false}
          datosTransferencia={{
            numero: `Cuenta Banorte\n 4189 1430 1947 2664`,
            owner: "",
          }}
          SobresImg={Sobre}
          SobresTextColor={textOlive}
          SobresTextContent="Lluvia de sobres"
          SobresType="modern"
          backGround=""
          ShowLiverpool={false}
          liverpoolNoEvento="51605247"
          showAmazon={false}
          bgLiverpoolButton={bgOlive}
          linkLiverpool=""
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img12} alt="boda" />
      </motion.div>
      <div
        style={{
          backgroundImage: `url(${fondoBonito.src})`,
        }}
        className=" relative h-auto  bg-no-repeat py-4  "
      >
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${paris.className} text-center ${textOlive} font-bold   text-5xl cell:text-6xl py-4 `}
        >
          Dress Code
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${analogist.className} text-center ${textOlive} font-bold underline   text-5xl cell:text-6xl py-4 `}
        >
          Formal
        </motion.h2>
        <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
          {" "}
          <Image alt="boda" src={DressCodeMujeres} className="w-[50%]" />
          <p
            className={`${analogist.className} font-bold text-4xl ${textOlive} cell:text-4xl`}
          >
            Mujeres
          </p>
          <p className="  text-4xl mb-4 cell:text-4xl cell:mb-1">Vestido</p>
          <p
            className={`text-pink-400 ${analogist.className} bg-white    rounded-md border border-pink-500 text-4xl p-4 m-4  font-semibold cell:text-3xl cell:mb-1 text-center px-4 my-2"`}
          >
            ❗❗ Nos reservamos el color rosa para la quinceañera{" "}
          </p>
        </div>
        <div className="w-6/12 flex flex-col justify-center items-center cell:w-full">
          {" "}
          <Image alt="boda" src={DressCodeHombres} className="w-[35%]" />
          <p
            className={`${analogist.className} font-bold text-4xl ${textOlive} cell:text-4xl`}
          >
            Hombres
          </p>
          <p className="  text-4xl mb-4 cell:text-4xl cell:mb-1">Traje</p>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true }}
      >
        <Image src={img8} alt="boda" />
      </motion.div>
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${textOlive}  text-center ${analogist.className}  text-[28px] p-4 `}
        >
          Confirma tu asistencia en el siguiente boton
        </motion.p>
      </div>
      <div>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className={`${textOlive}  uppercase text-center ${champagne.className}  text-[28px] p-4 font-bold`}
        >
          Fecha límite de confirmación 20 de Octubre de 2025
        </motion.p>
      </div>
      <div className="relative">
        <div className="  py-2">
          <div className="flex flex-col justify-center items-center py-2">
            <p
              className={`${lora.className} ${textOlive} text-4xl cell:text-2xl text-center font-bold`}
            >
              Planner <br /> Viviana Amare
            </p>
            <a href="https://api.whatsapp.com/send?phone=5218421088081&text=Hola!%20Me%20gustar%C3%ADa%20confirmar%20mi%20asistencia%20a%20los%20quinces%20de%20Dairy">
              <button
                className={`bg-gradient-to-br from-[#D55D8D] to-[#F18CB5] flex items-center gap-3  my-3 rounded-full px-4 py-2`}
              >
                <WhatsIcon className="fill-white text-2xl " />
                <p className=" text-3xl text-white ">842 108 8081 </p>
              </button>
            </a>
          </div>
        </div>
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
