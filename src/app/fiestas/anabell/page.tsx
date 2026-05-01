import Body from "./Body";
import { headers } from "next/headers";

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

const page = async ({ searchParams }: any) => {
  // obtener  el pathname del middleware
  const headersList = headers();

  return (
    <div>
      <Body />
    </div>
  );
};

export default page;
