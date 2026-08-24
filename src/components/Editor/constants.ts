import type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";

export const DEFAULT_INVITATION: SuperModernInvitationProps = {
  mainColor: "#b7410E", secondaryColor: "#1F2E3D",
  imagesInGrayscale: true, enterButtonExtraClasses: "!mt-[16px] !bg-transparent",
  couple: { firstPerson: "Guadalupe", secondPerson: "Salvador", initials: { first: "G", second: "A" } },
  families: { firstPersonParents: ["Claudia Cristina Hernández Nuñez", "Manuel de Jesús Castor"], secondPersonParents: ["Laura Alicia Garza Ortiz", "Antonio Salvador Fuentes Rodríguez"] },
  event: { date: "2026-06-13T00:00:00-06:00", displayDate: "Sábado, 13 de junio de 2026", ceremony: { name: "Ceremonia Religiosa · San Pablo Apóstol", time: "6:00 PM", address: "Blvd. Pedro Figueroa s/n, Real de Peña, 25210 Saltillo, Coah.", mapsUrl: "https://maps.app.goo.gl/n5oSRZC9nHh9ZgUo7" }, reception: { name: "Villa Santa Fe", time: "8:30 PM", address: "Blvd. Jorge Reyna Masso Masso #214, 25904 Saltillo, Coah.", mapsUrl: "https://maps.app.goo.gl/EX6nRYEJp4NKxFAx7" } },
  quote: { text: "El amor no consiste en mirar al otro, sino en mirar juntos en la misma dirección", author: "Antoine de Saint-Exupéry" },
  adultOnly: { message: "Queremos que se relajen, bailen y celebren a lo grande con nosotros. Esta vez la fiesta será solo para adultos." },
  dressCode: { details: ["Etiqueta", "Ellas: Vestido largo", "Ellos: Traje"], restrictions: "No mezclilla" }, gift: { description: "Lluvia de sobres" },
  schedule: [
    { time: "6:00 P.M.", title: "Ceremonia religiosa", iconUrl: "/assets/images/guadalupeysalvador/churchitinerario.png" },
    { time: "8:30 P.M.", title: "Ceremonia civil", iconUrl: "/assets/images/guadalupeysalvador/ceremoniait.png" },
    { time: "8:30 P.M.", title: "Recepción", iconUrl: "/assets/images/guadalupeysalvador/baileit.png" },
    { time: "10:00 P.M.", title: "Cena", iconUrl: "/assets/images/guadalupeysalvador/cena.png" },
    { time: "1:30 A.M.", title: "Cierre", iconUrl: "/assets/images/guadalupeysalvador/cake.png" },
  ],
  confirmation: { deadline: "6 de junio de 2026", url: "https://wa.link/z5klwe", message: "Celebrar nuestro amor es un sueño hecho realidad y nos encantará contar contigo." },
  media: { heroImageUrl: "/assets/images/guadalupeysalvador/img2.jpeg", envelopeImageUrl: "/assets/images/guadalupeysalvador/sobresote.png", sealImageUrl: "/assets/images/guadalupeysalvador/sello.png", textureImageUrl: "/assets/images/guadalupeysalvador/texture2.jpg", songUrl: "/assets/songs/gysboda.mp3", icons: { church: "/assets/images/guadalupeysalvador/iglesiaicon.png", reception: "/assets/images/guadalupeysalvador/noviosverde.png", adultOnly: "/assets/images/guadalupeysalvador/cheers.png", dressCode: "/assets/images/guadalupeysalvador/dresscode-removebg-preview.png", gift: "/assets/images/guadalupeysalvador/et_envelope.png" }, galleryImageUrls: ["/assets/images/guadalupeysalvador/img1.jpeg", "/assets/images/guadalupeysalvador/img4.jpeg", "/assets/images/guadalupeysalvador/img3.jpeg", "/assets/images/guadalupeysalvador/img7.jpeg", "/assets/images/guadalupeysalvador/img10.jpeg", "/assets/images/guadalupeysalvador/img11.jpeg", "/assets/images/guadalupeysalvador/img9.jpeg"] },
};
