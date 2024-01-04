import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  max-width: var(--app-width);
  width: 100%;
  background-color: var(--color-wh);
`;

export const Inner = styled.div`
  padding: 0 var(--global-padding);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--header-height);
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--nav-height);
  white-space: nowrap;
  overflow: auto;

  ${(props) =>
    props.className === 'hidden' &&
    css`
      display: none;
    `}
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 16px;
`;

export const TopAppBarMarginBox = styled.div`
  display: block;
  height: var(--top-appBar-height);

  ${(props) =>
    props.className === 'hidden' &&
    css`
      height: var(--header-height);
    `}
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const ArrowBack = styled(Link)``;

export const WriteButtonWrap = styled.div`
  ${(props) =>
    props.className === 'hidden' &&
    css`
      display: none;
    `}
`;

export const WriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 36px;
  margin: 0px;
  background: none var(--color-bk);
  color: var(--color-wh);
  font-size: 14px;
  line-height: 18px;
  padding: 0px 16px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
`;
