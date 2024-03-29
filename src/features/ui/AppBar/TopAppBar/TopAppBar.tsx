import { useLocation, useParams } from 'react-router-dom';
import * as S from './TopAppBar.styled';
import uuid from 'react-uuid';
import { useEffect, useState } from 'react';
import { RootState } from '../../../../redux/config/configStore';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUrl, setPrevUrl } from '../../../../redux/modules';
import { useStyleItems, useToggleActive } from '../../../../hooks';
import useGoToHome from '../../../../hooks/useGoToHome';

interface Nav {
  id: string;
  name: string;
}

const STYLE_WRITE_PAGE = '/write';
const LOGIN_PAGE = '/login';

const TopAppBar = () => {
  const { id } = useParams<{ id: string }>();

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
  const loginUser = useSelector((state: RootState) => state.user);

  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const [activeNav, setActiveNav] = useState<Nav[] | null>(null);
  const { isActive, toggleActive, resetToggleState } = useToggleActive(false);

  const [isActiveTopAppBar, setIsActiveTopAppBar] = useState(false);
  const [isWritePage, setIsWritePage] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const updateUrlState = () => {
    dispatch(setPrevUrl({ prevUrl: currentUrl }));
  };

  const goToHome = useGoToHome();

  // 글 삭제
  const { deleteStyleItem } = useStyleItems();
  const handleDelete = async () => {
    if (!id) return;
    try {
      await deleteStyleItem(id);
      goToHome();
    } catch (error) {
      console.error('Error Delete Style Item', error);
    }
  };

  // 뒤로가기
  const activeBackArrowButton = () => {
    const hideTopAppBarPageList = [LOGIN_PAGE, STYLE_WRITE_PAGE];
    const isHideTopAppBarPage = hideTopAppBarPageList.includes(location.pathname);

    setIsActiveTopAppBar(isHideTopAppBarPage);
  };

  // 글쓰기
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
    resetToggleState();
  }, [currentUrl]);

  useEffect(() => {
    toggleTopAppBar();
    setIsShare(false);

    switch (path) {
      case 'rank':
        setActiveNav(rankNav);
        break;

      case 'community':
        setActiveNav(communityNav);
        break;

      case 'signup':
      case 'login':
        setActiveNav(null);
        setIsActiveTopAppBar(true);
        break;

      case 'match':
        setActiveNav(null);
        // setIsActiveTopAppBar(true);
        break;

      case 'style':
        setActiveNav(null);
        setIsActiveTopAppBar(true);
        setIsShare(true);
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

              <S.UtilRightWrap>
                {isShare ? (
                  <button>
                    <S.Icon src="/img/ico_share.svg" alt="공유" />
                  </button>
                ) : (
                  ''
                )}

                {loginUser.id && !isWritePage ? (
                  <S.MenusWrap>
                    <button onClick={toggleActive}>
                      <S.Icon src="/img/ico_more.svg" alt="more" />
                    </button>

                    <S.Menus className={isActive ? 'active' : ''}>
                      <S.MenuItem>수정</S.MenuItem>
                      <S.MenuItem onClick={handleDelete}>삭제</S.MenuItem>
                    </S.Menus>
                  </S.MenusWrap>
                ) : (
                  ''
                )}
              </S.UtilRightWrap>

              {isWritePage ? (
                <S.PageTitleWrap className={isWritePage ? '' : 'hidden'}>
                  <S.PageTitle>스타일 공유</S.PageTitle>
                </S.PageTitleWrap>
              ) : (
                ''
              )}
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
