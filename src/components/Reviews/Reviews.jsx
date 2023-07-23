import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviewsMovie } from 'service/API';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { results } = await getReviewsMovie(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieCast();
  }, [movieId, setReviews]);

  return reviews.length === 0 ? (
    <h3>No Reviews.</h3>
  ) : (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
