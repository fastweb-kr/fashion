import * as S from './TodayCards.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';

interface MainCarousel {
  id: number;
  imgSrc: string;
}

interface Card {
  id: number;
  imgSrc: string;
}

const TodayCards = () => {
  const initialMainCarousel: MainCarousel[] = [
    { id: 1, imgSrc: '/img/today-card-01.png' },
    { id: 2, imgSrc: '/img/today-card-02.png' },
    { id: 3, imgSrc: '/img/today-card-03.png' },
    { id: 4, imgSrc: '/img/today-card-04.png' },
    { id: 5, imgSrc: '/img/today-card-05.png' },
  ];

  const initialCards: Card[] = [
    { id: 1, imgSrc: '/img/today-card-01.png' },
    { id: 2, imgSrc: '/img/today-card-02.png' },
    { id: 3, imgSrc: '/img/today-card-03.png' },
    { id: 4, imgSrc: '/img/today-card-04.png' },
    { id: 5, imgSrc: '/img/today-card-05.png' },
  ];

  return (
    <>
      <S.mainCarousel>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          modules={[Pagination]}
        >
          {initialMainCarousel.map((item) => (
            <SwiperSlide key={item.id}>
              <S.IconMore src="/img/ico_img_more.svg" />
              <img src={item.imgSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.mainCarousel>

      <S.Container>
        {initialCards.map((card) => (
          <S.Card key={card.id}>
            <S.IconMore src="/img/ico_img_more.svg" />
            <S.CardFigure>
              <S.CardImg src={card.imgSrc} alt={`Card ${card.id}`} />
            </S.CardFigure>
          </S.Card>
        ))}
      </S.Container>
    </>
  );
};

export default TodayCards;
