import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const titleSearchKey = searchParams.get("titleSearchKey");
  const yearSearchKey = searchParams.get("yearSearchKey");

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=e0133284&s=${titleSearchKey}&y=${yearSearchKey}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}
