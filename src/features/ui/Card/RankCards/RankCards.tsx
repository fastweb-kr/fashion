import * as S from './RankCards.styled';
import uuid from 'react-uuid';

interface Card {
  id: string;
  imgSrc: string;
}

const RankCards = () => {
  const initialCards: Card[] = [
    { id: uuid(), imgSrc: '/img/rank-card-01.png' },
    { id: uuid(), imgSrc: '/img/rank-card-02.png' },
    { id: uuid(), imgSrc: '/img/rank-card-03.png' },
    { id: uuid(), imgSrc: '/img/rank-card-04.png' },
    { id: uuid(), imgSrc: '/img/rank-card-05.png' },
  ];
  return (
    <S.Container>
      {initialCards.map((card, index) => (
        <S.Card key={card.id}>
          <S.RankBadge>{index + 1}</S.RankBadge>
          <S.IconMore src="/img/ico_img_more.svg" />
          <S.CardFigure>
            <S.CardImg src={card.imgSrc} alt={`Card ${card.id}`} />
          </S.CardFigure>
        </S.Card>
      ))}
    </S.Container>
  );
};

export default RankCards;
