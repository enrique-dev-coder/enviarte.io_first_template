//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

async function EnviarAtravesDeApiWhatsApp(
  tel: string,
  nombreEvento: string,
  fechaEvento: string,
  numeroMesa: string
) {
  try {
    return await axios.post(
      `https://graph.facebook.com/v19.0/${process.env.ACCOUNT_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: `+52${tel}`, // numero de telefono
        type: "template",
        template: {
          name: "notificar_mesa_2", // nombre de la plantilla
          language: {
            code: "es_MX",
            policy: "deterministic",
          },
          components: [
            {
              type: "body", // variables para el body
              parameters: [
                {
                  type: "text",
                  text: `${nombreEvento}`,
                },
                // intro
                {
                  type: "text",
                  text: `${fechaEvento}`,
                },
                {
                  type: "text",
                  text: `${numeroMesa}`,
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
  try {
    const respuestaWhatsapp = await EnviarAtravesDeApiWhatsApp(
      body.tel,
      body.nombreEvento,
      body.fechaEvento,
      body.numeroMesa
    );
    console.log();
    if (respuestaWhatsapp?.status === 400) {
      return NextResponse.json(
        {
          message:
            "Lo sentimos no se pudo enviar el mensaje de WhatsApp probablemente el numero no exista",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        enviadoPorWhats: {
          statusTEXT: respuestaWhatsapp.statusText,
          statusCODE: respuestaWhatsapp.status,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
