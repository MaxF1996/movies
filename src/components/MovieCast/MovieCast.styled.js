import styled from 'styled-components';

export const MovieCastFailed = styled.p``;

export const MovieCastList = styled.ul`
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

export const MovieCastListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MovieCastPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieCastPoster = styled.img``;

export const MovieCastName = styled.h3``;

export const MovieCastRole = styled.h4``;
