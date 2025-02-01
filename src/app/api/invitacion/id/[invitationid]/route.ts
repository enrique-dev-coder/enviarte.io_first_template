import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../../../prisma";
// info de invitacion por id haciendo peticion al url con id de parametro
// 65df62e264903d5c4bb5053e

export async function GET(
  req: NextRequest,
  params: { params: { invitationid: string } }
) {
  const { invitationid } = params.params;
  try {
    const invitationInfo = await prisma.invitacion.findFirst({
      where: {
        id: invitationid,
      },
      select: {
        invitationName: true,
        linkFoto: true,
      },
    });
    return NextResponse.json(invitationInfo, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
