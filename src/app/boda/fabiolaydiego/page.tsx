// fonts
import { analogist, dancing, sofia } from "@/fonts";
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
// image gallery
import img0 from "/public/assets/images/fabiolaydiego/counter.jpeg";
import img1 from "/public/assets/images/fabiolaydiego/fyd_img_1.jpeg";
import img2 from "/public/assets/images/fabiolaydiego/fyd_img_2.jpeg";
import img3 from "/public/assets/images/fabiolaydiego/fyd_img_3.jpeg";
import img4 from "/public/assets/images/fabiolaydiego/fyd_img_4.jpeg";
import img5 from "/public/assets/images/fabiolaydiego/fyd_img_5.jpeg";
import img6 from "/public/assets/images/fabiolaydiego/fyd_img_6.jpeg";
import img8 from "/public/assets/images/fabiolaydiego/fyd_img_8.jpeg";

export const metadata: Metadata = {
  title: "Fabiola y Diego",
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
  console.log(tel, pasesAsignados);
  const fechaEvento = new Date("2024-05-18T00:00:00");

  // obtener  el pathname del middleware
  const headersList = headers();
  const pathname = headersList.get("x-pathname"); // ejemplo: /boda/danielayjosepablo
  const invitationIdForQuery = await getInvitationId(pathname as string); // { id: '65df62e264903d5c4bb5053e' }

  // TODO: inspiracion
  // https://invites-now.com/demo-less-ivan

  // pasar aqui los datos al template
  const InvitationData: InvitationDataTypes = {
    novia: "Fabiola",
    join: "&",
    novio: "Diego",
    titleFont: dancing,
    spBackground: "flowers",
    songLink: "/assets/songs/boda-fabiola-diego.mp3",
    songplayerBgColor: "bg-[#d5a1d3]/70",
    color: "pinkPalette",
    fechaEvento: new Date("2024-09-13T00:00:00"),
    fechaString: "Viernes, 13 de septiembre 2024",
    fotoContador: "bg-[url('/assets/images/fabiolaydiego/counter.jpeg')]",
    InfoBanner: {
      enabled: true,
      fraseBiblica: {
        enabled: false,
      },
      padres: {
        enabled: true,
        title: {
          textColor: "text-[#d5a1d3]",
        },
        padresText: {
          font: analogist,
          textColor: "text-black",
        },
        padresNovia:
          "Juanita Fabiola Vazquez Espinoza y José Luis Puente Sanchez",
        padresNovio:
          "Rosa Maria Olivares Montenegro y José carmen  Ramirez Gallegos.",
      },
    },
    Hero: {
      frase: {
        textColor: "text-[#f8f0f8]",
        content: "Save the date",
        font: analogist,
      },
      fecha: {
        content: "13 de septiembre 2024",
        font: analogist,
        textColor: "text-[#f8f0f8]",
      },
      fotoDesktop: "bg-[url('/assets/images/fabiolaydiego/hero.jpeg')]",
      fotoCell: "cell:bg-[url('/assets/images/fabiolaydiego/hero.jpeg')]",
    },
    Iglesia: {
      titleColor: "text-[#d5a1d3]",
      bgButtonColor: "bg-[#d5a1d3]",
      titleFont: dancing,
      desc: "Ceremonia Religiosa",
      nombre: {
        content: "Catedral Santiago Apóstol",
        font: analogist,
      },
      direccion: "Gral. Nicolás Bravo 127, Zona Centro, 25000 Saltillo, Coah.",
      ubicacion: "https://maps.app.goo.gl/RTNjnZvVBCkEDMJLA",
      hora: "5:00pm",
    },
    Recepcion: {
      desc: "Recepción",
      titleColor: "text-[#d5a1d3]",
      titleFont: dancing,
      bgButtonColor: "bg-[#d5a1d3]",
      nombre: {
        content: "Quinta Alborada",
        font: analogist,
      },
      direccion:
        'Quinta "La Alborada, Blvd. Luis Donaldo Colosio #265 Col, La Aurora, 25298 Saltillo, Coah.',
      ubicacion: "https://maps.app.goo.gl/U4DvRtv89MvJitSw5",
      hora: " 7:30 pm civil - recepción 8:00 pm",
    },
    GraciasBanner: {
      enabled: false,
    },
    MesaRegalosProps: {
      backGround: "bg-white",
      title: {
        font: dancing,
        textColor: "text-[#d5a1d3]",
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
        textColor: "text-[#d5a1d3]",
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
          extraDesc:
            "* Código de vestimenta: en esta boda los colores blanco y lila o derivados, los reservamos. Elige otros colores",
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
      list: [img0, img1, img2, img5, img3, img4, img6, img8],
    },
    PadrinosSlider: {
      enabled: false,
    },
    ConfirmacionInvViviana: {
      enabled: true,
    },
  };

  return <InvitationModern data={InvitationData} />;
};

export default IndexPage;
