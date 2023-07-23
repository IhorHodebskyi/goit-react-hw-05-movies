import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const MovieList = ({ movies }) => {
  const location = useLocation();
  return movies.map(({ title, name, id }) => (
    <li key={id}>
      <Link state={location} key={id} to={`/movies/${id}`}>
        {title || name}
      </Link>
    </li>
  ));
};

export default MovieList;
