import { NextResponse } from "next/server";

const mockMovies = [
  {
    imdbID: "tt0111161",
    Title: "The Shawshank Redemption",
    Year: "1994",
  },
  {
    imdbID: "tt0068646",
    Title: "The Godfather",
    Year: "1972",
  },
  {
    imdbID: "tt0071562",
    Title: "The Godfather: Part II",
    Year: "1974",
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const titleSearchKey = searchParams.get("titleSearchKey")?.toLowerCase() || "";

    const filteredMovies = mockMovies.filter((movie) =>
      movie.Title.toLowerCase().includes(titleSearchKey)
    );

    return NextResponse.json(filteredMovies);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
