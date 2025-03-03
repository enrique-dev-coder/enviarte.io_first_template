import Body from "./Body";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Erika y Enrique",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Erika y Enrique",
    title: "Erika y Enrique - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/Idalia&Ricardo",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/idaliayricardo/introwa.jpg",
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
