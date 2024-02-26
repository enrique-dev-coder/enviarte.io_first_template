import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/fonts";

export const metadata: Metadata = {
  title: "EnviArte",
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
        {/* <script
          src="https://open.spotify.com/embed/iframe-api/v1"
          async
        ></script> */}

        {children}
      </body>
    </html>
  );
}
