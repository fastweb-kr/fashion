import { Outlet } from 'react-router-dom';
import * as S from './BasicLayout.styled';
import useScrollToTop from '../../../../hooks/useScrollToTop';

const BasicLayout = () => {
  useScrollToTop();

  return (
    <S.Container>
      <S.ContentWrap>
        <S.ContentInner>
          <S.Logo>
            <img src="/img/logo-wh.svg" />
          </S.Logo>
          <div>
            <S.Title>
              <S.fw500>패션 공유 플랫폼</S.fw500>
              <br />
              픽스타일
            </S.Title>
            <S.QRwrap>
              <S.QRbadge>
                PickStyle 바로가기
                <S.BadgeArrow />
              </S.QRbadge>
              <S.QRcode src="/img/adobe-qr-code.png" />
            </S.QRwrap>
          </div>
        </S.ContentInner>
      </S.ContentWrap>

      <S.Inner>
        <Outlet />
      </S.Inner>
    </S.Container>
  );
};

export default BasicLayout;
