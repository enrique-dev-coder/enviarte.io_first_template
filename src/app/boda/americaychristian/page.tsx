// fonts
import { analogist, dancing, sofia } from "@/fonts";
// next js
import { Metadata } from "next/types";
// db
import prisma from "../../../../prisma";
import InvitationModern from "@/app/InvitationTemplates/InvitationModern";
import { InvitationDataTypes } from "@/types";
//images
import DressCodeMujeres from "/public/assets/images/Dress_icon.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";
import Sobre from "/public/assets/images/email.png";
// image gallery
import img2 from "/public/assets/images/americaychristian/ayc_2.jpeg";
import img3 from "/public/assets/images/americaychristian/ayc_3.jpeg";
import img4 from "/public/assets/images/americaychristian/ayc_4.jpeg";
import img5 from "/public/assets/images/americaychristian/ayc_5.jpeg";
import img6 from "/public/assets/images/americaychristian/ayc_6.jpeg";
import img7 from "/public/assets/images/americaychristian/ayc_7.jpeg";
import img8 from "/public/assets/images/americaychristian/ayc_8.jpeg";

export const metadata: Metadata = {
  title: "America y Christian",
  description: "Bodas",
};

const IndexPage = async ({ searchParams }: any) => {
  // pasar aqui los datos al template
  const InvitationData: InvitationDataTypes = {
    novia: "América",
    join: "&",
    novio: "Christian",
    titleFont: dancing,
    spBackground: "flowers",
    songLink: "/assets/songs/boda-america-christian.mp3",
    songplayerBgColor: "bg-[#60a5fa]/70",
    color: "bluePalette",
    fechaEvento: new Date("2024-09-14T00:00:00"),
    fechaString: "Sábado, 14 de septiembre 2024",
    fotoContador: "bg-[url('/assets/images/americaychristian/ayc_1.jpeg')]",
    InfoBanner: {
      enabled: false,
    },
    Hero: {
      frase: {
        textColor: "text-[#7dd3fc]",
        content: "Save the date",
        font: analogist,
        centerWithTranslateY: 210,
      },
      fecha: {
        content: "14 de septiembre 2024",
        font: analogist,
        textColor: "text-[#7dd3fc]",
      },
      fotoDesktop: "bg-[url('/assets/images/americaychristian/hero.jpeg')]",
      fotoCell:
        "cell:bg-bg-[url('/assets/images/americaychristian/ayc_1.jpeg')]",
    },
    Iglesia: {
      enabled: false,
    },
    Recepcion: {
      enabled: true,
      desc: "Recepción",
      titleColor: "text-[#60a5fa]",
      titleFont: dancing,
      bgButtonColor: "bg-[#60a5fa]",
      nombre: {
        content: "Eventos Jardín",
        font: analogist,
      },
      direccion: "Hidalgo 2040, República Oriente, 25280 Saltillo, Coah.",
      ubicacion: "https://maps.app.goo.gl/JdLpj5u4k5GiD5j38",
      hora: " 7:00 pm",
    },
    GraciasBanner: {
      enabled: false,
    },
    MesaRegalosProps: {
      backGround: "bg-white",
      title: {
        font: dancing,
        textColor: "text-[#60a5fa]",
      },
      sobres: {
        enabled: true,
        frase: "Lluvia de sobres o regalo",
        textColor: "text-gray-500",
        type: "modern",
        img: Sobre,
      },
      transferencia: {
        enabled: false,
      },
      fraseDeAgradecimientoInicio: {
        enabled: false,
      },
      fraseDeAgradecimientoFinal: {
        enabled: false,
      },
      regalo: {
        enabled: false,
      },
    },
    DressCodeProps: {
      backGround: "bg-white",
      title: {
        font: dancing,
        textColor: "text-[#60a5fa]",
      },
      desc: {
        text: "Formal",
        color: "text-gray-800",
      },
      iconSection: {
        show: true,
        Mujeres: {
          dressCodeImg: DressCodeMujeres,
          textColor: "text-black",
          extraDesc: "",
        },
        Hombres: {
          dressCodeImg: DressCodeHombres,
          textColor: "text-black",
        },
      },
    },
    ConfirmacionForm: {
      enabled: false,
    },
    ItinerarioScrollable: {
      enabled: false,
    },
    ImageGallery: {
      list: [img2, img5, img3, img4, img6, img8, img7],
    },
    PadrinosSlider: {
      enabled: false,
    },
    ConfirmacionInvViviana: {
      enabled: true,
      descStyling: {
        textSize: "text-4xl cell:text-xl",
        fontWeight: "font-semibold",
      },
      buttonStyling: {
        border: "border-[#60a5fa]",
      },
    },
  };

  return <InvitationModern data={InvitationData} />;
};

export default IndexPage;
