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

const InvitationModern = ({ data }: { data: InvitationDataTypes }) => {
  return (
    <InvitationContainer spBackground={data.spBackground} songLink="/">
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
      />
      <TestBanner />
      <Contador
        fechaEvento={data.fechaEvento}
        fechaString={data.fechaString}
        color="blackPalette"
      />
      <SongButtonPlayer color={data.color} />
      <Padres />
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
    </InvitationContainer>
  );
};

export default InvitationModern;
