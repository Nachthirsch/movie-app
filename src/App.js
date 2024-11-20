import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'https://www.omdbapi.com';

  useEffect(() => {
    fetchInitialMovies();
  }, []);

  const fetchInitialMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/?apikey=${API_KEY}&s=marvel`);
      if (response.data.Response === 'False') {
        setError(response.data.Error || 'No movies found');
        setMovies([]);
      } else {
        setMovies(response.data.Search || []);
        setError(null);
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch movies');
      setMovies([]);
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/?apikey=${API_KEY}&s=${query}`);
      if (response.data.Response === 'False') {
        setError(response.data.Error || 'No movies found');
        setMovies([]);
      } else {
        setMovies(response.data.Search || []);
        setError(null);
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch movies');
      setMovies([]);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Show your favorite movies" />
      <main className="container mx-auto px-4 py-8">
        <Search onSearch={handleSearch} />
        
        {loading && (
          <div className="text-center">Loading...</div>
        )}
        
        {error && (
          <div className="text-red-500 text-center">{error}</div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;