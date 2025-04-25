import Body from "./Body";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Fernanda y Luis",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Fernanda y Luis",
    title: "Fernanda y Luis  - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/fernandayluis",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/fernandayluis/img1.jpeg",
        width: 256,
        height: 425,
        alt: "Imagen de la boda de Idalia y ricardo ",
      },
    ],
  },
};

const page = () => {
  return <Body />;
};

export default page;
