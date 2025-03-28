// animation
import type { Metadata } from "next";

import Body from "./Body";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Mica & Rosy",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Mica & Rosy ",
    title: "Mica & Rosy - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/mica&rosy",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/micayrosy/Fut.jpg",
        width: 256,
        height: 256,
        alt: "Imagen de la boda de Mica y Rosy",
      },
    ],
  },
};

const page = () => {
  return <Body />;
};

export default page;
