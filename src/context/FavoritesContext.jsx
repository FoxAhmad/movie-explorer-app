import React, { createContext, useState, useContext } from 'react';

// Create context
const FavoritesContext = createContext();

// Custom hook for easier usage of context
export const useFavorites = () => useContext(FavoritesContext);

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Add or remove movie from favorites
  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.imdbID === movie.imdbID);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;