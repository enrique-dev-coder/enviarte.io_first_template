import React from "react";
import Body from "./Body";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Vianey & Oscar",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Vianey & Oscar ",
    title: "Vianey & Oscar - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/vianey&oscar",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/vianey&oscar/banner.png",
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
