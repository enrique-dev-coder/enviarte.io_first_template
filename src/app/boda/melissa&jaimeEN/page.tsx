import { SuperModernInvitation } from "@/app/InvitationTemplates/SuperModern";
import type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";
export const metadata = {
  metadataBase: new URL("https://www.invitandofacil.com"),
  title: "Melissa & Jaime",
  description: "Invitaciones digitales para eventos",
  openGraph: {
    siteName: "Melissa & Jaime",
    title: "Melissa & Jaime - Our wedding",
    description:
      "Te invitamos a celebrar nuestra boda. Haz clic para más detalles.",
    url: "https://www.invitandofacil.com/boda/melissa&jaimeColor",
    images: [
      {
        url: "https://www.invitandofacil.com/assets/images/Melissa&Jaime/img10.jpeg",
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
  imagesInGrayscale: false,
  enterButtonExtraClasses: "!mt-[-200px] !bg-transparent",
  optionalTextButton: "Enter",
  couple: {
    firstPerson: "Melissa",
    secondPerson: "Jaime",
    connector: "&",
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
  invitationText: {
    blessing: "With the blessing of God and our parents",
    firstPersonParentsTitle: "Parents of the bride",
    secondPersonParentsTitle: "Parents of the groom",
  },
  event: {
    date: "2026-10-03T00:00:00-06:00",
    displayDate: "Saturday, October 3, 2026",
    locale: "en-US",
    ceremony: {
      optionalTitle: "Religious Ceremony",
      optionalTextButton: "DIRECTIONS",
      optionalIntroText: "JOIN US ON",
      name: "Parroquia San Charbel",
      time: "4:00 PM",
      address:
        "Blvd. Carlos Abedrop Dávila 4430, Postal Cerritos, 25019 Saltillo, Coah.",
      mapsUrl: "https://maps.app.goo.gl/w4EsZgkMBB7K7CwG8",
    },
    reception: {
      optionalTitle: "Reception",
      optionalTextButton: "DIRECTIONS",
      name: "Hacienda Torrecillas ",
      time: "7:00 PM",
      address:
        "Sor Juana Inés de La Cruz 1410, Torrecillas, 25298 Saltillo, Coah.",
      mapsUrl: "https://maps.app.goo.gl/k7RjUmBE5hJDnzMy7",
    },
  },
  quote: {
    text: "Love does not consist of gazing at each other, but in looking outward together in the same direction",
    author: "Antoine de Saint-Exupéry",
  },
  adultOnly: {
    optionalTitle: "Adults-only event",
    message:
      "We want you to relax, dance, and celebrate with us to the fullest. This time, the celebration will be for adults only.",
  },
  dressCode: {
    optionalTitle: "Dress Code",
    details: ["Black Tie", "Women: Long dress", "Men: Suit"],
    restrictions: "NO DENIM",
  },
  gift: {
    optionalTitle: "Gift",
    description: "Envelope rain",
  },
  schedule: [
    {
      time: "4:00 P.M.",
      title: "Religious Ceremony",
      iconUrl: "/assets/images/guadalupeysalvador/churchitinerario.png",
    },
    {
      time: "6:00 P.M.",
      title: "Civil Ceremony",
      iconUrl: "/assets/images/guadalupeysalvador/ceremoniait.png",
    },
    {
      time: "7:00 P.M.",
      title: "Reception",
      iconUrl: "/assets/images/guadalupeysalvador/baileit.png",
    },
    {
      time: "8:00 P.M.",
      title: "Dinner",
      iconUrl: "/assets/images/guadalupeysalvador/cena.png",
    },
    {
      time: "2:00 A.M.",
      title: "End of Event",
      iconUrl: "/assets/images/guadalupeysalvador/cake.png",
    },
  ],
  confirmation: {
    optionalTitle: "RSVP",
    optionalTextButton: "Confirm",
    optionalDeadlineText: "Please confirm your attendance by",
    deadline: "August 30, 2026",
    url: "https://wa.link/5kmg8x",
    message:
      "Celebrating our love is a dream come true, and we would love to have you there with us.",
  },
  itinerary: { optionalTitle: "Schedule" },
  countdown: {
    optionalTitle: "Get ready!",
    optionalDatePrefix: "See you on",
    optionalDaysLabel: "days",
    optionalHoursLabel: "hours",
    optionalMinutesLabel: "minutes",
    optionalSecondsLabel: "seconds",
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
