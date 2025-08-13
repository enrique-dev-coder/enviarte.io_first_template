import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../../../prisma";

export async function GET(
  req: NextRequest,
  params: { params: { invitationid: string } }
) {
  const { invitationid } = params.params;

  // Validación de parámetros
  if (!invitationid || typeof invitationid !== "string") {
    return NextResponse.json(
      {
        error: "El parámetro 'invitationid' es requerido y debe ser un string.",
      },
      { status: 400 }
    );
  }

  try {
    const invitadosConfirmados = await prisma.invitados.findMany({
      where: { invitacionId: invitationid },
      select: {
        nombre: true,
        pasesConfirmados: true,
        tel: true,
        pasesAsignados: true,
      },
    });

    const invitacionesEnviadas =
      await prisma.invitacionEnviadaConWhatsApp.findMany({
        where: { invitacionId: invitationid },
        select: { nombre: true, tel: true },
      });

    if (!invitadosConfirmados.length && !invitacionesEnviadas.length) {
      return NextResponse.json(
        { message: "No se encontraron registros para esta invitación." },
        { status: 404 }
      );
    }

    // Set de teléfonos confirmados
    const confirmadosSet = new Set(
      invitadosConfirmados.map((inv) => inv.tel?.trim())
    );

    // Filtrar los no confirmados
    const invitacionesEnviadasNoConfirmadas = invitacionesEnviadas
      .filter((enviada) => !confirmadosSet.has(enviada.tel?.trim()))
      .map((enviada) => {
        const confirmado = invitadosConfirmados.find(
          (c) => c.tel?.trim() === enviada.tel?.trim()
        );

        return {
          ...enviada,
          pasesAsignados: confirmado?.pasesAsignados ?? null,
        };
      });

    return NextResponse.json(invitacionesEnviadasNoConfirmadas, {
      status: 200,
    });
  } catch (error) {
    console.error("Error al obtener invitaciones:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al obtener la información." },
      { status: 500 }
    );
  }
}
