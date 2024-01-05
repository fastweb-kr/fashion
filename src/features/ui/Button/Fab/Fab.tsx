import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Fab.styled';
import { useGetDistanceToRight } from '../../../../hooks';

const GLOBAL_PADDING = 16;
const HidePageList = ['login', 'write', 'style', 'community', 'rank', 'match'];

const Fab = () => {
  const navigate = useNavigate();
  const positionX = useGetDistanceToRight();

  const handleWrite = () => {
    navigate('/write?category=style');
  };

  const ishidePage = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[1];

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
