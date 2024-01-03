import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: fixed;
  z-index: 999;
  bottom: calc(var(--bottom-appBar-height) + 16px);
  right: 16px;
  width: 48px;
  height: 48px;
  background: var(--color-bk);
  border: 1px solid var(--color-wh);
  color: var(--color-wh);
  border-radius: 30px;
  font-size: 20px;
  font-weight: 500;
`;
