"use client";

import { useMemo, useState } from "react";
import { SuperModernInvitation } from "@/app/InvitationTemplates/SuperModern";
import type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";

const DEFAULT_INVITATION: SuperModernInvitationProps = {
  mainColor: "#b7410E",
  secondaryColor: "#1F2E3D",
  couple: {
    firstPerson: "Guadalupe",
    secondPerson: "Salvador",
    initials: { first: "G", second: "A" },
  },
  families: {
    firstPersonParents: [
      "Claudia Cristina Hernández Nuñez",
      "Manuel de Jesús Castor",
    ],
    secondPersonParents: [
      "Laura Alicia Garza Ortiz",
      "Antonio Salvador Fuentes Rodríguez",
    ],
  },
  event: {
    date: "2026-06-13T00:00:00-06:00",
    displayDate: "Sábado, 13 de junio de 2026",
    ceremony: {
      name: "Ceremonia Religiosa · San Pablo Apóstol",
      time: "6:00 PM",
      address: "Blvd. Pedro Figueroa s/n, Real de Peña, 25210 Saltillo, Coah.",
      mapsUrl: "https://maps.app.goo.gl/n5oSRZC9nHh9ZgUo7",
    },
    reception: {
      name: "Villa Santa Fe",
      time: "8:30 PM",
      address: "Blvd. Jorge Reyna Masso Masso #214, 25904 Saltillo, Coah.",
      mapsUrl: "https://maps.app.goo.gl/EX6nRYEJp4NKxFAx7",
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
  dressCode: { details: ["Etiqueta", "Ellas: Vestido largo", "Ellos: Traje"] },
  gift: { description: "Lluvia de sobres" },
  schedule: [
    {
      time: "6:00 P.M.",
      title: "Ceremonia religiosa",
      iconUrl: "/assets/images/guadalupeysalvador/churchitinerario.png",
    },
    {
      time: "8:30 P.M.",
      title: "Ceremonia civil",
      iconUrl: "/assets/images/guadalupeysalvador/ceremoniait.png",
    },
    {
      time: "8:30 P.M.",
      title: "Recepción",
      iconUrl: "/assets/images/guadalupeysalvador/baileit.png",
    },
    {
      time: "10:00 P.M.",
      title: "Cena",
      iconUrl: "/assets/images/guadalupeysalvador/cena.png",
    },
    {
      time: "1:30 A.M.",
      title: "Cierre",
      iconUrl: "/assets/images/guadalupeysalvador/cake.png",
    },
  ],
  confirmation: {
    deadline: "6 de junio de 2026",
    url: "https://wa.link/z5klwe",
    message:
      "Celebrar nuestro amor es un sueño hecho realidad y nos encantará contar contigo.",
  },
  media: {
    heroImageUrl: "/assets/images/guadalupeysalvador/img2.jpeg",
    envelopeImageUrl: "/assets/images/guadalupeysalvador/sobresote.png",
    sealImageUrl: "/assets/images/guadalupeysalvador/sello.png",
    textureImageUrl: "/assets/images/guadalupeysalvador/texture2.jpg",
    songUrl: "/assets/songs/gysboda.mp3",
    icons: {
      church: "/assets/images/guadalupeysalvador/iglesiaicon.png",
      reception: "/assets/images/guadalupeysalvador/noviosverde.png",
      adultOnly: "/assets/images/guadalupeysalvador/cheers.png",
      dressCode:
        "/assets/images/guadalupeysalvador/dresscode-removebg-preview.png",
      gift: "/assets/images/guadalupeysalvador/et_envelope.png",
    },
    galleryImageUrls: [
      "/assets/images/guadalupeysalvador/img1.jpeg",
      "/assets/images/guadalupeysalvador/img4.jpeg",
      "/assets/images/guadalupeysalvador/img3.jpeg",
      "/assets/images/guadalupeysalvador/img7.jpeg",
      "/assets/images/guadalupeysalvador/img10.jpeg",
      "/assets/images/guadalupeysalvador/img11.jpeg",
      "/assets/images/guadalupeysalvador/img9.jpeg",
    ],
  },
};

type FieldProps = {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  type?: "text" | "color" | "datetime-local" | "url";
  multiline?: boolean;
};
const Field = ({
  label,
  value = "",
  onChange,
  type = "text",
  multiline = false,
}: FieldProps) => (
  <label className="block">
    <span className="mb-1 block text-xs font-medium text-slate-600">
      {label}
    </span>
    {multiline ? (
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#b7410E] focus:ring-2 focus:ring-[#b7410E]/20"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`${type === "color" ? "h-10 p-1" : "px-3 py-2"} w-full rounded-md border border-slate-300 text-sm outline-none focus:border-[#b7410E] focus:ring-2 focus:ring-[#b7410E]/20`}
      />
    )}
  </label>
);
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <details open className="rounded-xl border border-slate-200 bg-white">
    <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-800">
      {title}
    </summary>
    <div className="grid gap-3 border-t border-slate-100 p-4">{children}</div>
  </details>
);

export default function Editor() {
  const [invitation, setInvitation] =
    useState<SuperModernInvitationProps>(DEFAULT_INVITATION);
  const [showCode, setShowCode] = useState(false);
  const update = <K extends keyof SuperModernInvitationProps>(
    key: K,
    value: SuperModernInvitationProps[K],
  ) => setInvitation((current) => ({ ...current, [key]: value }));
  const updateMedia = (
    key: keyof SuperModernInvitationProps["media"],
    value: string,
  ) =>
    setInvitation((current) => ({
      ...current,
      media: { ...current.media, [key]: value },
    }));
  const code = useMemo(() => {
    const { previewMode: _previewMode, ...props } = invitation;
    return `import { SuperModernInvitation } from "@/app/InvitationTemplates/SuperModern";\nimport type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";\n\nconst invitation: SuperModernInvitationProps = ${JSON.stringify(props, null, 2)};\n\nexport default function NuevaInvitacion() {\n  return <SuperModernInvitation {...invitation} />;\n}`;
  }, [invitation]);
  const ceremony = invitation.event.ceremony!;
  const reception = invitation.event.reception!;
  const eventDateInput =
    typeof invitation.event.date === "string"
      ? invitation.event.date.slice(0, 16)
      : invitation.event.date.toISOString().slice(0, 16);

  return (
    <div className="min-h-screen bg-slate-100 p-4 lg:p-7">
      <div className="mx-auto grid max-w-[1600px] gap-6 lg:grid-cols-[minmax(360px,0.9fr)_minmax(420px,1.1fr)]">
        <section className="min-w-0">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#b7410E]">
                SuperModern
              </p>
              <h1 className="text-2xl font-bold text-slate-900">
                Creador de invitaciones
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Edita los datos y revisa el resultado en tiempo real.
              </p>
            </div>
            <button
              onClick={() => setShowCode(true)}
              className="rounded-lg bg-[#b7410E] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#96340c]"
            >
              Guardar y ver props
            </button>
          </div>
          <div className="grid max-h-[calc(100vh-9rem)] gap-3 overflow-y-auto pr-1">
            <Section title="Colores">
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Color principal"
                  type="color"
                  value={invitation.mainColor}
                  onChange={(value) => update("mainColor", value)}
                />
                <Field
                  label="Color secundario"
                  type="color"
                  value={invitation.secondaryColor}
                  onChange={(value) => update("secondaryColor", value)}
                />
                <Field
                  label="Títulos (opcional)"
                  type="color"
                  value={invitation.titleColorSecondary}
                  onChange={(value) => update("titleColorSecondary", value)}
                />
                <Field
                  label="Texto sobre fondo principal"
                  type="color"
                  value={invitation.textColorSecondary}
                  onChange={(value) => update("textColorSecondary", value)}
                />
              </div>
            </Section>
            <Section title="Pareja y familias">
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Primer nombre"
                  value={invitation.couple.firstPerson}
                  onChange={(value) =>
                    update("couple", {
                      ...invitation.couple,
                      firstPerson: value,
                    })
                  }
                />
                <Field
                  label="Segundo nombre"
                  value={invitation.couple.secondPerson}
                  onChange={(value) =>
                    update("couple", {
                      ...invitation.couple,
                      secondPerson: value,
                    })
                  }
                />
                <Field
                  label="Inicial 1"
                  value={invitation.couple.initials?.first}
                  onChange={(value) =>
                    update("couple", {
                      ...invitation.couple,
                      initials: {
                        first: value,
                        second: invitation.couple.initials?.second ?? "",
                      },
                    })
                  }
                />
                <Field
                  label="Inicial 2"
                  value={invitation.couple.initials?.second}
                  onChange={(value) =>
                    update("couple", {
                      ...invitation.couple,
                      initials: {
                        first: invitation.couple.initials?.first ?? "",
                        second: value,
                      },
                    })
                  }
                />
              </div>
              <Field
                label="Conector entre nombres"
                value={invitation.couple.connector ?? "&"}
                onChange={(value) =>
                  update("couple", { ...invitation.couple, connector: value })
                }
              />
              <Field
                label="Padres de la primera persona (una línea por nombre)"
                multiline
                value={invitation.families?.firstPersonParents?.join("\n")}
                onChange={(value) =>
                  update("families", {
                    ...invitation.families,
                    firstPersonParents: value.split("\n").filter(Boolean),
                  })
                }
              />
              <Field
                label="Padres de la segunda persona (una línea por nombre)"
                multiline
                value={invitation.families?.secondPersonParents?.join("\n")}
                onChange={(value) =>
                  update("families", {
                    ...invitation.families,
                    secondPersonParents: value.split("\n").filter(Boolean),
                  })
                }
              />
            </Section>
            <Section title="Evento, ceremonia y recepción">
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Fecha y hora del evento"
                  type="datetime-local"
                  value={eventDateInput}
                  onChange={(value) =>
                    update("event", {
                      ...invitation.event,
                      date: `${value}:00-06:00`,
                    })
                  }
                />
                <Field
                  label="Fecha visible"
                  value={invitation.event.displayDate}
                  onChange={(value) =>
                    update("event", { ...invitation.event, displayDate: value })
                  }
                />
              </div>
              <Field
                label="Lugar de ceremonia"
                value={ceremony.name}
                onChange={(value) =>
                  update("event", {
                    ...invitation.event,
                    ceremony: { ...ceremony, name: value },
                  })
                }
              />
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Hora ceremonia"
                  value={ceremony.time}
                  onChange={(value) =>
                    update("event", {
                      ...invitation.event,
                      ceremony: { ...ceremony, time: value },
                    })
                  }
                />
                <Field
                  label="Google Maps ceremonia"
                  type="url"
                  value={ceremony.mapsUrl}
                  onChange={(value) =>
                    update("event", {
                      ...invitation.event,
                      ceremony: { ...ceremony, mapsUrl: value },
                    })
                  }
                />
              </div>
              <Field
                label="Dirección ceremonia"
                multiline
                value={ceremony.address}
                onChange={(value) =>
                  update("event", {
                    ...invitation.event,
                    ceremony: { ...ceremony, address: value },
                  })
                }
              />
              <Field
                label="Lugar de recepción"
                value={reception.name}
                onChange={(value) =>
                  update("event", {
                    ...invitation.event,
                    reception: { ...reception, name: value },
                  })
                }
              />
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Hora recepción"
                  value={reception.time}
                  onChange={(value) =>
                    update("event", {
                      ...invitation.event,
                      reception: { ...reception, time: value },
                    })
                  }
                />
                <Field
                  label="Google Maps recepción"
                  type="url"
                  value={reception.mapsUrl}
                  onChange={(value) =>
                    update("event", {
                      ...invitation.event,
                      reception: { ...reception, mapsUrl: value },
                    })
                  }
                />
              </div>
              <Field
                label="Dirección recepción"
                multiline
                value={reception.address}
                onChange={(value) =>
                  update("event", {
                    ...invitation.event,
                    reception: { ...reception, address: value },
                  })
                }
              />
            </Section>
            <Section title="Textos y confirmación">
              <Field
                label="Frase"
                multiline
                value={invitation.quote?.text}
                onChange={(value) =>
                  update("quote", { ...invitation.quote, text: value })
                }
              />
              <Field
                label="Autor de la frase"
                value={invitation.quote?.author}
                onChange={(value) =>
                  update("quote", {
                    text: invitation.quote?.text ?? "",
                    author: value,
                  })
                }
              />
              <Field
                label="Título solo adultos"
                value={invitation.adultOnly?.title}
                onChange={(value) =>
                  update("adultOnly", {
                    ...invitation.adultOnly!,
                    title: value,
                  })
                }
              />
              <Field
                label="Mensaje solo adultos"
                multiline
                value={invitation.adultOnly?.message}
                onChange={(value) =>
                  update("adultOnly", {
                    ...invitation.adultOnly!,
                    message: value,
                  })
                }
              />
              <Field
                label="Título de vestimenta"
                value={invitation.dressCode?.title}
                onChange={(value) =>
                  update("dressCode", { ...invitation.dressCode, title: value })
                }
              />
              <Field
                label="Código de vestimenta (una línea por detalle)"
                multiline
                value={invitation.dressCode?.details?.join("\n")}
                onChange={(value) =>
                  update("dressCode", {
                    ...invitation.dressCode,
                    details: value.split("\n").filter(Boolean),
                  })
                }
              />
              <Field
                label="Título de regalo"
                value={invitation.gift?.title}
                onChange={(value) =>
                  update("gift", { ...invitation.gift!, title: value })
                }
              />
              <Field
                label="Regalo"
                value={invitation.gift?.description}
                onChange={(value) =>
                  update("gift", { ...invitation.gift!, description: value })
                }
              />
              <Field
                label="Mensaje de confirmación"
                multiline
                value={invitation.confirmation?.message}
                onChange={(value) =>
                  update("confirmation", {
                    ...invitation.confirmation!,
                    message: value,
                  })
                }
              />
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Fecha límite"
                  value={invitation.confirmation?.deadline}
                  onChange={(value) =>
                    update("confirmation", {
                      ...invitation.confirmation!,
                      deadline: value,
                    })
                  }
                />
                <Field
                  label="Enlace de confirmación"
                  type="url"
                  value={invitation.confirmation?.url}
                  onChange={(value) =>
                    update("confirmation", {
                      ...invitation.confirmation!,
                      url: value,
                    })
                  }
                />
              </div>
            </Section>
            <Section title="Itinerario">
              {invitation.schedule?.map((item, index) => (
                <div className="grid grid-cols-[90px_1fr] gap-3" key={index}>
                  <Field
                    label="Hora"
                    value={item.time}
                    onChange={(value) =>
                      update(
                        "schedule",
                        invitation.schedule?.map((entry, itemIndex) =>
                          itemIndex === index
                            ? { ...entry, time: value }
                            : entry,
                        ),
                      )
                    }
                  />
                  <div className="grid gap-3">
                    <Field
                      label="Actividad"
                      value={item.title}
                      onChange={(value) =>
                        update(
                          "schedule",
                          invitation.schedule?.map((entry, itemIndex) =>
                            itemIndex === index
                              ? { ...entry, title: value }
                              : entry,
                          ),
                        )
                      }
                    />
                    <Field
                      label="Ruta del ícono"
                      value={item.iconUrl}
                      onChange={(value) =>
                        update(
                          "schedule",
                          invitation.schedule?.map((entry, itemIndex) =>
                            itemIndex === index
                              ? { ...entry, iconUrl: value }
                              : entry,
                          ),
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </Section>
            <Section title="Imágenes, música e íconos">
              <Field
                label="Hero"
                value={invitation.media.heroImageUrl}
                onChange={(value) => updateMedia("heroImageUrl", value)}
              />
              <Field
                label="Sobre"
                value={invitation.media.envelopeImageUrl}
                onChange={(value) => updateMedia("envelopeImageUrl", value)}
              />
              <Field
                label="Sello"
                value={invitation.media.sealImageUrl}
                onChange={(value) => updateMedia("sealImageUrl", value)}
              />
              <Field
                label="Textura"
                value={invitation.media.textureImageUrl}
                onChange={(value) => updateMedia("textureImageUrl", value)}
              />
              <Field
                label="Música"
                value={invitation.media.songUrl}
                onChange={(value) => updateMedia("songUrl", value)}
              />
              {(
                [
                  "church",
                  "reception",
                  "adultOnly",
                  "dressCode",
                  "gift",
                ] as const
              ).map((key) => (
                <Field
                  key={key}
                  label={`Ícono: ${key}`}
                  value={invitation.media.icons?.[key]}
                  onChange={(value) =>
                    setInvitation((current) => ({
                      ...current,
                      media: {
                        ...current.media,
                        icons: { ...current.media.icons, [key]: value },
                      },
                    }))
                  }
                />
              ))}
              {invitation.media.galleryImageUrls?.map((url, index) => (
                <Field
                  key={index}
                  label={`Galería ${index + 1}`}
                  value={url}
                  onChange={(value) =>
                    setInvitation((current) => ({
                      ...current,
                      media: {
                        ...current.media,
                        galleryImageUrls: current.media.galleryImageUrls?.map(
                          (image, imageIndex) =>
                            imageIndex === index ? value : image,
                        ),
                      },
                    }))
                  }
                />
              ))}
            </Section>
          </div>
        </section>
        <aside className="min-w-0">
          <div className="sticky top-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Vista en tiempo real
                </p>
                <p className="text-xs text-slate-500">
                  Modo de previsualización
                </p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="h-[calc(100vh-7.5rem)] overflow-y-auto bg-slate-200 p-4">
              <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-lg">
                <SuperModernInvitation {...invitation} previewMode />
              </div>
            </div>
          </div>
        </aside>
      </div>
      {showCode && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/60 p-4">
          <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Props para una nueva invitación
                </h2>
                <p className="text-sm text-slate-500">
                  Copia este bloque en una nueva página de boda.
                </p>
              </div>
              <button
                onClick={() => setShowCode(false)}
                className="rounded-md px-3 py-1 text-slate-500 hover:bg-slate-100"
              >
                Cerrar
              </button>
            </div>
            <pre className="m-0 flex-1 overflow-auto bg-slate-950 p-5 text-xs leading-5 text-emerald-200">
              <code>{code}</code>
            </pre>
            <div className="flex justify-end gap-3 border-t border-slate-200 px-5 py-4">
              <button
                onClick={() => navigator.clipboard.writeText(code)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Copiar código
              </button>
              <button
                onClick={() => setShowCode(false)}
                className="rounded-lg bg-[#b7410E] px-4 py-2 text-sm font-semibold text-white"
              >
                Listo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
