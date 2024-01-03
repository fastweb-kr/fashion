import { BottomAppBar, Fab, TopAppBar } from '../../..';
import * as S from './AppLayout.styled';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <S.Container>
      <TopAppBar />
      <Outlet />
      <Fab />
      <BottomAppBar />
    </S.Container>
  );
};

export default AppLayout;
