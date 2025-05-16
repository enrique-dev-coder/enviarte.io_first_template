import Body from "./Body";
import { headers } from "next/headers";
import prisma from "../../../../prisma";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Xvs Jade",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Xvs Jade",
    title: "Xvs Jade",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/xvs/Jade",
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
  const nombre = searchParams?.nombre || "nombre invitado";
  const tel = searchParams?.tel || "Tel invitado";
  const pasesAsignados = searchParams?.pasesAsignados || "2";

  // obtener  el pathname del middleware
  const headersList = headers();
  const pathname = headersList.get("x-pathname"); // ejemplo: /boda/danielayjosepablo
  const invitationIdForQuery = await getInvitationId(pathname as string); // { id: '65df62e264903d5c4bb5053e' }
  return (
    <Body
      nombre={nombre}
      tel={tel}
      pasesAsignados={pasesAsignados}
      invitationIdForQuery={invitationIdForQuery || 1}
    />
  );
};

export default page;
