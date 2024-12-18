import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/fonts";
import ReactQueryContainer from "@/components/wrappers/ReactQueryContainer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <ReactQueryContainer>{children}</ReactQueryContainer>
      </body>
    </html>
  );
}
