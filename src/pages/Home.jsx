import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Optional: to handle errors

  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=8d93900b&s=${query}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search); // Correct the path to the Search array
      } else {
        setMovies([]); // If no movies found, clear the movie list
        setError('No movies found.'); // Optional: display no movies found message
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={fetchMovies} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>} {/* Display error message if there's an error */}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
