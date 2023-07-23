import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieId } from 'service/API';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(movie);

  useEffect(() => {
    const getMovieDay = async () => {
      try {
        const data = await getMovieId(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieDay();
  }, [movieId]);

  return (
    <>
      <MovieCard movie={movie} />{' '}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
