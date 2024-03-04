import { NextResponse } from "next/server";

// agregar nuevo invitado a la lista

export async function GET() {
  return NextResponse.json("aqui irian los invitados si tuviera xd", {
    status: 200,
  });
}
