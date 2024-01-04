import { Outlet } from 'react-router-dom';
import * as S from './BasicLayout.styled';
import useScrollToTop from '../../../../hooks/useScrollToTop';

const BasicLayout = () => {
  useScrollToTop();

  return (
    <S.Container>
      <S.Inner>
        <Outlet />
      </S.Inner>
    </S.Container>
  );
};

export default BasicLayout;
