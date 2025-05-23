//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import prisma from "../../../../../prisma";

async function EnviarAtravesDeLaWhatsAp(
  tel: string,
  message: string,
  nombreWhats: string,
  linkInvitacion: string,
  evento: string,
  linkFoto: string
) {
  try {
    return await axios.post(
      `https://graph.facebook.com/v22.0/${process.env.ACCOUNT_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: `+52${tel}`, // numero de telefono
        type: "template",
        template: {
          name: "invitacion_boda_img", // nombre de la plantilla
          language: {
            code: "es_MX",
            policy: "deterministic",
          },
          components: [
            // media id vianey oscar 828470702708422
            {
              type: "header",
              parameters: [
                {
                  type: "image",
                  image: {
                    link: linkFoto,
                  },
                },
              ],
            },
            {
              type: "body", // variables para el body
              parameters: [
                // intro
                {
                  type: "text",
                  text: `${nombreWhats}`,
                },
                {
                  // params del link nombre=Enriquetel
                  type: "text",
                  text: `${message}`,
                },
                {
                  type: "text",
                  text: `${linkInvitacion}`,
                },
                {
                  type: "text",
                  text: `${evento}`,
                },
              ],
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
  } catch (error) {
    return error;
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // si el numero de telefono ya existe en la bd  de invitaciones enviadas con ese id de invitacion entonces no se usa el api de whats
  const verificarSiLaInvitacionYaFueEnviada =
    await prisma.invitacionEnviadaConWhatsApp.findFirst({
      where: {
        tel: body.tel,
        invitacionId: body.invitacionId,
      },
    });
  // console.log(verificarSiLaInvitacionYaFueEnviada);
  // TEST
  if (!verificarSiLaInvitacionYaFueEnviada) {
    try {
      const respuestaWhatsapp = await EnviarAtravesDeLaWhatsAp(
        body.tel,
        body.whatsMessage,
        body.nombreWhats,
        body.linkInvitacion,
        body.evento,
        body.linkFoto
      );
      // debug
      // console.log(respuestaWhatsapp.data);
      // console.log(respuestaWhatsapp);
      if (respuestaWhatsapp?.status === 400) {
        return NextResponse.json(
          {
            message:
              "Lo sentimos no se pudo enviar el mensaje de WhatsApp probablemente el numero no exista",
          },
          { status: 400 }
        );
      }
      const invitacionCreada = await prisma.invitacionEnviadaConWhatsApp.create(
        {
          data: {
            nombre: body.nombre,
            tel: body.tel,
            invitacionId: body.invitacionId,
          },
        }
      );

      return NextResponse.json(
        {
          invitacionCreadaenBD: { ...invitacionCreada },
          enviadoPorWhats: respuestaWhatsapp.data.messages[0].message_status,
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  } else {
    return NextResponse.json(
      {
        message:
          "Ya enviaste una invitacion a ese numero, sólo puedes enviar 1 invitacion por numero",
      },
      { status: 500 }
    );
  }
}
