import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET() {
  try {
    const Invitaciones = await prisma.Invitaciones;

    return NextResponse.json(Invitaciones, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
