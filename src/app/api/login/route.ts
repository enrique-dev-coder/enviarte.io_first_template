import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma";

// TODO: aqui mas bien deberia solo mandar el invitation id  y luego hacer validacion desde el server
// esto  como la aplicacion de los planners

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const verificarUsuario = await prisma.user.findFirst({
      where: {
        name: body.name,
      },
      select: {
        name: true,
        password: true,
        invitacionId: true,
      },
    });
    if (verificarUsuario === null) {
      return NextResponse.json(
        {
          acceso: false,
          motivo: "Usuario no encontrado",
        },
        { status: 500 }
      );
    }
    if (verificarUsuario.password === body.password) {
      return NextResponse.json(
        { acceso: true, verificarUsuario },
        { status: 200 }
      );
    }
    if (verificarUsuario.password !== body.password) {
      return NextResponse.json(
        {
          acceso: false,
          motivo:
            "Contraseña o nombre incorrectos,porfavor vuelve a intentarlo",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
