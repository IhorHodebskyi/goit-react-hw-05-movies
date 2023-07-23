import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCastMovie } from 'service/API';
import { BASE_POSTER_URL, PLACEHOLDER } from 'units/constants';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { cast } = await getCastMovie(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieCast();
  }, [movieId, setCast]);

  return (
    <ul>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <li key={id}>
          <img
            src={`${
              profile_path
                ? BASE_POSTER_URL + profile_path
                : PLACEHOLDER + '?text=' + original_name
            }`}
            alt={original_name}
          />
          <p>
            <span> Actor:</span> {original_name}
          </p>
          <p>
            <span>Character:</span> {character}
          </p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
