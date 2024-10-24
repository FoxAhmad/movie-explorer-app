import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-600'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">Movie Explorer</Link>
        </h1>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/favorites" className="text-white hover:text-gray-300">
            Favorites
          </Link>
          <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-xl text-gray-800 dark:text-white focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={darkMode ? faMoon : faMoon} />
        </button>
      </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
