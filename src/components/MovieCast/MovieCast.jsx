import { useParams } from 'react-router-dom';
import useFetchMovies from 'hooks/useFetchMovies';
import Loader from 'components/Loader/Loader';
import {
  MovieCastFailed,
  MovieCastList,
  MovieCastListItem,
  MovieCastPoster,
  MovieCastPerson,
  MovieCastName,
  MovieCastRole,
} from './MovieCast.styled';

const MovieCast = () => {
  const { movieId } = useParams();

  const { data, loading, baseImgUrl } = useFetchMovies('movieCast', '', movieId);
  return (
    <>
      {loading && <Loader />}
      {loading || !data || data.cast.length > 0 || (
        <MovieCastFailed>Nothing was Found!</MovieCastFailed>
      )}
      {!loading && data && data.cast && data.cast.length > 0 && (
        <MovieCastList>
          {data.cast.map(actor => (
            <MovieCastListItem key={`${actor.id}`}>
              <MovieCastPoster
                src={
                  actor.profile_path
                    ? `${baseImgUrl}${actor.profile_path}`
                    : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
                }
                alt={actor.name}
              />
              <MovieCastPerson>
                <MovieCastName>{actor.name}:</MovieCastName>
                <MovieCastRole>as {actor.character}</MovieCastRole>
              </MovieCastPerson>
            </MovieCastListItem>
          ))}
        </MovieCastList>
      )}
    </>
  );
};

export default MovieCast;
