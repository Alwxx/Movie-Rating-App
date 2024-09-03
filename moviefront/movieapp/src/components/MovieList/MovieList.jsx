import { useState } from 'react';
import MovieCard from '../moviecard/Moviecard';

const movies = [
  {
    id: "66d6d634ae232139c8f2b641",
    title: 'Deadpool & Wolverine',
    poster: '/src/assets/deadpool.jpg',
    description: 'Deadpool & Wolverine is a 2024 American superhero film based on Marvel Comics featuring the characters Deadpool and Wolverine.',
    genre: 'Superhero Comedy',
    rating: '8/10',
  },
  {
    id: '66d6d8380d583f8a4ac9fd5b',
    title: 'Alien:Romulus',
    poster: '/src/assets/alien.jpg',
    description: 'Romulus is a 2024 American science fiction horror film directed by Fede Álvarez and written by Álvarez and Rodo Sayagues',
    genre: 'Fiction Horror',
    rating: '7/10',
  },
  {
    id: '66d6d94f0d583f8a4ac9fd5e',
    title: 'The Crow',
    poster: '/src/assets/crow.jpg',
    description: 'The Crow is a 2024 American gothic superhero film directed by Rupert Sanders',
    genre: 'Gothic Superhero',
    rating: '4/10',
  },
  
  {
    id: '66d6da350d583f8a4ac9fd61',
    title: 'Inside Out 2',
    poster: '/src/assets/insideout.jpg',
    description: 'Inside Out 2 is a 2024 American animated coming-of-age film produced by Pixar Animation Studios for Walt Disney Pictures',
    genre: 'Animated',
    rating: '8/10',
  },
];

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="movie-list">
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.poster}
            alt={movie.title}
            onClick={() => handlePosterClick(movie)}
            style={{ cursor: 'pointer', width: '200px', margin: '10px' }}
          />
        ))}
      </div>

      {selectedMovie && <MovieCard movie={selectedMovie} />}
    </div>
  );
};

export default MovieList;
