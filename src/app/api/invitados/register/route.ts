import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma";

// agregar nuevo invitado a la lista

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  try {
    const registrarInvitado = await prisma.invitados.create({
      // aqui mismo se pueden manipular datos  que lleguen de forms
      data: {
        nombre: body.nombre,
        pasesAsignados: Number(body.pasesAsignados),
        tel: body.tel,
        pasesConfirmados: Number(body.pasesConfirmados),
        invitacionId: body.invitacionId,
      },
    });

    return NextResponse.json(registrarInvitado, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
