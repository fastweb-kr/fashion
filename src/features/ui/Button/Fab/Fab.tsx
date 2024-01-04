import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Fab.styled';
import { useState } from 'react';

interface FabProps {
  positionX: number;
}

const GLOBAL_PADDING = 16;
const HidePageList = ['login'];

const Fab: React.FC<FabProps> = ({ positionX }) => {
  const navigate = useNavigate();

  const handleWrite = () => {
    navigate('/style/write');
  };

  const ishidePage = () => {
    const location = useLocation();
    const path = location.pathname;

    return HidePageList.includes(path);
  };

  const fabPosition = {
    right: positionX + GLOBAL_PADDING,
  };

  return (
    <>
      <S.Container>
        <S.Button onClick={handleWrite} style={fabPosition} className={ishidePage() ? 'hidden' : ''}>
          +
        </S.Button>
      </S.Container>
    </>
  );
};

export default Fab;
