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
import img1 from "/public/assets/images/fabiolaydiego/fyd_img_1.jpeg";
import img2 from "/public/assets/images/fabiolaydiego/fyd_img_2.jpeg";
import img3 from "/public/assets/images/fabiolaydiego/fyd_img_3.jpeg";
import img4 from "/public/assets/images/fabiolaydiego/fyd_img_4.jpeg";

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
    color: "pinkPalette",
    fechaEvento: new Date("2024-09-13T00:00:00"),
    fechaString: "Viernes, 13 de septiembre 2024",
    fotoContador: "bg-[url('/assets/images/fabiolaydiego/contador.jpeg')]",
    InfoBanner: {
      enabled: true,
      fraseBiblica: {
        enabled: false,
      },
      padres: {
        enabled: true,
        title: {
          textColor: "text-[#f43f5e]",
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
        textColor: "text-[#fff1f2]",
        content: "Save the date",
        font: analogist,
      },
      fecha: {
        content: "Sábado, 28 de septiembre 2024",
        font: analogist,
        textColor: "text-[#fff1f2]",
      },
      fotoDesktop: "bg-[url('/assets/images/fabiolaydiego/hero.jpeg')]",
      fotoCell: "cell:bg-[url('/assets/images/fabiolaydiego/hero.jpeg')]",
    },
    Iglesia: {
      titleColor: "text-[#f43f5e]",
      bgButtonColor: "bg-[#fb7185]",
      desc: "Ceremonia Religiosa",
      nombre: {
        content: "Parroquia del Sagrario de la Catedral. ( Catedral )",
        font: analogist,
      },
      direccion: "Gral. Nicolás Bravo 127, Zona Centro, 25000 Saltillo, Coah.",
      ubicacion: "https://maps.app.goo.gl/RTNjnZvVBCkEDMJLA",
      hora: "5:00pm",
    },
    Recepcion: {
      desc: "Recepción",
      titleColor: "text-[#f43f5e]",
      bgButtonColor: "bg-[#fb7185]",
      nombre: {
        content: "Quinta Alborada",
        font: analogist,
      },
      direccion:
        'Quinta "La Alborada, Blvd. Luis Donaldo Colosio #265 Col, La Aurora, 25298 Saltillo, Coah.',
      ubicacion: "https://maps.app.goo.gl/U4DvRtv89MvJitSw5",
      hora: " 7:30 pm civil - recepción 8:30 pm",
    },
    GraciasBanner: {
      enabled: false,
    },
    MesaRegalosProps: {
      backGround: "bg-white",
      title: {
        font: dancing,
        textColor: "text-[#f43f5e]",
      },
      sobres: {
        enabled: true,
        frase: "Lluvia de sobres o sobre",
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
      enabled: false,
    },
    ItinerarioScrollable: {
      enabled: false,
    },
    ImageGallery: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
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
