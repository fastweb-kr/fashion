import { useEffect, useState } from 'react';
import { BottomAppBar, Fab, TopAppBar } from '../../..';
import * as S from './AppLayout.styled';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const [distanceToRight, setDistanceToRight] = useState(0);

  const getDistanceToRight = () => {
    const appElement = document.querySelector('.app');

    if (appElement) {
      const rect = appElement.getBoundingClientRect();
      const newDistanceToRight = window.innerWidth - rect.right;

      setDistanceToRight(newDistanceToRight);
    }
  };

  const handleResize = () => {
    getDistanceToRight();
  };

  useEffect(() => {
    getDistanceToRight();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container className="app">
      <TopAppBar />
      <Outlet />
      <Fab positionX={distanceToRight} />
      <BottomAppBar />
    </S.Container>
  );
};

export default AppLayout;
