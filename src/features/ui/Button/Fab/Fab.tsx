import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Fab.styled';
import { useGetDistanceToRight } from '../../../../hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/config/configStore';

const GLOBAL_PADDING = 16;
const HidePageList = ['login', 'write', 'style', 'community', 'rank', 'match', 'signup', 'mypage'];

const Fab = () => {
  const navigate = useNavigate();
  const positionX = useGetDistanceToRight();
  const loginUser = useSelector((state: RootState) => state.user);

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
      {loginUser.id ? (
        <S.Container>
          <S.Button onClick={handleWrite} style={fabPosition} className={ishidePage() ? 'hidden' : ''}>
            +
          </S.Button>
        </S.Container>
      ) : (
        ''
      )}
    </>
  );
};

export default Fab;
