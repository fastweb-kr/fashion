import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
`;

export const IconMore = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
`;

export const Card = styled.div`
  position: relative;
`;

export const CardFigure = styled.figure`
  width: 100%;
  height: 100%;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const mainCarousel = styled.div`
  position: relative;
  display: grid;
  margin-bottom: 1px;

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-slide {
    width: 100%;
    height: 100%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & ${IconMore} {
      width: 18px;
      height: 18px;
      top: 16px;
      right: 16px;
    }
  }

  & .swiper-pagination {
    position: absolute;
    z-index: 99;
    right: 16px;
    bottom: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-wh);
    border-radius: 30px;
    width: 50px;
    height: 20px;
    font-size: 12px;
    font-weight: 900;
    color: #6c6c6c;
    gap: 2px;
  }
`;
