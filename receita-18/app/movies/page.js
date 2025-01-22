"use client";

import { useState } from "react";

export default function MoviesPage() {
  const [titleSearchKey, setTitleSearchKey] = useState("");
  const [yearSearchKey, setYearSearchKey] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      if (!titleSearchKey.trim()) {
        setError("Por favor, insira um título para a busca.");
        return;
      }

      const targetYear = Number(yearSearchKey);
      if (isNaN(targetYear)) {
        setError("Por favor, insira um ano válido.");
        return;
      }

      const minYear = targetYear - 5;
      const maxYear = targetYear + 5;

      const res = await fetch(`/movies/api?titleSearchKey=${titleSearchKey}`);
      const data = await res.json();

      if (data.Search) {
        const filteredMovies = data.Search.filter((movie) => {
          const year = parseInt(movie.Year, 10);
          return year >= minYear && year <= maxYear;
        });

        setMovies(filteredMovies);
        setError(filteredMovies.length > 0 ? null : "Nenhum filme encontrado no intervalo de anos.");
      } else {
        setMovies([]);
        setError(data.error || "Nenhum filme encontrado.");
      }
    } catch {
      setError("Erro ao buscar os filmes.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Bem-vindo à Movies</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Título"
          value={titleSearchKey}
          onChange={(e) => setTitleSearchKey(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <input
          type="number"
          placeholder="Ano (YYYY)"
          min="1900"
          max={new Date().getFullYear()}
          value={yearSearchKey}
          onChange={(e) => setYearSearchKey(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "white",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Pesquisar
        </button>
      </form>

      {error && <div style={{ textAlign: "center", color: "red" }}>{error}</div>}

      {movies.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            padding: "10px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ fontSize: "18px" }}>
                {movie.Title} --- {movie.Year}
              </h3>
              {movie.Poster !== "N/A" ? (
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} Poster`}
                  style={{
                    width: "150px",
                    height: "225px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "150px",
                    height: "225px",
                    backgroundColor: "#ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                  }}
                >
                  Sem pôster disponível
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
