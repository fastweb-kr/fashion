import { MatchCarousel } from '../../features';
import * as S from './March.styled';

interface Card {
  id: number;
  imgSrc: string;
}

const Match = () => {
  const initialCards: Card[] = [
    { id: 1, imgSrc: '/img/today-card-01.png' },
    { id: 2, imgSrc: '/img/today-card-02.png' },
    { id: 3, imgSrc: '/img/today-card-03.png' },
    { id: 4, imgSrc: '/img/today-card-04.png' },
    { id: 5, imgSrc: '/img/today-card-05.png' },
  ];

  return (
    <S.Container>
      <S.section>
        <S.Title>나와 99% 맞는 픽서</S.Title>
        <MatchCarousel cards={initialCards} />
      </S.section>

      <S.section>
        <S.Title>투데이 HOT 픽서</S.Title>
        <MatchCarousel cards={initialCards} />
      </S.section>

      <S.section>
        <S.Title>주간 HOT 픽서</S.Title>
        <MatchCarousel cards={initialCards} />
      </S.section>
    </S.Container>
  );
};

export default Match;
