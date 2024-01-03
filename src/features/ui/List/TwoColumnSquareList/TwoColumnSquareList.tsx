import uuid from 'react-uuid';
import * as S from './TwoColumnSquareList.styled';
import * as E from '../TwoColumnList/TwoColumnList.styled';

const TwoColumnSquareList = () => {
  const initPosts = [
    { id: uuid(), title: '장갑 정보 아시는분 있나요?', description: '크리에이터 분이 제품 정보를 남겨 놓지 않아서 혹시 아시는분 있는지 글 남겨봐요', imgSrc: '/img/qa-img-01.png' },
    { id: uuid(), title: '브랜드 정보 아시나요?', description: '안경이랑 스웨터가 마음에 드는데 브랜드가 어딘지를 모르겠네요! 혹시 아시는 분 댓글 부탁드려요', imgSrc: '/img/qa-img-02.png' },
  ];
  return (
    <>
      <E.Container>
        {initPosts.map((post) => (
          <E.ListItem key={post.id}>
            <S.Figure>
              <E.Img src={post.imgSrc} />
            </S.Figure>
            <E.ContentWrap>
              <E.Title>{post.title}</E.Title>
              <E.Description>{post.description}</E.Description>
            </E.ContentWrap>
          </E.ListItem>
        ))}
      </E.Container>
    </>
  );
};

export default TwoColumnSquareList;
