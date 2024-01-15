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

export const PageTitleWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${(props) =>
    props.className === 'hidden' &&
    css`
      display: none;
    `}
`;

export const PageTitle = styled.h5`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
`;

export const UtilRightWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icon = styled.img`
  height: 18px;
`;

export const MenusWrap = styled.div`
  position: relative;
`;

export const Menus = styled.ul`
  position: absolute;
  z-index: 999;
  background-color: var(--color-wh);
  display: flex;
  flex-direction: column;
  right: 0;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--color-gray-01);
  margin-top: 8px;

  display: none;
  ${(props) =>
    props.className === 'active' &&
    css`
      display: block;
    `}
`;

export const MenuItem = styled.li`
  width: 120px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-gray-01);
  font-size: 15px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;
