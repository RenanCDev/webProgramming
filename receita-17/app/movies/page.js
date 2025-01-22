export default async function Home({ searchParams }) {
  const { 
    titleSearchKey = "bagdad", 
    type = "", 
    yearSearchKey = "", 
    page = 1 
  } = await searchParams;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=e0133284&s=${titleSearchKey}&type=${type}&page=${page}`
  );

  const data = await res.json();

  if (!data.Search) {
    return <div>Não foram encontrados resultados para a pesquisa.</div>;
  }

  const filteredMovies = yearSearchKey
    ? data.Search.filter((movie) => {
        const movieYear = parseInt(movie.Year, 10);
        const startYear = Math.floor(parseInt(yearSearchKey, 10) / 10) * 10;
        const endYear = startYear + 10;

        return movieYear >= startYear && movieYear < endYear;
      })
    : data.Search;

  if (filteredMovies.length === 0) {
    return <div>Nenhum filme encontrado para a década especificada.</div>;
  }

  return (
    <div>
      {filteredMovies.map((m) => (
        <div key={m.imdbID}>
          <h3>
            {m.Title} --- {m.Year}
          </h3>
          {m.Poster !== "N/A" ? (
            <img
              src={m.Poster}
              alt={`${m.Title} Poster`}
              style={{ width: "200px", height: "auto" }}
            />
          ) : (
            <p>Sem pôster disponível</p>
          )}
        </div>
      ))}
    </div>
  );
}
