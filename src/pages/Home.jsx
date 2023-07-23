import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMovies } from 'service/API';
import MovieList from '../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const getMovieDay = async () => {
      try {
        const { results } = await getMovies();
        setMovies([...results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieDay();
  }, []);

  return (
    <>
      <div>
        <h1>Trending today</h1>
        <ul>{movies && <MovieList movies={movies} />}</ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default Home;
