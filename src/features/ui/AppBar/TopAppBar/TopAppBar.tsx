import { useLocation } from 'react-router-dom';
import * as S from './TopAppBar.styled';
import uuid from 'react-uuid';
import { useEffect, useState } from 'react';

interface Nav {
  id: string;
  name: string;
}

const TopAppBar = () => {
  const rankNav: Nav[] = [
    { id: uuid(), name: '주간' },
    { id: uuid(), name: '월간' },
    { id: uuid(), name: '매칭' },
    { id: uuid(), name: 'HOT' },
  ];

  const mainNav: Nav[] = [
    { id: uuid(), name: '투데이' },
    { id: uuid(), name: '팔로잉' },
  ];

  const communityNav: Nav[] = [
    { id: uuid(), name: 'OOTD' },
    { id: uuid(), name: 'ITEM추천' },
    { id: uuid(), name: 'Q&A' },
    { id: uuid(), name: '공지/이벤트' },
  ];

  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const [activeNav, setActiveNav] = useState<Nav[] | null>(null);
  const isActive = activeNav !== null;

  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    switch (path) {
      case 'rank':
        setActiveNav(rankNav);
        break;

      case 'community':
        setActiveNav(communityNav);
        break;

      case 'login':
        setIsLoginPage(true);
        setActiveNav(null);
        break;

      case 'match':
        setActiveNav(null);
        break;

      default:
        setActiveNav(mainNav);
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <S.Container>
        <S.Inner>
          {isLoginPage ? (
            <S.Header>
              <S.ArrowBack to="">
                <img src="/img/ico-arrow-back.svg" />
              </S.ArrowBack>
            </S.Header>
          ) : (
            <S.Header>
              <h1>
                <img src="/img/logo.svg" />
              </h1>
              <S.ButtonWrap>
                <button>
                  <img src="/img/ico_search.svg" />
                </button>
                <button>
                  <img src="/img/ico_cart.svg" />
                </button>
              </S.ButtonWrap>
            </S.Header>
          )}

          <S.Nav className={isActive ? '' : 'hidden'}>
            {activeNav?.map((navItem) => (
              <S.NavItem key={navItem.id}>
                <a>{navItem.name}</a>
              </S.NavItem>
            ))}
          </S.Nav>
        </S.Inner>
      </S.Container>
      <S.TopAppBarMarginBox />
    </>
  );
};

export default TopAppBar;
