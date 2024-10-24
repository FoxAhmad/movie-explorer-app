import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL params
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=8d93900b&i=${id}`);
        if (response.data.Response === 'True') {
          setMovie(response.data);
        } else {
          setError('Movie not found.');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Failed to fetch movie details.');
      }

      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    movie && (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <img src={movie.Poster} alt={`${movie.Title} Poster`} className="mt-4" />
      </div>
    )
  );
};

export default MovieDetails;
