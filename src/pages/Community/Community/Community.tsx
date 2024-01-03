import uuid from 'react-uuid';
import { EventCarousel, ItemCarousel, TwoColumnList, TwoColumnSquare } from '../../../features';
import * as S from './Community.styled';

const Community = () => {
  const suggestItems = [
    {
      id: uuid(),
      imgSrc: '/img/suggest-item-01.png',
      title: '[이아] Wool Coat',
    },
    {
      id: uuid(),
      imgSrc: '/img/suggest-item-02.png',
      title: '램스울 라운드 니트',
    },
    {
      id: uuid(),
      imgSrc: '/img/suggest-item-03.png',
      title: '파사드 패턴 코트',
    },
    {
      id: uuid(),
      imgSrc: '/img/suggest-item-01.png',
      title: '[이아] Wool Coat',
    },
    {
      id: uuid(),
      imgSrc: '/img/suggest-item-02.png',
      title: '램스울 라운드 니트',
    },
    {
      id: uuid(),
      imgSrc: '/img/suggest-item-03.png',
      title: '파사드 패턴 코트',
    },
  ];

  const eventItems = [
    { id: uuid(), imgSrc: '/img/event-item-01.png' },
    { id: uuid(), imgSrc: '/img/event-item-02.png' },
    { id: uuid(), imgSrc: '/img/event-item-01.png' },
    { id: uuid(), imgSrc: '/img/event-item-02.png' },
  ];

  return (
    <>
      <S.Section id="ootd">
        <S.TitleWrap>
          <S.Title>
            오직 픽스타일에서만
            <br />
            OOTD
          </S.Title>
          <S.QuickLink to="">전체보기</S.QuickLink>
        </S.TitleWrap>
        <TwoColumnList />
        <S.BtnSubScribe>구독하기</S.BtnSubScribe>
      </S.Section>

      <S.Section id="suggestItem">
        <S.TitleWrap>
          <S.Title>
            당신이 알아야 할
            <br />
            ITEM 추천
          </S.Title>
          <S.QuickLink to="">전체보기</S.QuickLink>
        </S.TitleWrap>
        <ItemCarousel items={suggestItems} />
      </S.Section>

      <S.Section id="qa">
        <S.TitleWrap>
          <S.Title>
            궁금한게 있다면
            <br />
            Q&A
          </S.Title>
          <S.QuickLink to="">전체보기</S.QuickLink>
        </S.TitleWrap>
        <TwoColumnSquare />
        <S.BtnSubScribe>글쓰기</S.BtnSubScribe>
      </S.Section>

      <S.Section id="event">
        <S.TitleWrap>
          <S.Title>
            혜택과 경험이 가득한
            <br />
            공지/이벤트
          </S.Title>
          <S.QuickLink to="">전체보기</S.QuickLink>
        </S.TitleWrap>
        <EventCarousel items={eventItems} />
      </S.Section>

      <S.BannerConatiner>
        <S.BannerTitle>크리에이터 신청하기</S.BannerTitle>
        <S.BannerDesc>스타일을 고유하고 수익을 창출하세요</S.BannerDesc>
      </S.BannerConatiner>
    </>
  );
};

export default Community;
