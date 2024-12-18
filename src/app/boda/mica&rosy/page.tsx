// animation
import type { Metadata } from "next";

import Body from "./Body";

export const metadata = {
  title: "Mica & Rosy",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    title: "Mica & Rosy - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/mica&rosy",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/micayrosy/Fut.jpg",
        width: 1200,
        height: 630,
        alt: "Imagen de la boda de Mica y Rosy",
      },
    ],
    siteName: "Invitando Fácil",
  },
};

const page = () => {
  return <Body />;
};

export default page;
