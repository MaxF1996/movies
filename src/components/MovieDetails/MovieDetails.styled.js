import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const MovieBackBtn = styled(Link)``;

export const MovieSection = styled.section`
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`;

export const MoviePoster = styled.img`
  max-width: 350px;
  margin: 0 auto;
`;

export const MovieInfo = styled.div``;

export const MovieTitle = styled.h1``;

export const MovieScore = styled.p``;

export const MovieDescription = styled.p``;

export const MovieHeader = styled.h3``;

export const MovieAdditionalInfo = styled.section``;

export const MovieAddLink = styled(NavLink)`
  display: block;
  max-width: fit-content;
`;
