import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const MovieItem = ({ movie }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <img src={movie.Poster} alt={`${movie.Title} Poster`} className="w-full h-60 object-cover rounded" />
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-lg font-bold dark:text-white">{movie.Title}</h2>
        <button onClick={() => toggleFavorite(movie)}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <p className="dark:text-gray-300">{movie.Year}</p>
    </div>
  );
};

export default MovieItem;
