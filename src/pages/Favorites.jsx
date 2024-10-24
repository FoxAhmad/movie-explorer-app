import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import MovieList from '../components/MovieList';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>You have no favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;
