import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p className="text-gray-500">{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="mt-2 text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default MovieItem;
