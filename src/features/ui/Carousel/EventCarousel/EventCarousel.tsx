import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './EventCarousel.stlyed';

interface Item {
  id: string;
  imgSrc: string;
}

interface EventCarouselProps {
  items: Item[];
}

const EventCarousel = ({ items }: EventCarouselProps) => {
  const settings = {
    spaceBetween: 8,
  };
  return (
    <S.Container>
      <Swiper {...settings} slidesPerView={'auto'}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default EventCarousel;
