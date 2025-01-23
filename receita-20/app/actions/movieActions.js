'use server';

export async function searchMovies({ titleSearchKey, yearSearchKey }) {
  if (!titleSearchKey || titleSearchKey.trim() === '') {
    return { error: 'O título é obrigatório.' };
  }

  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=e0133284&s=${encodeURIComponent(
        titleSearchKey
      )}`
    );

    if (!res.ok) {
      throw new Error(`Erro na API OMDb: ${res.status}`);
    }

    const data = await res.json();

    if (yearSearchKey) {
      const year = parseInt(yearSearchKey, 10);
      const minYear = year - 5;
      const maxYear = year + 5;

      data.Search = data.Search?.filter((movie) => {
        const movieYear = parseInt(movie.Year, 10);
        return movieYear >= minYear && movieYear <= maxYear;
      }) || [];
    }

    return data;
  } catch (err) {
    return { error: `Erro ao buscar filmes: ${err.message}` };
  }
}
