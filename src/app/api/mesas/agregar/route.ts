import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const nuevaMesa = await prisma.mesa.create({
      data: {
        nombre: body.nombreMesa,
        invitacionId: body.invitacionId,
        numeroMesa: body.numeroMesa,
        invitadosJSON: JSON.stringify(body.invitadosSeleccionados),
      },
    });
    console.log(nuevaMesa);
    return NextResponse.json(nuevaMesa, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
