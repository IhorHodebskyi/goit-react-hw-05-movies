import { Link } from 'react-router-dom';
const MovieList = ({ movies }) => {
  return movies.map(({ title, name, id }) => (
    <li key={id}>
      <Link key={id} to={`/movies/${id}`}>
        {title || name}
      </Link>
    </li>
  ));
};

export default MovieList;
