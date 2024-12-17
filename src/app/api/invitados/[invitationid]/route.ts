import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../../prisma";
// traer invitados mediante id de invitacion
// 65df62e264903d5c4bb5053e

// esto te manda un Array [] con los invitados de esa id de invitacion

export async function GET(
  req: NextRequest,
  params: { params: { invitationid: string } }
) {
  const nombreInvitadoBuscado = req.nextUrl.searchParams.get("nombre");
  const { invitationid } = params.params;

  if (nombreInvitadoBuscado) {
    try {
      const invitadosConfirmados = await prisma.invitados.findMany({
        where: {
          invitacionId: invitationid,
          nombre: { contains: nombreInvitadoBuscado },
        },
        select: {
          nombre: true,
          pasesAsignados: true,
          pasesConfirmados: true,
          tel: true,
        },
      });
      return NextResponse.json(invitadosConfirmados, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json(
        { error, mensaje: "No se pudieron cargar los invitados" },
        {
          status: 500,
        }
      );
    }
  }

  try {
    const invitadosConfirmados = await prisma.invitados.findMany({
      where: {
        invitacionId: invitationid,
      },
      select: {
        id: true,
        nombre: true,
        pasesAsignados: true,
        pasesConfirmados: true,
        tel: true,
      },
    });
    return NextResponse.json(invitadosConfirmados, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error, mensaje: "No se pudieron cargar los invitados" },
      {
        status: 500,
      }
    );
  }
}
