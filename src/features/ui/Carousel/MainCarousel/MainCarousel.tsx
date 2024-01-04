import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import * as S from './MainCarousel.styled';
import 'swiper/css';

interface MainCarouselType {
  id: number;
  imgSrc: string;
}

const MainCarousel = () => {
  const initialMainCarousel: MainCarouselType[] = [
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
    </>
  );
};

export default MainCarousel;
