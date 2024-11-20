function Movie({ movie }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <img 
          src={movie.Poster} 
          alt={movie.Title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 bg-primary">
          <h2 className="text-white text-center font-semibold truncate">
            {movie.Title}
          </h2>
        </div>
      </div>
    );
  }
  
  export default Movie;