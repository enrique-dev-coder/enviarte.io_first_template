// fonts
import { dancing, sofia } from "@/fonts";
// next js
import { Metadata } from "next/types";
import { headers } from "next/headers";
// db
import prisma from "../../../../prisma";
import InvitationModern from "@/app/InvitationTemplates/InvitationModern";
import { InvitationDataTypes } from "@/types";
//images
import DressCodeMujeres from "/public/assets/images/Dress_icon.png";
import DressCodeHombres from "/public/assets/images/suit_icon-removebg-preview.png";
import Sobre from "/public/assets/images/email.png";

export const metadata: Metadata = {
  title: "Estefanía y Luis",
  description: "Bodas",
};
// server fucntions
const getInvitationId = async (name: string) => {
  const invitationId = await prisma.invitacion.findFirst({
    where: {
      invitationName: name,
    },
    select: {
      id: true,
    },
  });
  return invitationId as { id: string };
};

const IndexPage = async ({ searchParams }: any) => {
  // obtener params para personalizar la invitacion
  // dejarlos como posiblemente undefined por si se usa una  invitacion sin search params
  const nombre = searchParams?.nombre;
  const tel = searchParams?.tel;
  const pasesAsignados = searchParams?.pasesAsignados;

  const fechaEvento = new Date("2024-05-18T00:00:00");

  // obtener  el pathname del middleware
  const headersList = headers();
  const pathname = headersList.get("x-pathname"); // ejemplo: /boda/danielayjosepablo
  const invitationIdForQuery = await getInvitationId(pathname as string); // { id: '65df62e264903d5c4bb5053e' }

  // TODO: inspiracion
  // https://invites-now.com/demo-less-ivan

  // pasar aqui los datos al template
  const InvitationData: InvitationDataTypes = {
    novia: "Victoria Estefania",
    join: "&",
    novio: "Luis Alfredo",
    titleFont: dancing,
    spBackground: "flowers",
    songLink: "/assets/songs/boda-estefania-luis.mp3",
    color: "blackPalette",
    fechaEvento: new Date("2024-09-28T00:00:00"),
    fechaString: "Sábado, 28 de septiembre 2024",
    fotoContador: "bg-[url('/assets/images/estefaniayluis/contador_2.jpg')]",
    Hero: {
      frase: {
        content: "Save the date",
        font: sofia,
      },
      fecha: {
        content: "Sábado, 28 de septiembre 2024",
        font: sofia,
      },
      fotoDesktop: "bg-[url('/assets/images/estefaniayluis/hero_pc_2.jpg')]",
      fotoCell: "cell:bg-[url('/assets/images/estefaniayluis/hero_pc_2.jpg')]",
    },
    Iglesia: {
      desc: "Ceremonia Religiosa",
      nombre: {
        content: "Templo Santiago Apóstol",
        font: sofia,
      },
      direccion:
        "C. María Trinidad Sánchez 975, Los Valdez, 25209 Saltillo, Coah.",
      ubicacion: "https://maps.app.goo.gl/3JChsg4W2xoibzm29",
      hora: "5:00pm",
    },
    Recepcion: {
      desc: "Recepción",
      nombre: {
        content: "Recepciones Cairo",
        font: sofia,
      },
      direccion:
        "Lib. Óscar Flores Tapia 292-2, Colonia El Llano, 25350 Arteaga, Coah.",
      ubicacion: "https://maps.app.goo.gl/CBEapLYbc8Cxui7W9",
      hora: "8:00pm",
    },
    GraciasBanner: {
      frase: {
        content: "Estas cordialmente invitado",
        font: dancing,
        styling: { color: "text-black", size: "text-5xl cell:text-3xl" },
      },
      name: {
        content: nombre,
        font: sofia,
        styling: { color: "text-black", size: "text-5xl cell:text-3xl" },
      },
    },
    MesaRegalosProps: {
      backGround: "bg-white",
      title: {
        font: dancing,
        textColor: "text-black",
      },
      sobres: {
        enabled: true,
        textColor: "text-gray-500",
        type: "modern",
        img: Sobre,
      },
      transferencia: {
        enabled: true,
      },
      fraseDeAgradecimientoInicio: {
        enabled: true,
        text: "Nos sentimos bendecidos de tener amigos y familiares como tú en este día tan especial. Si quieres tener un detalle con nosotros te agradeceríamos un aporte financiero para ayudarnos a empezar nuestra vida juntos",
        styling: {
          font: sofia,
          size: "text-3xl cell:text-lg",
          color: "text-black",
        },
      },
      fraseDeAgradecimientoFinal: {
        enabled: true,
        text: "Por tu muestra de cariño, esperamos verte para disfrutar este gran día",
        styling: {
          font: sofia,
          size: "text-3xl cell:text-2xl",
          color: "text-black",
        },
      },
    },
    DressCodeProps: {
      backGround: "bg-white",
      title: {
        font: dancing,
        textColor: "text-black",
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
        },
        Hombres: {
          dressCodeImg: DressCodeHombres,
          textColor: "text-black",
        },
      },
    },
    ConfirmacionForm: {
      nombre: nombre,
      tel: tel,
      pasesAsignados: pasesAsignados,
      invitationId: "1",
      styling: {
        section: {
          backgroundColor: "bg-gray-50",
        },
        confirmButton: {
          backgroundColor: "bg-black",
          disabledBackgroundColor: "disabled:bg-black/50",
        },
      },
    },
    ItinerarioScrollable: {
      sectionStyling: {
        lineColor: "bg-gray-900",
        lineBg: "bg-gray-200",
        circleColor: "stroke-gray-900",
        circleBg: "bg-gray-50",
        circleSoftStroke: "stroke-gray-200",
        iconColor: "text-gray-900",
        cardBg: "bg-white",
      },
      data: [
        {
          id: 1,
          evento: "⛪️ Ceremonia Religiosa",
          hora: "5:00 pm",
          Icon: "church",
        },
        {
          id: 2,
          evento: "🥂 Recepción",
          hora: "8:00 pm",
          Icon: "recepcion",
        },
        {
          id: 3,
          evento: " 🤵👰 Entrada de los novios",
          hora: "8:30 pm",
          Icon: "dance",
        },
        {
          id: 4,
          evento: "🍽️ Cena",
          hora: "9:00 pm",
          Icon: "dinner",
        },
        {
          id: 5,
          evento: "🥳 Baile",
          hora: "10:00 pm",
          Icon: "party",
        },
      ],
    },
  };

  return <InvitationModern data={InvitationData} />;
};

export default IndexPage;
