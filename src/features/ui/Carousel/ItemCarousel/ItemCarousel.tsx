import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './ItemCarousel.styled';

interface Items {
  id: string;
  title: string;
  imgSrc: string;
}

interface ItemCarouselProps {
  items: Items[];
}

const ItemCarousel = ({ items }: ItemCarouselProps) => {
  const settings = {
    spaceBetween: 8,
  };

  return (
    <S.Container>
      <Swiper {...settings} slidesPerView={'auto'}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.imgSrc} />
            <S.Title>{item.title}</S.Title>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default ItemCarousel;
