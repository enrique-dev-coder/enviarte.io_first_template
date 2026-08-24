import { SuperModernInvitation } from "@/app/InvitationTemplates/SuperModern";
import type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";
export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Melissa & Jaime",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Melissa & Jaime",
    title: "Melissa & Jaime - Nuestra Boda",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/melissa&jaimeBG",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/Melissa&Jaime/img1bg.jpeg",
        width: 256,
        height: 425,
        alt: "Imagen de la boda de Arely y Bryan ",
      },
    ],
  },
};
const invitation: SuperModernInvitationProps = {
  mainColor: "#b7410E",
  secondaryColor: "#1F2E3D",
  enterButtonExtraClasses: "!mt-[-200px] !bg-transparent",
  couple: {
    firstPerson: "Melissa",
    secondPerson: "Jaime",
    initials: {
      first: "M",
      second: "J",
    },
  },
  families: {
    firstPersonParents: ["Herminia Ortiz Muñoz", "Rogelio Zapata Hernández "],
    secondPersonParents: [
      "Gloria María Vázquez Pecina",
      "Jaime Escamilla Fuentes",
    ],
  },
  event: {
    date: "2026-10-03T00:00:00-06:00",
    displayDate: "Sábado, 03 de Octubre de 2026",
    ceremony: {
      name: "Parroquia San Charbel",
      time: "4:00 PM",
      address:
        "Blvd. Carlos Abedrop Dávila 4430, Postal Cerritos, 25019 Saltillo, Coah.",
      mapsUrl: "https://maps.app.goo.gl/w4EsZgkMBB7K7CwG8",
    },
    reception: {
      name: "Hacienda Torrecillas ",
      time: "7:00 PM",
      address:
        "Sor Juana Inés de La Cruz 1410, Torrecillas, 25298 Saltillo, Coah.",
      mapsUrl: "https://maps.app.goo.gl/k7RjUmBE5hJDnzMy7",
    },
  },
  quote: {
    text: "El amor no consiste en mirar al otro, sino en mirar juntos en la misma dirección",
    author: "Antoine de Saint-Exupéry",
  },
  adultOnly: {
    message:
      "Queremos que se relajen, bailen y celebren a lo grande con nosotros. Esta vez la fiesta será solo para adultos.",
  },
  dressCode: {
    details: ["Etiqueta", "Ellas: Vestido largo", "Ellos: Traje "],
    restrictions: "NO MEZCLILLA",
  },
  gift: {
    description: "Lluvia de sobres",
  },
  schedule: [
    {
      time: "4:00 P.M.",
      title: "Ceremonia religiosa",
      iconUrl: "/assets/images/guadalupeysalvador/churchitinerario.png",
    },
    {
      time: "6:00 P.M.",
      title: "Ceremonia civil",
      iconUrl: "/assets/images/guadalupeysalvador/ceremoniait.png",
    },
    {
      time: "7:00 P.M.",
      title: "Recepción",
      iconUrl: "/assets/images/guadalupeysalvador/baileit.png",
    },
    {
      time: "8:00 P.M.",
      title: "Cena",
      iconUrl: "/assets/images/guadalupeysalvador/cena.png",
    },
    {
      time: "2:00 A.M.",
      title: "Cierre Evento",
      iconUrl: "/assets/images/guadalupeysalvador/cake.png",
    },
  ],
  confirmation: {
    deadline: "30 de agosto de 2026",
    url: "https://wa.link/5kmg8x",
    message:
      "Celebrar nuestro amor es un sueño hecho realidad y nos encantará contar contigo.",
  },
  media: {
    heroImageUrl: "/assets/images/Melissa&Jaime/img1.jpeg",
    envelopeImageUrl: "/assets/images/guadalupeysalvador/sobresote.png",
    sealImageUrl: "/assets/images/guadalupeysalvador/sello.png",
    textureImageUrl: "/assets/images/guadalupeysalvador/texture2.jpg",
    songUrl: "/assets/songs/melisayjaime.mp3",
    icons: {
      church: "/assets/images/guadalupeysalvador/iglesiaicon.png",
      reception: "/assets/images/guadalupeysalvador/noviosverde.png",
      adultOnly: "/assets/images/guadalupeysalvador/cheers.png",
      dressCode:
        "/assets/images/guadalupeysalvador/dresscode-removebg-preview.png",
      gift: "/assets/images/guadalupeysalvador/et_envelope.png",
    },
    galleryImageUrls: [
      "/assets/images/Melissa&Jaime/img10.jpeg",
      "/assets/images/Melissa&Jaime/img2.jpeg",
      "/assets/images/Melissa&Jaime/img5.jpeg",
      "/assets/images/Melissa&Jaime/img6.jpeg",
      "/assets/images/Melissa&Jaime/img7.jpeg",
      "/assets/images/Melissa&Jaime/img3.jpeg",
      "/assets/images/Melissa&Jaime/img8.jpeg",
    ],
  },
};

export default function NuevaInvitacion() {
  return <SuperModernInvitation {...invitation} />;
}
