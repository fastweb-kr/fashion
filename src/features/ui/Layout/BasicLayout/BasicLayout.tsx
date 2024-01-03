import { Outlet } from 'react-router-dom';
import * as S from './BasicLayout.styled';

const BasicLayout = () => {
  return (
    <S.Container>
      <S.Inner>
        <Outlet />
      </S.Inner>
    </S.Container>
  );
};

export default BasicLayout;
