import React from "react";
import InvitationContainer from "@/components/wrappers/InvitationContainer";
import SongPlayer from "@/components/sections/SongPlayer";
import IngresarBoton from "./CommonComponents/IngresarBoton";
import { dancing, lora } from "@/fonts";
import HeroSection from "./HeroSections";
import Contador from "./Contadores";
import GaleriaFotos from "./GaleriaFotos";
import Iglesia from "./CommonComponents/Iglesia";
import MesaDeRegalos from "../Customized/CommonComponents/MesaDeRegalos";
import DressCode from "./CommonComponents/CofigoDeVestimenta";
import Confirmacion from "./Confirmacion";
// Static Img
import img1 from "/public/assets/images/karlayhector/kyh_3.jpeg";
import img2 from "/public/assets/images/karlayhector/kyh_2.jpeg";
import img3 from "/public/assets/images/karlayhector/kyh_8.jpeg";
import img4 from "/public/assets/images/karlayhector/kyh_9.jpeg";
import BendicionFamilias from "./CommonComponents/BendicionFamilias";
import Recepcion from "./CommonComponents/Recepcion";
import BannerConFoto from "./CommonComponents/BannerConFoto";

const CustomizedTemplate = () => {
  const invitationData = {
    IngresarBotonProps: {
      font: dancing,
      novia: "Karla",
      novio: "Hector",
      join: "&",
      color: {
        titleColor: "text-slate-900",
        bgColor: "bg-[#ffcf40]",
        textButtonColor: "text-slate-900",
      },
    },
    HeroSectionProps: {
      simplified: {
        fraseIncial: {
          text: "Tenemos el honor de invitarte a celebrar Nuestra Boda",
          size: "text-3xl",
          color: "text-[#ffcf40]",
        },
        backgroundPictures: {
          desktop: "bg-[url('/assets/images/karlayhector/kyh_2.jpeg')]",
          cell: "cell:bg-[url('/assets/images/karlayhector/hero_cell.jpeg')]",
        },
        nombreNovios: {
          font: dancing,
          novia: "Karla",
          novio: "Hector",
          textColor: "text-[#ffcf40]",
          join: {
            color: "text-white",
            symbolo: "&",
          },
        },
      },
    },
    ContadorProps: {
      floral: {
        fecha: new Date("2024-06-22T00:00:00"),
        fechaTexto: {
          color: "text-[#ffcf40]",
          desc: "22 de Junio, 2024",
          font: dancing,
        },
        textColor: "text-yellow-50",
        showSeparator: false,
        showCornerImg: false,
        backGround: "bg-neutral-800",
      },
    },
    GaleriaFotosProps: {
      backGround: "bg-neutral-800",
      imgList: [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
      ],
    },
    Bendiciones: {
      backGround: "bg-neutral-800",
      frase: {
        desc: "Con la bendición de Dios y de nuestras familias:",
        textColor: "text-[#ffcf40]",
        font: lora,
      },
      familias: {
        novia: "Catañeda Sixto",
        novio: "López González",
        font: dancing,
        textColor: "text-[#ffcf40]",
      },
    },
    IglesiaProps: {
      backGround: "bg-neutral-800",
      title: {
        font: dancing,
        textColor: "text-[#ffcf40]",
      },
      sectionTextColor: "text-yellow-50",
      nombre: "Parroquia San Pablo Apostol",
      horas: "20:00 horas",
      direccion:
        "Blvd. Pedro Figueroa s/n, Real de Peña, 25210 Saltillo, Coah.",
      ubicacion: "https://maps.app.goo.gl/X8Y4Fyp1QAH9AVqv9",
      buttonStyles: {
        font: dancing,
        bg: "bg-[#a67c00]",
        textColor: "text-yellow-50",
      },
    },
    RecepcionProps: {
      backGround: "bg-neutral-800",
      title: {
        font: dancing,
        textColor: "text-[#ffcf40]",
      },
      sectionTextColor: "text-yellow-50",
      nombre: "Recepciones Trei",
      horas: "21:00 horas",
      direccion: "Los Rodríguez, 25200 Saltillo, Coah.",
      ubicacion: "https://maps.app.goo.gl/4HjA2nnfJuwqH3YGA",
      buttonStyles: {
        font: dancing,
        bg: "bg-[#a67c00]",
        textColor: "text-yellow-50",
      },
    },
    MesaRegalosProps: {
      backGround: "bg-neutral-800",
      title: {
        font: dancing,
        textColor: "text-[#ffcf40]",
      },
      sobres: {
        enabled: true,
        textColor: "text-yellow-50",
      },
    },
    DressCodeProps: {
      backGround: "bg-neutral-800",
      title: {
        font: dancing,
        textColor: "text-[#ffcf40]",
      },
      desc: {
        text: "Temática black te pedimos asistir formal color negro",
        color: "text-yellow-50",
      },
    },
    ConfimacionProps: {
      SoloPlannerMode: {
        backGround: "bg-neutral-800",
        title: {
          font: dancing,
          textColor: "text-[#ffcf40]",
        },
      },
    },
  };
  const {
    IngresarBotonProps,
    HeroSectionProps,
    ContadorProps,
    GaleriaFotosProps,
    Bendiciones,
    IglesiaProps,
    RecepcionProps,
    MesaRegalosProps,
    DressCodeProps,
  } = invitationData;
  return (
    <InvitationContainer songLink="/song.mp3">
      <IngresarBoton
        font={IngresarBotonProps.font}
        novia={IngresarBotonProps.novia}
        novio={IngresarBotonProps.novio}
        join={IngresarBotonProps.join}
        color={IngresarBotonProps.color}
      />
      <HeroSection
        model="simplified"
        heroSectionDataSimplified={HeroSectionProps.simplified}
      />
      <Contador model="floral" contadorPropsFloral={ContadorProps.floral} />
      <GaleriaFotos galeriaFotosProps={GaleriaFotosProps} />
      <BendicionFamilias bendicionFamiliasProps={Bendiciones} />
      <Iglesia iglesiaProps={IglesiaProps} />
      <Recepcion recepcionProps={RecepcionProps} />
      <BannerConFoto />
      <MesaDeRegalos mesaDeRegalosProps={MesaRegalosProps} />
      <DressCode dressCodeProps={DressCodeProps} />
      <Confirmacion model="soloPlanner" />
      <SongPlayer />
    </InvitationContainer>
  );
};

export default CustomizedTemplate;
