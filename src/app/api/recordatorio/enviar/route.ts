//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import prisma from "../../../../../prisma";

async function EnviarAtravesDeLaWhatsAp(
  tel: string,
  telReference: string,
  fecha: string,
  linkInvitacion: string
) {
  try {
    console.log(tel, telReference, fecha, linkInvitacion);
    return await axios.post(
      `https://graph.facebook.com/v23.0/${process.env.ACCOUNT_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: `+52${tel}`,
        type: "template",
        template: {
          name: "recordatorio_boda",
          language: {
            code: "es_MX",
            policy: "deterministic",
          },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: `${fecha}` },
                { type: "text", text: `${telReference}` },
                { type: "text", text: `${linkInvitacion}` },
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

// en la UI se tendria que poner un boton donde
// se limite el uso a 1 cuenta por persona
// el boton se habilite 1 semana antes de la fecha de boda
// en user agregar la fecha evento a la base como un date
// mande la invitacion ID , el tel de refencia
export async function POST(req: NextRequest) {
  const body = await req.json();

  const invitationLink = await prisma.invitacion.findFirst({
    where: { id: body.invitationId },
    select: { link: true },
  });
  const linkForsending = invitationLink.link;

  const invitadosConfirmados = await prisma.invitados.findMany({
    where: { invitacionId: body.invitationId },
    select: {
      tel: true,
      pasesAsignados: true,
      pasesConfirmados: true,
      nombre: true,
    },
  });
  //   console.log(invitadosConfirmados);
  const invitadosConfirmadosConSuLink = invitadosConfirmados
    .filter((invitado) => invitado.pasesConfirmados > 0)
    .map((invitado) => {
      return {
        tel: invitado.tel,
        linkCompleto: encodeURI(
          `${linkForsending}?nombre=${invitado.nombre}&tel=${invitado.tel}&pasesAsignados=${invitado.pasesAsignados}`
        ),
      };
    });

  console.log(invitadosConfirmadosConSuLink);
  //  TESTING
  // try {
  //     const recordatorioWhatsApp = await EnviarAtravesDeLaWhatsAp(
  //       body.tel,
  //       body.telReference,
  //       body.fecha,
  //       linkForsending
  //     );
  //     // console.log(recordatorioWhatsApp.response.data);
  //     return NextResponse.json(
  //       {
  //         enviadoPorWhats: recordatorioWhatsApp.data.messages[0].message_status,
  //       },
  //       {
  //         status: 200,
  //       }
  //     );
  //   } catch (error) {
  //     return NextResponse.json({ message: error.message }, { status: 500 });
  //   }

  try {
    // Enviar mensajes a todos los invitados en paralelo
    const resultados = await Promise.all(
      invitadosConfirmadosConSuLink.map((invitado) =>
        EnviarAtravesDeLaWhatsAp(
          invitado.tel, // ← Teléfono del invitado
          "844 140 7682", // ← Si esta referencia viene de otra parte
          "Sábado 13 de Diciembre de 2025", // ← La fecha que usas para el mensaje
          invitado.linkCompleto // ← Link personalizado del invitado
        )
      )
    );

    return NextResponse.json(
      {
        enviados: resultados.map((res, i) => ({
          tel: invitadosConfirmadosConSuLink[i].tel,
          status: res.data.messages[0].message_status,
        })),
        total: resultados.length,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
