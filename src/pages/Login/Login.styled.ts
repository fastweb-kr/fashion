import styled from 'styled-components';

export const Container = styled.div`
  margin-top: var(--nav-height);
  padding: 0 var(--global-padding);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 58px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputText = styled.input`
  height: 48px;
  border: 1px solid var(--color-gray-03);
  padding: 0 16px;
  border-radius: 4px;
`;

export const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 4px;
  background-color: var(--color-bk);
  color: var(--color-wh);
  font-weight: 600;
  margin-top: 8px;
  font-size: 18px;
  line-height: 1;
`;

export const SnsLoginWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 82px;
`;

export const KakaoLogin = styled(ButtonLogin)`
  font-size: 16px;
  color: #391b1b;
  margin-top: 0;
  background: url('/img/icon_kakao.svg') #ffeb19;
  background-position: 14px 50%;
  background-repeat: no-repeat;
  background-size: 18px;
`;

export const NaverLogin = styled(ButtonLogin)`
  font-size: 16px;
  color: var(--color-wh);
  margin-top: 0;
  background: url('/img/ico_naver.svg') #6fbf4d;
  background-position: 14px 50%;
  background-repeat: no-repeat;
  background-size: 18px;
`;

export const EmailLogin = styled.button`
  display: inline-block;
  text-align: center;
  background-color: transparent;
  font-size: 14px;
  color: var(--color-black-10);
  text-decoration: underline;
  margin-top: 16px;

  &:hover {
    color: var(--color-black-10);
    text-decoration: underline;
  }
`;

export const LoginBadge = styled.p`
  position: absolute;
  left: 50%;
  transform: translate(-50%, calc(-100% - 10px));
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

export const FindAccountWrap = styled.div`
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 65px;
  border-top: 1px solid var(--color-gray-01);

  font-weight: 700;

  & :first-child::after {
    content: '';
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 18px;
    width: 1px;
    display: block;
    background-color: var(--color-gray-01);
  }

  & button {
    color: var(--color-gray-04);
  }
`;
