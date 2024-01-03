import * as S from './MatchCarousel.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Card {
  id: number;
  imgSrc: string;
}

interface MatchCarouselProps {
  cards: Card[];
}

const MatchCarousel = ({ cards }: MatchCarouselProps) => {
  const settings = {
    slidesPerView: 2,
    spaceBetween: 8,
  };

  return (
    <S.Container>
      <Swiper {...settings}>
        {cards?.map((card) => (
          <SwiperSlide key={card.id}>
            <img src={card.imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default MatchCarousel;
