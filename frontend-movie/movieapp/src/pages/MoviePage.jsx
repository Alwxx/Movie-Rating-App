import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "../components/ratingstars/RatingStars";
import api from '../services/api';


const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = api.get(`/movies/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
