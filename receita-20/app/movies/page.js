'use client';

import React, { useState } from 'react';
import { searchMovies } from '../actions/movieActions';

const MovieForm = React.memo(
  ({ onSearch, titleSearchKey, yearSearchKey, setTitleSearchKey, setYearSearchKey, isLoading }) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
      className="w-full max-w-2xl bg-gray-800 shadow-lg rounded-lg p-6 mb-10">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Título"
          value={titleSearchKey}
          onChange={(e) => setTitleSearchKey(e.target.value)}
          className="flex-1 p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-400"
        />
        <input
          type="number"
          placeholder="Ano (YYYY)"
          min="1900"
          max={new Date().getFullYear()}
          value={yearSearchKey}
          onChange={(e) => setYearSearchKey(e.target.value)}
          className="flex-1 p-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-400"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`mt-4 w-full p-3 font-semibold rounded-lg transition-transform transform hover:scale-105 text-white shadow-md ${
          isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
        }`}>
        {isLoading ? 'Carregando...' : 'Pesquisar'}
      </button>
    </form>
  )
);

const MovieTable = React.memo(({ movies }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {movies.map((movie) => (
      <div
        key={movie.imdbID}
        className="bg-gray-800 shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform hover:shadow-lg">
        {movie.Poster !== 'N/A' ? (
          <img
            src={movie.Poster}
            alt={`${movie.Title} Poster`}
            className="w-full h-120 object-cover rounded-t-lg"
          />
        ) : (
          <div className="w-full h-80 bg-gray-600 flex items-center justify-center">
            <span className="text-gray-300">Sem pôster disponível</span>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">{movie.Title}</h3>
          <p className="text-gray-400">{movie.Year}</p>
        </div>
      </div>
    ))}
  </div>
));

export default function MoviesPage() {
  const [titleSearchKey, setTitleSearchKey] = useState('');
  const [yearSearchKey, setYearSearchKey] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovies() {
    setIsLoading(true);
    setError(null);

    const result = await searchMovies({ titleSearchKey, yearSearchKey });

    if (result.error) {
      setError(result.error);
      setMovies([]);
    } else {
      setMovies(result.Search || []);
      if (!result.Search || result.Search.length === 0) {
        setError('Nenhum filme encontrado.');
      }
    }

    setTitleSearchKey('');
    setYearSearchKey('');
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-purple-500 mb-8 drop-shadow-lg">Bem-vindo à Movies</h1>
      <MovieForm
        onSearch={fetchMovies}
        titleSearchKey={titleSearchKey}
        yearSearchKey={yearSearchKey}
        setTitleSearchKey={setTitleSearchKey}
        setYearSearchKey={setYearSearchKey}
        isLoading={isLoading}
      />
      {error && <div className="text-red-500 text-lg mb-6 bg-gray-800 p-4 rounded-lg">{error}</div>}
      <MovieTable movies={movies} />
    </div>
  );
}
