import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter(movie => movie.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
