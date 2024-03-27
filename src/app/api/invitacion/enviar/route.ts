//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import prisma from "../../../../../prisma";

async function EnviarAtravesDeLaWhatsAp(tel: string, message: string) {
  try {
    return await axios.post(
      "https://api.digybot.io/api/messages/send",
      {
        number: `52${tel}`,
        // TODO: aqui desde el cliente se forma el link y se manda en el body del request
        body: message,
      },
      {
        headers: {
          Authorization: `Bearer ${"7e2d233c206fd31dc14a20a726947655"}`,
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

  if (!verificarSiLaInvitacionYaFueEnviada) {
    try {
      const respuestaWhatsapp = await EnviarAtravesDeLaWhatsAp(
        body.tel,
        body.whatsMessage
      );
      if (respuestaWhatsapp?.response?.status === 400) {
        return NextResponse.json(
          {
            message:
              "Lo sentimos no se pudo enviar el mensaje de WhatsApp probablemente el numero no exista",
          },
          { status: 400 }
        );
      }
      // ejecutar promesas en paralelo
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
          enviadaPorWhats: respuestaWhatsapp.data.message,
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
