import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query = 'random') => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=8d93900b&s=${query}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError('No movies found.');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Please try again later.');
    }
    setLoading(false);
  };

  // Fetch initial movies when the component mounts
  useEffect(() => {
    fetchMovies(); // Initial fetch with 'random' query or default query
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={fetchMovies} /> {/* Pass fetchMovies as the search handler */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
