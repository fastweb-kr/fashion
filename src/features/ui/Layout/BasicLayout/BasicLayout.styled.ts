import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContentWrap = styled.div`
  background: url(/img/bg_main.jpg);
  position: fixed;
  z-index: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const ContentInner = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  margin-top: 52px;
`;

export const Inner = styled.div`
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Logo = styled.p`
  color: var(--color-wh);
  font-size: 24px;
  font-weight: 600;
`;

export const Title = styled.h1`
  color: var(--color-wh);
  font-weight: 600;
  font-size: 48px;
  line-height: 1.2;
  margin-top: 120px;
  margin-bottom: 80px;
`;

export const QRwrap = styled.div`
  position: relative;
`;

export const QRcode = styled.img`
  width: 160px;
  height: 160px;
`;

export const QRbadge = styled.p`
  position: absolute;
  top: -42px;
  /* transform: translate(-50%, 10px); */
  background-color: #ff4800;
  color: var(--color-wh);
  font-size: 12px;
  font-weight: 600;
  padding: 9px 18px;
  border-radius: 30px;
`;

export const BadgeArrow = styled.span`
  position: absolute;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid #ff4800;
  bottom: -10px;
  left: 50%;
  margin-left: -3px;
  transform: rotate(90deg) translateX(-50%);
`;

export const fw500 = styled.span`
  font-weight: 500;
`;
