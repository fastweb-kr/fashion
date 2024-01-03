import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;

  & .swiper-slide {
    width: 40%;

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

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 6px;
`;
