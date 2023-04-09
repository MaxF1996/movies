import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import useFetchMovies from '../../hooks/useFetchMovies';

import {
  MoviesSearchTitle,
  MoviesSearchLink,
  MoviesSearchInput,
  MoviesSearchForm,
  MoviesSearchBtn,
  MoviesSearchList,
  MoviesSearchListItem,
  MoviesSearchPoster,
  MoviesSearchName,
  MoviesSearchFailed,
} from './MoviesSearch.styled';
import Loader from 'components/Loader/Loader';

const MoviesSearch = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');

  const searchQuery = searchParams.get('query');

  const { data, loading, baseImgUrl } = useFetchMovies('search', searchQuery ? searchQuery : '');

  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    if (query) {
      setSearchParams({ query });
      setQuery('');
    }
  };

  const onChange = event => {
    setQuery(event.target.value);
  };

  return (
    <>
      <MoviesSearchTitle>You can search movie here.</MoviesSearchTitle>
      <MoviesSearchForm onSubmit={handleSubmit}>
        <MoviesSearchInput type="text" value={query} onChange={onChange} />
        <MoviesSearchBtn type="submit">Search</MoviesSearchBtn>
      </MoviesSearchForm>
      {loading && <Loader />}
      {loading || !data || data.results.length > 0 || (
        <MoviesSearchFailed>Nothing was Found!</MoviesSearchFailed>
      )}
      {!loading && data && data.results && data.results.length > 0 && (
        <MoviesSearchList>
          {data.results.map(movie => (
            <MoviesSearchListItem key={`${movie.id}`}>
              <MoviesSearchLink to={`${movie.id}`} state={{ from: location }}>
                <MoviesSearchPoster src={`${baseImgUrl}${movie.poster_path}`} alt={movie.title} />
                <MoviesSearchName>{movie.title}</MoviesSearchName>
              </MoviesSearchLink>
            </MoviesSearchListItem>
          ))}
        </MoviesSearchList>
      )}
    </>
  );
};

export default MoviesSearch;
