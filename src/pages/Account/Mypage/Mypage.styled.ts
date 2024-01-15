import styled from 'styled-components';
import * as Extends from '../../../features/ui/Card/TodayCards/TodayCards.styled';

export const Container = styled.div`
  padding: 0 var(--global-padding);
  margin-top: 16px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  background-color: var(--color-gray-01);
  border-radius: 30px;
  overflow: hidden;
`;

export const AvatarDefault = styled(Avatar).attrs({ as: 'div' })``;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

export const FollowlWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const Follower = styled.p`
  font-size: 15px;
  color: var(--color-gray-02);

  & span {
    font-weight: 700;
    color: var(--color-bk);
  }
`;

export const Following = styled(Follower)``;

export const updateProfileBtn = styled.button`
  font-size: 16px;
  color: var(--color-gray-04);
  width: 100%;
  border: 1px solid var(--color-gray-01);
  padding: 6px 10px;
  margin: 16px 0;
  border-radius: 4px;
`;

export const UserUtilWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #efefef;
  border-radius: 4px;
  overflow: hidden;
`;

export const UserUtilItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  color: var(--color-gray-02);
  height: 80px;

  & span {
    font-weight: 700;
    color: var(--color-bk);
  }
`;

export const LogoutButton = styled(updateProfileBtn)`
  box-sizing: border-box;
  width: calc(100% - var(--global-padding) * 2);
  position: absolute;
  bottom: var(--bottom-appBar-height);
`;

export const postWrap = styled(Extends.Container)`
  margin-top: 16px;
`;
export const Card = styled(Extends.Card)``;
export const CardFigure = styled(Extends.CardFigure)``;
export const CardImg = styled(Extends.CardImg)``;
export const IconMore = styled(Extends.IconMore)``;
