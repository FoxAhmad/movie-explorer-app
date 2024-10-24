import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const MovieDetails = ({ movies }) => {
  const { id } = useParams(); // Extract the movie ID from the URL
  const movie = movies.find((m) => m.imdbID === id); // Find the movie by ID
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="mb-4 bg-gray-200 px-4 py-2 rounded">
        Go Back
      </button>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-96 object-cover mb-4" />
        <h2 className="text-2xl font-bold">{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <button
          onClick={handleFavoriteClick}
          className={`mt-4 px-4 py-2 rounded-lg ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
