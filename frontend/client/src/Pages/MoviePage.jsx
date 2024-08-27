import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/movieService';
import RatingStars from '../components/RatingStars';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieById(id);
      setMovie(data);
    };
    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <RatingStars rating={movie.rating} />
      <p>{movie.description}</p>
    </div>
  );
};

export default MoviePage;
