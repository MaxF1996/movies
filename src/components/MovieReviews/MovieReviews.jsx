import { useParams } from 'react-router-dom';
import useFetchMovies from 'hooks/useFetchMovies';
import Loader from 'components/Loader/Loader';
import {
  MovieReviewsFailed,
  MovieReviewsList,
  MovieReviewsListItem,
  MovieReviewsName,
  MovieReviewsText,
  MovieReviewsDate,
} from './MovieReviews.styled';

const MovieReviews = () => {
  const { movieId } = useParams();

  const formatDate = date => {
    const dateObj = new Date(date);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const dateFormatted = dateObj.toLocaleDateString('en-GB', options);
    return dateFormatted;
  };

  const { data, loading } = useFetchMovies('movieReviews', '', movieId);
  return (
    <>
      {loading && <Loader />}
      {loading || !data || data.results.length > 0 || (
        <MovieReviewsFailed>Nothing was Found!</MovieReviewsFailed>
      )}
      {!loading && data && data.results && data.results.length > 0 && (
        <MovieReviewsList>
          {data.results.map(review => (
            <MovieReviewsListItem key={`${review.id}`}>
              <MovieReviewsName>{review.author}:</MovieReviewsName>
              <MovieReviewsText>{review.content}</MovieReviewsText>
              <MovieReviewsDate>{formatDate(review.created_at)}</MovieReviewsDate>
            </MovieReviewsListItem>
          ))}
        </MovieReviewsList>
      )}
    </>
  );
};

export default MovieReviews;
