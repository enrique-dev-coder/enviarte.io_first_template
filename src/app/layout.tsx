import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/fonts";
import ReactQueryContainer from "@/components/wrappers/ReactQueryContainer";

export const metadata = {
  title: "Invitaciones Digitales para Eventos",
  description: "Invitaciones digitales para eventos",
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
