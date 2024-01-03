import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: var(--app-width);
  width: 100%;
  min-height: var(--bottom-appBar-height);
  background-color: var(--color-wh);

  &.hidden {
    display: none;
  }
`;

export const ButtonItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;

  ${(props) =>
    props.className === 'active' &&
    css`
      font-weight: 700;
    `}
`;

export const ButtonIcon = styled.img`
  width: 100%;
  height: 20px;
`;

export const BottomAppBarMarginBox = styled.div`
  display: block;
  height: var(--bottom-appBar-height);
`;
