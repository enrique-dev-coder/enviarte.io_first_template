"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import Hero from "./TemplateComponents/Modern/Hero";
import IngresarBoton from "./Common/IngresarBoton";
import { InvitationDataTypes } from "@/types";
import SongButtonPlayer from "./Common/SongButtonPlayer";
import Contador from "./TemplateComponents/Modern/Contador";
import TestBanner from "./TemplateComponents/Modern/TestBanner";
import Padres from "./TemplateComponents/Modern/Padres";
import PlaceCard from "./TemplateComponents/Modern/PlaceCard";
import ModernBanner from "./TemplateComponents/Modern/ModernBanner";
import DressCode from "./TemplateComponents/Customized/CommonComponents/CofigoDeVestimenta";
import MesaDeRegalos from "./TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import GraciasBanner from "./TemplateComponents/Customized/Agradecimientos/GraciasBanner";
import ItinerarioScrollable from "./TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import PadrinosDeBoda from "./TemplateComponents/Customized/PadrinosDeBoda";

const InvitationModern = ({ data }: { data: InvitationDataTypes }) => {
  return (
    <InvitationContainer
      spBackground={data.spBackground}
      songLink={data.songLink}
    >
      <IngresarBoton
        novio={data.novio}
        novia={data.novia}
        font={data.titleFont}
        color={data.color}
      />
      <Hero
        frase={data.Hero.frase}
        join={data.join}
        novia={data.novia}
        novio={data.novio}
        font={data.titleFont}
        fecha={data.Hero.fecha}
        fotoDesktop={data.Hero.fotoDesktop}
        fotoCell={data.Hero.fotoCell}
      />
      <TestBanner />
      <Contador
        fotoContador={data.fotoContador}
        fechaEvento={data.fechaEvento}
        fechaString={data.fechaString}
        color="blackPalette"
      />
      <GraciasBanner
        frase={data.GraciasBanner.frase}
        name={data.GraciasBanner.name}
      />
      <SongButtonPlayer color={data.color} />
      <PlaceCard
        desc={data.Iglesia.desc}
        direccion={data.Iglesia.direccion}
        hora={data.Iglesia.hora}
        nombre={data.Iglesia.nombre}
        ubicacion={data.Iglesia.ubicacion}
      />
      <PlaceCard
        desc={data.Recepcion.desc}
        direccion={data.Recepcion.direccion}
        hora={data.Recepcion.hora}
        nombre={data.Recepcion.nombre}
        ubicacion={data.Recepcion.ubicacion}
      />
      <ItinerarioScrollable
        sectionStyling={data.ItinerarioScrollable.sectionStyling}
        eventData={data.ItinerarioScrollable.data}
      />
      <ModernBanner />
      <PadrinosDeBoda />
      <MesaDeRegalos mesaDeRegalosProps={data.MesaRegalosProps} />
      <DressCode dressCodeProps={data.DressCodeProps} />
      <ConfirmacionForm
        invitationId={{ id: data.ConfirmacionForm.invitationId }}
        nombreInvitado={data.ConfirmacionForm.nombre}
        pasesAsignados={data.ConfirmacionForm.pasesAsignados}
        telInvitado={data.ConfirmacionForm.pasesAsignados}
        styling={data.ConfirmacionForm.styling}
      />
    </InvitationContainer>
  );
};

export default InvitationModern;
