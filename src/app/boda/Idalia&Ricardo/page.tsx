import Body from "./Body";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Idalia & Ricardo",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Idalia & Ricardo",
    title: "Anel & Roberto - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/Idalia&Ricardo",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/idaliayricardo/img3.png",
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
