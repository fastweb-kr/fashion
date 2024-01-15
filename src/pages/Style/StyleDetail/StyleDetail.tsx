import { useParams } from 'react-router-dom';
import * as S from './StyleDetail.styled';
import { useStyleItems } from '../../../hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/config/configStore';
import { userQueries } from '../../../api/User/UserQueries';
import { useEffect } from 'react';

const StyleDetail = () => {
  const { id } = useParams();

  const { styleItems, isLoading } = useStyleItems();
  const selectedStyleItem = styleItems?.find((item) => item.id === id);
  const { users } = userQueries();
  const selectedUser = users?.find((user) => user.id === selectedStyleItem?.userId);

  if (isLoading) return;

  return (
    <>
      <S.Container>
        <S.UserSection>
          <S.UserWrap>
            <S.UserAvatarFigure>
              <S.Avatar src="/img/user_profile_default.svg" alt="user avatar" />
            </S.UserAvatarFigure>
            <S.UserProfileWrap>
              <S.UserName>{selectedUser?.name}</S.UserName>
              <S.UserDesc>
                <S.userDescItem>{selectedUser?.height}cm</S.userDescItem>
                <span>ㆍ</span>
                <S.userDescItem>{selectedUser?.weight}kg</S.userDescItem>
              </S.UserDesc>
            </S.UserProfileWrap>
          </S.UserWrap>

          <div>
            <S.FollowButton>팔로잉</S.FollowButton>
          </div>
        </S.UserSection>

        <S.ImageSection>
          <Swiper
            slidesPerView={'auto'}
            pagination={{
              type: 'fraction',
            }}
            modules={[Pagination]}
          >
            {selectedStyleItem?.imgSrc.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt={selectedStyleItem.content + index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ImageSection>

        <S.IconSection>
          <S.LeftIconWrap>
            <S.IconButton>
              <img src="/img/ico_like.svg" alt="좋아요" />
            </S.IconButton>
            <S.IconButton>
              <img src="/img/ico_comment.svg" alt="댓글" />
            </S.IconButton>
          </S.LeftIconWrap>
          <S.RightIconWrap>
            <S.IconButton>
              <img src="/img/ico_bookmark.svg" alt="북마크" />
            </S.IconButton>
          </S.RightIconWrap>
        </S.IconSection>

        <S.ContentSection>
          <S.Time>{selectedStyleItem?.postDate}</S.Time>
          <S.ContentWrap>
            <S.UserName>{selectedUser?.name}</S.UserName>
            <S.Content>{selectedStyleItem?.content}</S.Content>
          </S.ContentWrap>
        </S.ContentSection>

        <S.ProductSection>
          <S.ProductSectionTitle>착용제품</S.ProductSectionTitle>
          <div></div>
        </S.ProductSection>

        <S.TagSection>
          <S.TagSectionTitle>연관태그</S.TagSectionTitle>
          <S.TagList>
            {selectedStyleItem?.tag.map((tagItem, index) => (
              <S.TagItem key={index}>{tagItem}</S.TagItem>
            ))}
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
