export type InvitationLocation = {
  name: string;
  address: string;
  time: string;
  mapsUrl: string;
};

export type InvitationScheduleItem = {
  time: string;
  title: string;
  iconUrl?: string;
};

export type SuperModernInvitationProps = {
  /** Color principal en formato CSS, por ejemplo: #6b705c o rgb(107, 112, 92). */
  mainColor: string;
  /** Color secundario opcional para textos sobre fondos claros. */
  secondaryColor?: string;
  /** Color opcional para los títulos de las secciones. */
  titleColorSecondary?: string;
  /** Color opcional para el texto en secciones con fondo mainColor. */
  textColorSecondary?: string;
  couple: {
    firstPerson: string;
    secondPerson: string;
    connector?: string;
    initials?: { first: string; second: string };
  };
  families?: {
    firstPersonParents?: string[];
    secondPersonParents?: string[];
  };
  event: {
    date: string | Date;
    displayDate: string;
    ceremony?: InvitationLocation;
    reception?: InvitationLocation;
  };
  quote?: { text: string; author?: string };
  dressCode?: {
    title?: string;
    details?: string[];
  };
  adultOnly?: {
    title?: string;
    message: string;
  };
  gift?: {
    title?: string;
    description: string;
  };
  schedule?: InvitationScheduleItem[];
  confirmation?: {
    deadline: string;
    url: string;
    message?: string;
  };
  media: {
    heroImageUrl: string;
    galleryImageUrls?: string[];
    envelopeImageUrl?: string;
    sealImageUrl?: string;
    textureImageUrl?: string;
    songUrl?: string;
    icons?: {
      church?: string;
      reception?: string;
      adultOnly?: string;
      dressCode?: string;
      gift?: string;
    };
  };
  guest?: {
    name?: string;
    phone?: string;
    passesAssigned?: string;
  };
};
