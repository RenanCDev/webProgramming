export default async function Home({ searchParams }) {
    const { 
      titleSearchKey = 'bagdad', 
      type = '', 
      year = '', 
      page = 1 
    } = await searchParams;
  
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
              <h3>{m.Title} --- {m.Year}</h3>
              {m.Poster !== 'N/A' && (
                <img 
                  src={m.Poster} 
                  alt={`${m.Title} Poster`} 
                  style={{ width: '200px', height: 'auto' }} 
                />
              )}
              {m.Poster === 'N/A' && <p>Sem pôster disponível</p>}
            </div>
          ))}
        </div>
      </div>
    );
  }
  