import type { Dispatch, SetStateAction } from "react";
import type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";
import Field from "@/components/Editor/Field";
import Section from "@/components/Editor/Section";

type CreadorEditorProps = {
  onSave: () => void;
  invitation: SuperModernInvitationProps;
  setInvitation: Dispatch<SetStateAction<SuperModernInvitationProps>>;
};

export default function CreadorEditor({
  onSave,
  invitation,
  setInvitation,
}: CreadorEditorProps) {
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
  const ceremony = invitation.event.ceremony!;
  const reception = invitation.event.reception!;
  const eventDateInput =
    typeof invitation.event.date === "string"
      ? invitation.event.date.slice(0, 16)
      : invitation.event.date.toISOString().slice(0, 16);

  return (
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
          onClick={onSave}
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
                update("couple", { ...invitation.couple, firstPerson: value })
              }
            />
            <Field
              label="Segundo nombre"
              value={invitation.couple.secondPerson}
              onChange={(value) =>
                update("couple", { ...invitation.couple, secondPerson: value })
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
              update("adultOnly", { ...invitation.adultOnly!, title: value })
            }
          />
          <Field
            label="Mensaje solo adultos"
            multiline
            value={invitation.adultOnly?.message}
            onChange={(value) =>
              update("adultOnly", { ...invitation.adultOnly!, message: value })
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
                      itemIndex === index ? { ...entry, time: value } : entry,
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
            ["church", "reception", "adultOnly", "dressCode", "gift"] as const
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
  );
}
