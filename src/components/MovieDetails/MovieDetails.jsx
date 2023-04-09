import { useParams, Outlet, useLocation } from 'react-router-dom';
import useFetchMovies from '../../hooks/useFetchMovies';
import Loader from 'components/Loader/Loader';
import {
  MovieSection,
  MoviePoster,
  MovieInfo,
  MovieTitle,
  MovieScore,
  MovieHeader,
  MovieDescription,
  MovieAdditionalInfo,
  MovieAddLink,
  MovieBackBtn,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  //   const navigate = useNavigate();
  //   const handleClick = () => navigate(location?.state?.from ?? '/');

  const { data, loading, baseImgUrl } = useFetchMovies('movieInfo', '', movieId);

  return (
    <>
      <MovieBackBtn to={backLinkHref}>Back to Search</MovieBackBtn>
      {loading && <Loader />}
      {!loading && data && data.id && (
        <>
          <MovieSection>
            <MoviePoster
              src={
                data.poster_path
                  ? `${baseImgUrl}${data.poster_path}`
                  : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
              }
              alt={data.title}
            />
            <MovieInfo>
              <MovieTitle>{data.title}</MovieTitle>
              <MovieScore>User Score: {Math.round(data.vote_average * 10)}%</MovieScore>
              <MovieHeader>Overview</MovieHeader>
              <MovieDescription>{data.overview}</MovieDescription>
              <MovieHeader>Genres</MovieHeader>
              <MovieDescription>{data.genres.map(genre => genre.name).join(', ')}</MovieDescription>
            </MovieInfo>
          </MovieSection>
          <MovieAdditionalInfo>
            <MovieHeader>Additional Info:</MovieHeader>
            <MovieAddLink to={`cast`} state={location.state}>
              Cast
            </MovieAddLink>
            <MovieAddLink to={`reviews`} state={location.state}>
              Reviews
            </MovieAddLink>
            <Outlet />
          </MovieAdditionalInfo>
        </>
      )}
    </>
  );
};

export default MovieDetails;
