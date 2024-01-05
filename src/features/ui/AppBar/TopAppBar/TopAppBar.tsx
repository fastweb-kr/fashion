import { useLocation } from 'react-router-dom';
import * as S from './TopAppBar.styled';
import uuid from 'react-uuid';
import { useEffect, useState } from 'react';
import { RootState } from '../../../../redux/config/configStore';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUrl, setPrevUrl } from '../../../../redux/modules';

interface Nav {
  id: string;
  name: string;
}

const STYLE_WRITE_PAGE = '/write';
const LOGIN_PAGE = '/login';

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

  const dispatch = useDispatch();
  const { prevUrl, currentUrl } = useSelector((state: RootState) => state.url);

  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const [activeNav, setActiveNav] = useState<Nav[] | null>(null);

  const [isActiveTopAppBar, setIsActiveTopAppBar] = useState(false);
  const [isWritePage, setIsWritePage] = useState(false);

  const updateUrlState = () => {
    dispatch(setPrevUrl({ prevUrl: currentUrl }));
  };

  const activeBackArrowButton = () => {
    const hideTopAppBarPageList = [LOGIN_PAGE, STYLE_WRITE_PAGE];
    const isHideTopAppBarPage = hideTopAppBarPageList.includes(location.pathname);

    setIsActiveTopAppBar(isHideTopAppBarPage);
  };

  const activeWriteButton = () => {
    const activeWritePageList = [STYLE_WRITE_PAGE];
    const activeWritePage = activeWritePageList.includes(location.pathname);
    setIsWritePage(activeWritePage);
  };

  const toggleTopAppBar = () => {
    /** TopAppBar 뒤로가기 버튼 활성화 */
    activeBackArrowButton();

    /** TopAppBar 글쓰기 버튼 활성화 */
    activeWriteButton();
  };

  useEffect(() => {
    updateUrlState();
  }, [currentUrl]);

  useEffect(() => {
    toggleTopAppBar();

    switch (path) {
      case 'rank':
        setActiveNav(rankNav);
        break;

      case 'community':
        setActiveNav(communityNav);
        break;

      case 'login':
        setActiveNav(null);
        break;

      case 'match':
        setActiveNav(null);
        // setIsActiveTopAppBar(true);
        break;

      case 'style':
        setActiveNav(null);
        setIsActiveTopAppBar(true);
        break;

      default:
        setActiveNav(mainNav);
        break;
    }

    return () => {
      const newUrl = location.pathname;

      dispatch(setCurrentUrl({ currentUrl: newUrl }));
    };
  }, [location.pathname]);

  return (
    <>
      <S.Container>
        <S.Inner>
          {isActiveTopAppBar ? (
            <S.Header>
              <S.ArrowBack to={String(prevUrl)}>
                <img src="/img/ico-arrow-back.svg" />
              </S.ArrowBack>

              <S.WriteButtonWrap className={isWritePage ? '' : 'hidden'}>
                <S.WriteButton>글쓰기</S.WriteButton>
              </S.WriteButtonWrap>
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

          <S.Nav className={isActiveTopAppBar || activeNav === null ? 'hidden' : ''}>
            {activeNav?.map((navItem) => (
              <S.NavItem key={navItem.id}>
                <a>{navItem.name}</a>
              </S.NavItem>
            ))}
          </S.Nav>
        </S.Inner>
      </S.Container>
      <S.TopAppBarMarginBox className={isActiveTopAppBar ? 'hidden' : ''} />
    </>
  );
};

export default TopAppBar;
