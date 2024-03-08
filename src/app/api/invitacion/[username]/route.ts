import { NextRequest, NextResponse } from "next/server";

// obtener datos de usuarios por username  (aunque ahorita no sirve mucho)
// Mejor en el cookie guardar la invitation Id y con eso hacer queries

export async function GET(
  req: NextRequest,
  params: { params: { username: string } }
) {
  const { username } = params.params;

  return NextResponse.json(username, {
    status: 200,
  });
}
