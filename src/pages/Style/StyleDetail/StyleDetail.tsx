import * as S from './StyleDetail.styled';

const StyleDetail = () => {
  return (
    <>
      <S.Container>
        <S.UserSection>
          <S.UserWrap>
            <S.UserAvatarFigure>
              <S.Avatar src="/img/user_profile_default.svg" alt="user avatar" />
            </S.UserAvatarFigure>
            <S.UserProfileWrap>
              <S.UserName>아이디</S.UserName>
              <S.UserDesc>설명</S.UserDesc>
            </S.UserProfileWrap>
          </S.UserWrap>

          <div>
            <S.FollowButton>팔로잉</S.FollowButton>
          </div>
        </S.UserSection>

        <S.ImageSection></S.ImageSection>

        <S.IconSection>
          <S.LeftIconWrap>
            <S.IconButton>
              <img src="/img/ico_like.svg" alt="좋아요" />
            </S.IconButton>
            <S.IconButton>
              <img src="/img/ico_comment.svg" alt="댓글" />
            </S.IconButton>
            <S.IconButton>
              <img src="/img/ico_share.svg" alt="공유" />
            </S.IconButton>
          </S.LeftIconWrap>
          <S.RightIconWrap>
            <S.IconButton>
              <img src="/img/ico_bookmark.svg" alt="북마크" />
            </S.IconButton>
          </S.RightIconWrap>
        </S.IconSection>

        <S.ContentSection>
          <S.Time>2024.01.04</S.Time>
          <S.ContentWrap>
            <S.UserName>jun_h</S.UserName>
            <S.Content>코듀로이 골덴 바지에 후드에 레이어드로 포인트를 주었습니다 레이어드로 포인트를 주었습니다</S.Content>
          </S.ContentWrap>
        </S.ContentSection>

        <S.ProductSection>
          <S.ProductSectionTitle>착용제품</S.ProductSectionTitle>
          <div></div>
        </S.ProductSection>

        <S.TagSection>
          <S.TagSectionTitle>연관태그</S.TagSectionTitle>
          <S.TagList>
            <S.TagItem>스트릿</S.TagItem>
            <S.TagItem>여행</S.TagItem>
          </S.TagList>
        </S.TagSection>

        <S.CommentSection>
          <S.CommentSectionTitle>댓글 1개 모두보기</S.CommentSectionTitle>
          <S.CommentWrap>
            <S.CommentAvatarFigure>
              <S.Avatar src="/img/user_profile_default.svg" alt="user avatar" />
            </S.CommentAvatarFigure>
            <S.InputText type="text" placeholder="로그인 후 댓글을 작성해주세요" />
          </S.CommentWrap>
        </S.CommentSection>
      </S.Container>
    </>
  );
};

export default StyleDetail;
