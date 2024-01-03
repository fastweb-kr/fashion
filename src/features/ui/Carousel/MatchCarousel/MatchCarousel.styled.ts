import styled from 'styled-components';

export const Container = styled.div`
  & .swiper {
    width: 100%;
    height: 100%;
    &:last-child {
      padding-right: var(--global-padding);
    }
  }

  & .swiper-slide {
    width: 187px;
    height: 250px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
