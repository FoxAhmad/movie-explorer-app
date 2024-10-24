import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return <p>No movies available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} /> 
      ))}
    </div>
  );
};

export default MovieList;
