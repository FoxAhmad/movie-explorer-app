import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';

const App = () => {
  const dummyMovies = [
    { imdbID: 'tt0111161', Title: 'The Shawshank Redemption', Year: '1994', Poster: 'https://via.placeholder.com/150' },
    { imdbID: 'tt0068646', Title: 'The Godfather', Year: '1972', Poster: 'https://via.placeholder.com/150' },
    { imdbID: 'tt0071562', Title: 'The Godfather: Part II', Year: '1974', Poster: 'https://via.placeholder.com/150' },
    { imdbID: 'tt0468569', Title: 'The Dark Knight', Year: '2008', Poster: 'https://via.placeholder.com/150' },
    { imdbID: 'tt0050083', Title: '12 Angry Men', Year: '1957', Poster: 'https://via.placeholder.com/150' },
  ];

  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home movies={dummyMovies} />} />
          <Route path="/movie/:id" element={<MovieDetails movies={dummyMovies} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
