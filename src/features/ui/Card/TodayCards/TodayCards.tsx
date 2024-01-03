import * as S from './TodayCards.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

import { useEffect, useState } from 'react';
import { Items } from '../../../../@types';
import { getStyleItems } from '../../../../api';
import { useNavigate } from 'react-router-dom';

interface MainCarousel {
  id: number;
  imgSrc: string;
}

const TodayCards = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState<Items[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const initialItems = await getStyleItems();
        setItems(initialItems);
      } catch (error) {}
    };
    fetchItems();
  }, []);

  const initialMainCarousel: MainCarousel[] = [
    { id: 1, imgSrc: '/img/today-card-01.png' },
    { id: 2, imgSrc: '/img/today-card-02.png' },
    { id: 3, imgSrc: '/img/today-card-03.png' },
    { id: 4, imgSrc: '/img/today-card-04.png' },
    { id: 5, imgSrc: '/img/today-card-05.png' },
  ];

  const handleCardClick = (id: string) => {
    navigate(`/style/${id}`);
  };

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
        {items?.map((card) => (
          <S.Card key={card.id} onClick={() => handleCardClick(card.id)}>
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
