import { useNavigate, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieId } from 'service/API';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const getMovieDay = async () => {
      try {
        const data = await getMovieId(movieId);
        setMovie(data);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieDay();
  }, [movieId]);

  const handleBackBtn = () => {
    navigate(location.state);
  };

  return (
    <>
      <button onClick={handleBackBtn}>On the back</button>
      <MovieCard movie={movie} />
      <ul>
        <li>
          <Link to="cast" state={location}>
            Cast
          </Link>
        </li>

        <li>
          <Link to="reviews" state={location}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
