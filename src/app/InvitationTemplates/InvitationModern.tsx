"use client";
import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import Hero from "./TemplateComponents/Modern/Hero";
import IngresarBoton from "./Common/IngresarBoton";
import { InvitationDataTypes } from "@/types";
import SongButtonPlayer from "./Common/SongButtonPlayer";
import Contador from "./TemplateComponents/Modern/Contador";
import InfoBanner from "./TemplateComponents/Modern/InfoBanner";
import Padres from "./TemplateComponents/Modern/Padres";
import PlaceCard from "./TemplateComponents/Modern/PlaceCard";
import ModernBanner from "./TemplateComponents/Modern/ModernBanner";
import DressCode from "./TemplateComponents/Customized/CommonComponents/CofigoDeVestimenta";
import MesaDeRegalos from "./TemplateComponents/Customized/CommonComponents/MesaDeRegalos";
import ConfirmacionForm from "@/components/sections/ConfirmacionForm";
import GraciasBanner from "./TemplateComponents/Customized/Agradecimientos/GraciasBanner";
import ItinerarioScrollable from "./TemplateComponents/Customized/Itinerarios/ItinerarioScrollable";
import PadrinosDeBoda from "./TemplateComponents/Customized/PadrinosDeBoda";
import ConfirmacionViviana from "./TemplateComponents/Modern/ConfirmacionViviana";

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
        translateYVal={data.Hero.frase.centerWithTranslateY}
      />
      <InfoBanner
        showBanner={data.InfoBanner?.enabled}
        showPadres={data.InfoBanner?.padres?.enabled}
        showFraseBibilica={data.InfoBanner?.fraseBiblica?.enabled}
        padresNovia={data.InfoBanner?.padres?.padresNovia}
        padresNovio={data.InfoBanner?.padres?.padresNovio}
        padresColor={data.InfoBanner?.padres?.padresText?.textColor}
        titleFamiliaColor={data.InfoBanner?.padres?.title?.textColor}
        padresFont={data.InfoBanner?.padres?.padresText?.font}
      />
      <Contador
        fotoContador={data.fotoContador}
        fechaEvento={data.fechaEvento}
        fechaString={data.fechaString}
        color="pinkPalette"
      />
      <GraciasBanner
        showBanner={data.GraciasBanner?.enabled}
        frase={data.GraciasBanner?.frase}
        name={data.GraciasBanner?.name}
      />
      <SongButtonPlayer backgroundColor={data.songplayerBgColor} />
      <PlaceCard
        show={data.Iglesia.enabled}
        titleColor={data?.Iglesia?.titleColor}
        titleFont={data?.Iglesia?.titleFont}
        bgButtonColor={data?.Iglesia?.bgButtonColor}
        desc={data?.Iglesia?.desc}
        direccion={data?.Iglesia?.direccion}
        hora={data?.Iglesia?.hora}
        nombre={data?.Iglesia?.nombre}
        ubicacion={data?.Iglesia?.ubicacion}
      />
      <PlaceCard
        show={data.Recepcion.enabled}
        bgButtonColor={data.Recepcion.bgButtonColor}
        titleColor={data.Recepcion.titleColor}
        titleFont={data.Recepcion.titleFont}
        desc={data.Recepcion.desc}
        direccion={data.Recepcion.direccion}
        hora={data.Recepcion.hora}
        nombre={data.Recepcion.nombre}
        ubicacion={data.Recepcion.ubicacion}
      />
      <ItinerarioScrollable
        showItinerario={data.ItinerarioScrollable.enabled}
        sectionStyling={data.ItinerarioScrollable.sectionStyling}
        eventData={data.ItinerarioScrollable.data}
      />
      <ModernBanner ImageGalleryList={data.ImageGallery.list} />
      <PadrinosDeBoda
        showSlider={true}
        padrinos={[
          {
            madrinasRamos: false,
            madrina: "Karina Gonzalez",
            padrino: "Ricardo Nieto",
            tema: "Padrinos de Velación",
          },
          {
            madrinasRamos: false,
            madrina: "Martha Hernandez",
            padrino: "Juventino Gonzalez",
            tema: "Padrinos de Arras y lazo",
          },
          {
            madrinasRamos: false,
            madrina: "Elida Galaviz",
            padrino: "Victor Aguilar",
            tema: "Padrinos de Argollas",
          },
        ]}
      />
      <MesaDeRegalos
        ShowLiverpool={false}
        showAmazon={false}
        FraseAgradecimientoFinalColor={
          data.MesaRegalosProps.fraseDeAgradecimientoFinal?.styling?.color
        }
        FraseAgradecimientoFinalFont={
          data.MesaRegalosProps.fraseDeAgradecimientoFinal.styling?.font
        }
        FraseAgradecimientoFinalText={
          data.MesaRegalosProps.fraseDeAgradecimientoFinal.text
        }
        FraseAgradecimientoInicioFont={
          data.MesaRegalosProps.fraseDeAgradecimientoInicio.styling?.font
        }
        FraseAgradecimientoFinalSize={
          data.MesaRegalosProps.fraseDeAgradecimientoFinal.styling?.size
        }
        FraseAgradecimientoInicioColor={
          data.MesaRegalosProps.fraseDeAgradecimientoInicio.styling?.color
        }
        FraseAgradecimientoInicioSize={
          data.MesaRegalosProps.fraseDeAgradecimientoInicio.styling?.size
        }
        FraseAgradecimientoInicioText={
          data.MesaRegalosProps.fraseDeAgradecimientoInicio.text
        }
        ShowFraseDeAgradecimientoFinal={
          data.MesaRegalosProps.fraseDeAgradecimientoFinal.enabled
        }
        ShowFraseDeAgradecimientoInicio={
          data.MesaRegalosProps.fraseDeAgradecimientoInicio.enabled
        }
        ShowRegalo={data.MesaRegalosProps.regalo.enabled}
        ShowSobres={data.MesaRegalosProps.sobres.enabled}
        ShowTransferencia={data.MesaRegalosProps.transferencia.enabled}
        SobresImg={data.MesaRegalosProps.sobres.img}
        SobresTextColor={data.MesaRegalosProps.sobres.textColor}
        SobresTextContent={data.MesaRegalosProps.sobres.frase}
        SobresType={data.MesaRegalosProps.sobres.type}
        SectionTitleColor={data.MesaRegalosProps.title.textColor}
        SectionTitleFont={data.MesaRegalosProps.title.font}
        backGround={data.MesaRegalosProps.backGround}
      />
      <DressCode dressCodeProps={data.DressCodeProps} />
      {data.ConfirmacionForm.enabled && (
        <ConfirmacionForm
          invitationId={{ id: data.ConfirmacionForm.invitationId }}
          nombreInvitado={data.ConfirmacionForm.nombre}
          pasesAsignados={data.ConfirmacionForm.pasesAsignados}
          telInvitado={data.ConfirmacionForm.tel}
          styling={data.ConfirmacionForm.styling}
        />
      )}
      {data.ConfirmacionInvViviana.enabled && (
        <ConfirmacionViviana
          descTextSize={data.ConfirmacionInvViviana.descStyling?.textSize}
          descFontWeight={data.ConfirmacionInvViviana.descStyling?.fontWeight}
          buttonBorderColor={data.ConfirmacionInvViviana.buttonStyling?.border}
        />
      )}
    </InvitationContainer>
  );
};

export default InvitationModern;
