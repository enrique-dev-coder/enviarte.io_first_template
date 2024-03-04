import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        evento: body.evento,
        rol: body.evento,
      },
    });
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
