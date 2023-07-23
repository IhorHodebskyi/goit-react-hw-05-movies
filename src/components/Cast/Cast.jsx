import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);

  return <div>HI</div>;
};
export default Cast;
