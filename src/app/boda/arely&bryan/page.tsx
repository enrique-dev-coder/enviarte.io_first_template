import Body from "./Body";
import { headers } from "next/headers";
import prisma from "../../../../prisma";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Arely & Bryan",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Arely & Bryan",
    title: "Arely & Bryan - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/arely&bryan",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/arely&bryan/hero.jpeg",
        width: 256,
        height: 425,
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
  console.log(invitationIdForQuery);
  return (
    <Body
      nombre={nombre}
      tel={tel}
      pasesAsignados={pasesAsignados}
      invitationIdForQuery={invitationIdForQuery}
    />
  );
};

export default page;
