import styled from 'styled-components';

export const Container = styled.div``;

export const UserSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 var(--global-padding);
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserAvatarFigure = styled.figure`
  width: 48px;
  height: 48px;
  background-color: var(--color-gray-01);
  border-radius: 30px;
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
`;

export const UserDesc = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: var(--color-gray-02);
`;

export const FollowButton = styled.button`
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
