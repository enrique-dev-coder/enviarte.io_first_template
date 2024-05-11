// fonts
import { dancing } from "@/fonts";
// next js
import { Metadata } from "next/types";
import { headers } from "next/headers";
// db
import prisma from "../../../../prisma";
import InvitationModern from "@/app/InvitationTemplates/InvitationModern";
import { InvitationDataTypes } from "@/types";

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
    novia: "Estefanía",
    join: "+",
    novio: "Luis",
    titleFont: dancing,
    spBackground: "flowers",
    color: "blackPalette",
    fechaEvento: new Date("2024-09-28T00:00:00"),
    fechaString: "Sábado, 28 de septiembre 2024",
    Hero: {
      frase: "Save the date",
      fecha: "Sábado, 28 de septiembre 2024",
    },
    Iglesia: {
      desc: "Ceremonia Religiosa",
      nombre: "Templo Santiago Apóstol",
      direccion:
        "C. María Trinidad Sánchez 975, Los Valdez, 25209 Saltillo, Coah.",
      ubicacion: "https://maps.app.goo.gl/3JChsg4W2xoibzm29",
      hora: "5:00pm",
    },
    Recepcion: {
      desc: "Recepción",
      nombre: "Recepciones Cairo",
      direccion:
        "Lib. Óscar Flores Tapia 292-2, Colonia El Llano, 25350 Arteaga, Coah.",
      ubicacion: "https://maps.app.goo.gl/CBEapLYbc8Cxui7W9",
      hora: "8:00pm",
    },
  };

  return <InvitationModern data={InvitationData} />;
};

export default IndexPage;
