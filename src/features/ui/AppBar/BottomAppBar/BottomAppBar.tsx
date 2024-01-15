import { useLocation } from 'react-router-dom';
import uuid from 'react-uuid';
import * as S from './BottomAppBar.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/config/configStore';

interface Tabs {
  id: string;
  to: string;
  iconSrc: string;
  ActiveIconSrc: string;
  label: string;
}

const BottomAppBar = () => {
  const location = useLocation();
  const path = '/' + (location.pathname.split('/')[1] || '');
  const loginUser = useSelector((state: RootState) => state.user);

  const tabs: Tabs[] = [
    { id: uuid(), to: '/', iconSrc: '/img/ico_home.svg', ActiveIconSrc: '/img/ico_home_pressed.svg', label: '홈' },
    { id: uuid(), to: '/community', iconSrc: '/img/ico_community.svg', ActiveIconSrc: '/img/ico_community_pressed.svg', label: '커뮤니티' },
    { id: uuid(), to: '/match', iconSrc: '/img/ico_match.svg', ActiveIconSrc: '/img/ico_match_pressed.svg', label: '픽서매칭' },
    { id: uuid(), to: '/rank', iconSrc: '/img/ico_rank.svg', ActiveIconSrc: '/img/ico_rank_pressed.svg', label: '랭킹' },
    { id: uuid(), to: '/login', iconSrc: '/img/ico_user.svg', ActiveIconSrc: '/img/ico_user.svg', label: '로그인' },
  ];

  const loginTabs: Tabs[] = [
    { id: uuid(), to: '/', iconSrc: '/img/ico_home.svg', ActiveIconSrc: '/img/ico_home_pressed.svg', label: '홈' },
    { id: uuid(), to: '/community', iconSrc: '/img/ico_community.svg', ActiveIconSrc: '/img/ico_community_pressed.svg', label: '커뮤니티' },
    { id: uuid(), to: '/match', iconSrc: '/img/ico_match.svg', ActiveIconSrc: '/img/ico_match_pressed.svg', label: '픽서매칭' },
    { id: uuid(), to: '/rank', iconSrc: '/img/ico_rank.svg', ActiveIconSrc: '/img/ico_rank_pressed.svg', label: '랭킹' },
    { id: uuid(), to: '/mypage', iconSrc: '/img/ico_user.svg', ActiveIconSrc: '/img/ico_user.svg', label: '마이페이지' },
  ];

  const [renderTabs, setRenderTabs] = useState(tabs);

  const isActive = (urlPath: string) => {
    return urlPath === path ? true : false;
  };

  const [isBottomAppBarHide, setIsBottomAppBarHide] = useState(false);

  const checkLoginPage = () => {
    switch (path) {
      case 'signup':
      case 'login':
        setIsBottomAppBarHide(true);
        break;
      default:
        setIsBottomAppBarHide(false);
        break;
    }
  };

  useEffect(() => {
    setRenderTabs(loginUser ? loginTabs : tabs);
  }, [loginUser]);

  useEffect(() => {
    checkLoginPage();

    switch (path) {
      case '/write':
      case '/login':
      case '/signup':
        setIsBottomAppBarHide(true);
        break;
    }
  }, [path]);

  return (
    <>
      <S.Container className={isBottomAppBarHide ? 'hidden' : ''}>
        {renderTabs.map((tab) => (
          <S.ButtonItem key={tab.id} to={tab.to} className={isActive(tab.to) ? 'active' : ''}>
            <S.ButtonIcon src={isActive(tab.to) ? tab.ActiveIconSrc : tab.iconSrc} />
            {tab.label}
          </S.ButtonItem>
        ))}
      </S.Container>
      <S.BottomAppBarMarginBox />
    </>
  );
};

export default BottomAppBar;
