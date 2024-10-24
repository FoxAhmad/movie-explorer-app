import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <p className="text-sm text-gray-600">Release Date: {movie.releaseDate}</p>
        <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
      </Link>
    </div>
  );
};

export default MovieItem;
