import { useState } from 'react';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-xl mx-auto my-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          SEARCH
        </button>
      </form>
    );
  }
  
  export default Search;