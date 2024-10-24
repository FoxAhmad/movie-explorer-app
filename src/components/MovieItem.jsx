import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p className="text-gray-500">{movie.Year}</p>
    </div>
  );
};

export default MovieItem;
