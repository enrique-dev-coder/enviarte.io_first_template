import Body from "./Body";

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

const page = () => {
  return <Body />;
};

export default page;
