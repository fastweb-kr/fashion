import { useNavigate } from 'react-router-dom';
import * as S from './Fab.styled';

const Fab = () => {
  const navigate = useNavigate();

  const handleWrite = () => {
    navigate('/style/write');
  };

  return (
    <>
      <S.Container>
        <S.Button onClick={handleWrite}>+</S.Button>
      </S.Container>
    </>
  );
};

export default Fab;
