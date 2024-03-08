import { NextResponse } from "next/server";

// agregar nuevo invitado a la lista

export async function GET() {
  return NextResponse.json("invitation id route", {
    status: 200,
  });
}
