import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import { getMovieBySearch } from 'service/API';
import MovieList from 'components/MovieList/MovieList';
const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
  const searchValue = searchParams.get('search');
  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

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
        setSearchParams={setSearchParams}
        searchValue={searchValue}
        getSearchMovie={getSearchMovie}
      />
      {movies && <MovieList movies={movies} />}
      <Outlet />
    </div>
  );
};

export default Movies;
