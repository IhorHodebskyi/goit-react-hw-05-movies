import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviewsMovie } from 'service/API';
import { Item, SubTitle } from './Reviews.styled';
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
        <Item key={id}>
          <SubTitle>
            <span>Author:</span> {author}
          </SubTitle>
          <SubTitle>{content}</SubTitle>
        </Item>
      ))}
    </ul>
  );
};
export default Reviews;
