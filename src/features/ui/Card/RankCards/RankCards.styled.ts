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

export const RankBadge = styled.div`
  position: absolute;
  left: 8px;
  top: 5.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 18px;
  border-radius: 30px;
  font-weight: 900;
  color: var(--color-wh);
  background-color: var(--color-bk);
  font-size: 10px;
`;

export const Card = styled.div`
  position: relative;
  &:first-child {
    grid-column: span 2;
    grid-row: 1;

    & ${IconMore} {
      width: 18px;
      top: 16px;
      right: 16px;
    }

    & ${RankBadge} {
      top: 12px;
      left: 16px;
      width: 34px;
      height: 24px;
      font-size: 12px;
    }
  }
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
