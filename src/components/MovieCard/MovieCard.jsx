import { BASE_POSTER_URL, PLACEHOLDER } from 'units/constants';

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <div>
        <img
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          alt=""
        />
        <ul>
          <li>
            <h2>{movie.original_title}</h2>
            <p>Rating: {Math.round(movie.vote_average)}</p>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h2>Genres</h2>{' '}
            <ul>
              {movie.genres?.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieCard;
