import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovies = (typeofFetch, searchQuery = '', movieId = '', page = 1) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  const apiUrl = (() => {
    const baseUrl = 'https://api.themoviedb.org/3/';
    const apiKey = 'da32420fa9f1589cda3e8b28e89608b4';

    switch (typeofFetch) {
      case 'trending':
        return `${baseUrl}trending/movie/week?api_key=${apiKey}`;
      case 'search':
        return `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;
      case 'movieInfo':
        return `${baseUrl}movie/${movieId}?api_key=${apiKey}&language=en-US`;
      case 'movieCast':
        return `${baseUrl}movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
      case 'movieReviews':
        return `${baseUrl}movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=${page}`;
      default:
        return '';
    }
  })();

  useEffect(() => {
    const fetchData = async () => {
      if (typeofFetch === 'search' && searchQuery === '') {
        return;
      }
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        error ? console.log(error) : console.log('done');
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, searchQuery, typeofFetch]);

  return { data, loading, error, baseImgUrl };
};

export default useFetchMovies;
