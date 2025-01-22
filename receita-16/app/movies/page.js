export default async function Home({ searchParams }) {
    const { 
      titleSearchKey = 'bagdad', 
      type = '',
      year = '',
      page = 1
    } = searchParams;
  
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=e0133284&s=${titleSearchKey}&type=${type}&y=${year}&page=${page}`
    );
  
    const data = await res.json();
  
    if (!data.Search) {
      return <div>Não foram encontrados resultados para a pesquisa.</div>;
    }
  
    return (
      <div>
        <div>
          {data.Search.map((m) => (
            <div key={m.imdbID}>
              {m.Title} --- {m.Year}
            </div>
          ))}
        </div>
      </div>
    );
  }
  