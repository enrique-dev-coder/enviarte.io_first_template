import Body from "./Body";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Fernanda y Daniel",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Fernanda y Daniel",
    title: "Fernanda y Daniel - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/fernandaydaniel",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/michelleydaniel/wa.jpg",
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
