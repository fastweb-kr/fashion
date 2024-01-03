import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './ItemCarousel.styled';

interface Item {
  id: string;
  imgSrc: string;
  title: string;
}

interface ItemCarouselProps {
  items: Item[];
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
