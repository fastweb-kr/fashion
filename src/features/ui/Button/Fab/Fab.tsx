import { useNavigate } from 'react-router-dom';
import * as S from './Fab.styled';

interface FabProps {
  positionX: number;
}

const GLOBAL_PADDING = 16;

const Fab: React.FC<FabProps> = ({ positionX }) => {
  const navigate = useNavigate();

  const handleWrite = () => {
    navigate('/style/write');
  };

  const fabPosition = {
    right: positionX + GLOBAL_PADDING,
  };

  return (
    <>
      <S.Container>
        <S.Button onClick={handleWrite} style={fabPosition}>
          +
        </S.Button>
      </S.Container>
    </>
  );
};

export default Fab;
