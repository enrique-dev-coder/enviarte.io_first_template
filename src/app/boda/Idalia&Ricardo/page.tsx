import Body from "./Body";

export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Anel & Roberto",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Anel & Roberto",
    title: "Anel & Roberto - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/anel&roberto",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/anelyroberto/img_hrz3.png",
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
