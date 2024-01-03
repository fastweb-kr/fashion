import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;

  & .swiper-slide {
    width: 95%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:last-child {
      margin-right: var(--global-padding);
    }
  }
`;
