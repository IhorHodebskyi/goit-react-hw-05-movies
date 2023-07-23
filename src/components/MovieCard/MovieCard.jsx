import { BASE_POSTER_URL, PLACEHOLDER } from 'units/constants';

const MovieCard = ({
  movie: { poster_path, original_title, vote_average, overview, genres },
}) => {
  return (
    <>
      <div>
        <img
          src={`${
            poster_path
              ? BASE_POSTER_URL + poster_path
              : PLACEHOLDER + '?text=' + original_title
          }`}
          alt=""
        />
        <ul>
          <li>
            <h2>{original_title}</h2>
            <p>Rating: {Math.round(vote_average)}</p>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{overview}</p>
          </li>
          <li>
            <h2>Genres</h2>{' '}
            <ul>
              {genres?.map(({ name, id }) => (
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
