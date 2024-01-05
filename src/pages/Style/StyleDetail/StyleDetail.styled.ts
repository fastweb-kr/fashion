import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4px;
`;

export const Section = styled.section`
  padding: 0 var(--global-padding);
  margin-bottom: 32px;
`;

export const Figure = styled.figure`
  width: 48px;
  height: 48px;
  background-color: var(--color-gray-01);
  border-radius: 30px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserAvatarFigure = styled(Figure)``;

export const UserProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
`;

export const UserDesc = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: var(--color-gray-02);
`;

export const FollowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 36px;
  margin: 0px;
  background: none var(--color-bk);
  color: var(--color-wh);
  font-size: 14px;
  line-height: 18px;
  padding: 0px 16px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
`;

export const ImageSection = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--color-gray-01);

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-pagination {
    position: absolute;
    z-index: 99;
    right: 16px;
    bottom: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-wh);
    border-radius: 30px;
    width: 50px;
    height: 20px;
    font-size: 12px;
    font-weight: 900;
    color: #6c6c6c;
    gap: 2px;
  }

  & .swiper-slide {
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const IconSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px var(--global-padding);
  margin-bottom: 0;
`;

export const LeftIconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RightIconWrap = styled.div``;

export const IconButton = styled.div`
  display: inline-block;

  & img {
    width: 20px;
    height: 20px;
  }
`;

export const ContentSection = styled(Section)``;

export const SectionTitle = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: rgb(187, 187, 187);
  margin-bottom: 4px;
`;

export const Time = styled(SectionTitle)``;

export const ContentWrap = styled.div`
  width: 100%;
  vertical-align: baseline;

  & ${UserName} {
    display: inline;
    margin-right: 4px;
  }
`;

export const Content = styled.p`
  display: inline;
  font-size: 14px;
  line-height: 1.4;
`;

export const ProductSection = styled(Section)``;

export const ProductSectionTitle = styled(SectionTitle).attrs({ as: 'h3' })``;

export const TagSection = styled(Section)``;

export const TagSectionTitle = styled(SectionTitle).attrs({ as: 'h4' })`
  margin-bottom: 8px;
`;

export const TagList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TagItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  padding: 8px 14px 7px;
  border-radius: 16.5px;
  border: 1px solid rgb(228, 228, 228);
  font-size: 13px;
  font-weight: 500;
  background-color: var(--color-wh);
  color: var(--coltor-bk);
`;

export const CommentSection = styled(Section)``;

export const CommentSectionTitle = styled(SectionTitle).attrs({ as: 'button' })`
  margin-bottom: 8px;
`;

export const CommentWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const CommentAvatarFigure = styled(Figure)`
  width: 32px;
  height: 32px;
`;

export const InputText = styled.input`
  width: 100%;
  border: 1px solid var(--color-gray-03);
  padding: 0 8px;
  border-radius: 4px;

  &::placeholder {
    color: var(--color-gray-03);
  }
`;
