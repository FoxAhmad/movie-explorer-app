// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Movie Explorer. All rights reserved.
      </p>
      <p className="text-sm mt-1 text-gray-500 dark:text-gray-500">
        Made with ❤️ by Muhammad Ahmad
      </p>
    </footer>
  );
};

export default Footer;
