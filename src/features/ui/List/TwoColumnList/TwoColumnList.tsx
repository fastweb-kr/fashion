import uuid from 'react-uuid';
import * as S from './TwoColumnList.styled';

const TwoColumnList = () => {
  const initPosts = [
    { id: uuid(), title: '크리스마스를 기다리며', description: '작지만 존재감 있는 아이템으로 미리 준비하는 크리스마스, 수백가지 취향이 모이는 픽스타일에서 나만의 스타일을 만나보세요.', imgSrc: '/img/ootd-img-01.png' },
    { id: uuid(), title: '언커먼 아이웨어', description: '알아두면 “발 빠르고 센스 있다”는 말을 듣게 될, 두고 보면 고개를 끄덕이게 될 브랜드를 소개합니다.', imgSrc: '/img/ootd-img-02.png' },
  ];

  return (
    <>
      <S.Container>
        {initPosts.map((post) => (
          <S.ListItem key={post.id}>
            <S.Figure>
              <S.Img src={post.imgSrc} />
            </S.Figure>
            <S.ContentWrap>
              <S.Title>{post.title}</S.Title>
              <S.Description>{post.description}</S.Description>
            </S.ContentWrap>
          </S.ListItem>
        ))}
      </S.Container>
    </>
  );
};

export default TwoColumnList;
