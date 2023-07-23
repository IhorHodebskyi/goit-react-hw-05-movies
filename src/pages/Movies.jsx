import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import { getMovieBySearch } from 'service/API';
import MovieList from 'components/MovieList/MovieList';
const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });
  const searchValue = searchParams.get('search');
  const firstRender = useRef(true);
  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

  console.log(location);

  useEffect(() => {
    firstRender.current && searchValue && getSearchMovie(searchValue);
  }, [searchValue]);

  const getSearchMovie = async query => {
    try {
      const { results } = await getMovieBySearch(query);
      setMovies([...results]);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <SearchMovieForm
        firstRender={firstRender}
        setSearchParams={setSearchParams}
        searchValue={searchValue}
        getSearchMovie={getSearchMovie}
      />
      {movies && <MovieList movies={movies} />}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;
