import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesSearchTitle = styled.h1`
  text-align: center;
`;

export const MoviesSearchForm = styled.form``;

export const MoviesSearchInput = styled.input``;

export const MoviesSearchBtn = styled.button``;

export const MoviesSearchList = styled.ul`
  @media screen and (min-width: 480px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 10px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px 10px;
  }
`;

export const MoviesSearchListItem = styled.li``;

export const MoviesSearchPoster = styled.img``;

export const MoviesSearchName = styled.h3``;

export const MoviesSearchLink = styled(Link)``;

export const MoviesSearchFailed = styled.p``;
