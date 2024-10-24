import React, { useContext } from 'react';
import MovieList from '../components/MovieList';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
