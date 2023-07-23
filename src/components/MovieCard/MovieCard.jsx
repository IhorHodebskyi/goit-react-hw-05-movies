import { BASE_POSTER_URL, PLACEHOLDER } from 'units/constants';
import { FilmImg, List, Wrapper, Item } from 'pages/MovieDetails.styled';
const MovieCard = ({
  movie: { poster_path, original_title, vote_average, overview, genres },
}) => {
  return (
    <>
      <Wrapper>
        <FilmImg
          src={`${
            poster_path
              ? BASE_POSTER_URL + poster_path
              : PLACEHOLDER + '?text=' + original_title
          }`}
          alt=""
        />
        <List>
          <Item>
            <h2>{original_title}</h2>
            <p>Rating: {Math.round(vote_average)}</p>
          </Item>
          <Item>
            <h2>Overview</h2>
            <p>{overview}</p>
          </Item>
          <Item>
            <h2>Genres</h2>{' '}
            <ul>
              {genres?.map(({ name, id }) => (
                <Item key={id}>{name}</Item>
              ))}
            </ul>
          </Item>
        </List>
      </Wrapper>
    </>
  );
};

export default MovieCard;
