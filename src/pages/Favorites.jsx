import React from 'react';
import MovieList from '../components/MovieList';
import { useFavorites } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <MovieList movies={favorites} />
      )}
    </div>
  );
};

export default Favorites;
