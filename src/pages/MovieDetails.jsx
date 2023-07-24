import { useNavigate, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieId } from 'service/API';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state ?? '/movies');
  //==================================================

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
    navigate(backLinkLocationRef.current);
  };

  return (
    <>
      <button onClick={handleBackBtn}>On the back</button>
      {movie.length === 0 ? <h2>NO</h2> : <MovieCard movie={movie} />}
      {movie.length === 0 ? (
        <h2>movie</h2>
      ) : (
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>

          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
