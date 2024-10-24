import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="hover:underline">
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/moviedetails" className="hover:underline">
            Movie Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
