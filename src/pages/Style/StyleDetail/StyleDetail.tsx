import { useParams } from 'react-router-dom';
import * as S from './StyleDetail.styled';

const StyleDetail = () => {
  const { id } = useParams();

  return (
    <>
      <S.Container>
        <S.UserSection>
          <S.UserWrap>
            <S.UserAvatarFigure>
              <S.UserAvatar src="/img/user_profile_default.svg" alt="" />
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

        <section>image</section>

        <section>
          <div>
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
          <div>
            <button>북마크</button>
          </div>
        </section>

        <section>
          <p>time</p>
          <div>
            <span>name</span>
            <p>content</p>
          </div>
        </section>

        <section>
          <h3>착용제품</h3>
          <div></div>
        </section>

        <section>
          <h4>연관태그</h4>
          <ul>
            <li>스트릿</li>
            <li>여행</li>
          </ul>
        </section>

        <section>
          <p>댓글 1개 모두보기</p>
          <div>
            <figure>이미지</figure>
            <input type="text" />
          </div>
        </section>
      </S.Container>
    </>
  );
};

export default StyleDetail;
