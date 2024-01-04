import * as S from './TodayCards.styled';
import 'swiper/css';

import { useNavigate } from 'react-router-dom';
import { useStyleItems } from '../../../../hooks';

const TodayCards = () => {
  const navigate = useNavigate();

  const { styleItems, isLoading } = useStyleItems();

  const handleCardClick = (id: string) => {
    navigate(`/style/${id}`);
  };

  if (isLoading) return;

  return (
    <>
      <S.Container>
        {styleItems?.map((card) => (
          <S.Card key={card.id} onClick={() => handleCardClick(card.id)}>
            <S.IconMore src="/img/ico_img_more.svg" />
            <S.CardFigure>
              <S.CardImg src={card.imgThumb} alt={`Card ${card.id}`} />
            </S.CardFigure>
          </S.Card>
        ))}
      </S.Container>
    </>
  );
};

export default TodayCards;
