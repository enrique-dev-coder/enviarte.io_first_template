import Body from "./Body";
import { headers } from "next/headers";
import prisma from "../../../../prisma";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "This Barbie Is Turning 29",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "",
    title: "Anabell - This Barbie Is Turning 29",
    description: " Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/luz&gustavo",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/anabell.PNG",
        width: 256,
        height: 256,
        alt: "Imagen de la boda de Arely y Bryan ",
      },
    ],
  },
};

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
const page = async ({ searchParams }: any) => {
  const nombre = searchParams?.nombre;
  const tel = searchParams?.tel;
  const pasesAsignados = searchParams?.pasesAsignados;

  // obtener  el pathname del middleware
  const headersList = headers();
  const pathname = headersList.get("x-pathname"); // ejemplo: /boda/danielayjosepablo
  const invitationIdForQuery = await getInvitationId(pathname as string); // { id: '65df62e264903d5c4bb5053e' }
  const extraBg = "bg-[#f2ebe2]";

  return (
    <div className={`${extraBg} `}>
      <Body
        nombre={nombre}
        tel={tel}
        pasesAsignados={pasesAsignados}
        invitationIdForQuery={invitationIdForQuery}
      />
    </div>
  );
};

export default page;
