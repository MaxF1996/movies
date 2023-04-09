import { useLocation } from 'react-router-dom';
import useFetchMovies from '../../hooks/useFetchMovies';
import Loader from 'components/Loader/Loader';

import {
  MoviesTrendingHeader,
  MoviesTrendingList,
  MoviesTrendingListItem,
  MovieTrendLink,
  MovieTrendPoster,
  MovieTrendTitle,
} from './MoviesTrending.styled';

const MoviesTrending = () => {
  const { data, baseImgUrl } = useFetchMovies('trending');
  const location = useLocation();
  // console.log(loading);
  // console.log(data);

  return (
    <>
      <MoviesTrendingHeader>Hello! You can see popular movies here.</MoviesTrendingHeader>
      {data ? (
        <MoviesTrendingList>
          {data.results.map(movie => (
            <MoviesTrendingListItem key={`${movie.id}`}>
              <MovieTrendLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieTrendPoster src={`${baseImgUrl}${movie.poster_path}`} alt={movie.title} />
                <MovieTrendTitle>{movie.title}</MovieTrendTitle>
              </MovieTrendLink>
            </MoviesTrendingListItem>
          ))}
        </MoviesTrendingList>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MoviesTrending;
