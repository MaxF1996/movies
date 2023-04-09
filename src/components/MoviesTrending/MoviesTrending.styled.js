import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesTrendingHeader = styled.h1`
  text-align: center;
`;

export const MoviesTrendingList = styled.ul`
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

export const MoviesTrendingListItem = styled.li``;

export const MovieTrendLink = styled(Link)``;

export const MovieTrendPoster = styled.img``;

export const MovieTrendTitle = styled.h3`
  text-align: center;
`;
