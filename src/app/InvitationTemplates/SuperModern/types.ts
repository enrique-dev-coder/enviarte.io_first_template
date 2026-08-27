export type InvitationLocation = {
  name: string;
  address: string;
  time: string;
  mapsUrl: string;
  optionalTitle?: string;
  optionalTextButton?: string;
  /** Texto opcional encima de la fecha de la ceremonia. */
  optionalIntroText?: string;
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
  /** Solo para el editor: muestra la invitación sin modal ni audio. */
  previewMode?: boolean;
  /** Por defecto las fotografías se muestran en blanco y negro. */
  imagesInGrayscale?: boolean;
  /** Clases Tailwind adicionales para personalizar el botón de ingreso. */
  enterButtonExtraClasses?: string;
  /** Texto opcional del botón inicial de ingreso. */
  optionalTextButton?: string;
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
  invitationText?: {
    blessing?: string;
    firstPersonParentsTitle?: string;
    secondPersonParentsTitle?: string;
  };
  event: {
    date: string | Date;
    displayDate: string;
    /** Locale de la fecha de ceremonia. Por defecto: es-MX. */
    locale?: string;
    ceremony?: InvitationLocation;
    reception?: InvitationLocation;
  };
  quote?: { text: string; author?: string };
  dressCode?: {
    title?: string;
    optionalTitle?: string;
    details?: string[];
    /** Restricción opcional, por ejemplo: "No mezclilla". */
    restrictions?: string;
  };
  adultOnly?: {
    title?: string;
    optionalTitle?: string;
    message: string;
  };
  gift?: {
    title?: string;
    optionalTitle?: string;
    description: string;
  };
  schedule?: InvitationScheduleItem[];
  confirmation?: {
    optionalTitle?: string;
    deadline: string;
    url: string;
    message?: string;
    optionalTextButton?: string;
    optionalDeadlineText?: string;
  };
  itinerary?: { optionalTitle?: string };
  countdown?: {
    optionalTitle?: string;
    optionalDatePrefix?: string;
    optionalDaysLabel?: string;
    optionalHoursLabel?: string;
    optionalMinutesLabel?: string;
    optionalSecondsLabel?: string;
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
