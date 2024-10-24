import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      
    <FavoritesProvider>
    <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
