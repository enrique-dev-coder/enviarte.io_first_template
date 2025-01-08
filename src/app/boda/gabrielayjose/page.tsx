import Body from "./Body";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Gabriela & Jose",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Gabriela & Jose",
    title: "Gabriela & Jose - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/gabrielayjose",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/joseygabriela/hero.jpeg",
        width: 256,
        height: 425,
        alt: "Imagen de la boda de vianey y oscar",
      },
    ],
  },
};

const page = () => {
  return <Body />;
};

export default page;
