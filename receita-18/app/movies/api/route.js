import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const titleSearchKey = searchParams.get("titleSearchKey");

    const res = await fetch(
      `http://www.omdbapi.com/?apikey=e0133284&s=${titleSearchKey}`
    );

    if (!res.ok) {
      throw new Error(`Erro na API OMDb: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
