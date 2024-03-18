//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import prisma from "../../../../../prisma";

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

  if (!verificarSiLaInvitacionYaFueEnviada) {
    try {
      // ejecutar promesas en paralelo
      const [invitacionCreada, respuestaWhatsapp] = await Promise.allSettled([
        prisma.invitacionEnviadaConWhatsApp.create({
          data: {
            nombre: body.nombre,
            tel: body.tel,
            invitacionId: body.invitacionId,
          },
        }),
        axios.post(
          "https://api.digybot.io/api/messages/send",
          {
            number: `52${body.tel}`,
            // TODO: aqui desde el cliente se forma el link y se manda en el body del request
            body: body.whatsMessage,
          },
          {
            headers: {
              Authorization: `Bearer ${"7e2d233c206fd31dc14a20a726947655"}`,
            },
          }
        ),
      ]);

      return NextResponse.json(
        {
          invitacionCreadaenBD: { ...invitacionCreada },
          invitacionEnviadaPorWhatsApi: respuestaWhatsapp.value.data,
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
