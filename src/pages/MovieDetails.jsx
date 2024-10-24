import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=batman&apikey=8d93900b/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {movie ? (
        <div className="flex flex-col md:flex-row">
          <img src={movie.poster} alt={movie.title} className="w-64 h-auto mb-4 md:mb-0" />
          <div className="md:ml-8">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-gray-600">Release Date: {movie.releaseDate}</p>
            <p className="text-gray-600">Rating: {movie.rating}</p>
            <p className="mt-4">{movie.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetails;
