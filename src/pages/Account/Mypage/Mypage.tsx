import { useSelector } from 'react-redux';
import * as S from './Mypage.styled';
import { RootState } from '../../../redux/config/configStore';
import { useStyleItems } from '../../../hooks';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import React from 'react';
import useGoToHome from '../../../hooks/useGoToHome';

const Mypage = () => {
  const loginUser = useSelector((state: RootState) => state.user);
  const { styleItems, isLoading } = useStyleItems();
  const myStyleItem = styleItems?.filter((item) => item.userId === loginUser.id);

  const goToHome = useGoToHome();

  if (isLoading) return;

  const logOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await signOut(auth);
    goToHome();
  };

  return (
    <>
      <S.Container>
        <S.ProfileWrap>
          {loginUser.profileImg ? <S.Avatar src={loginUser.profileImg} /> : <S.AvatarDefault />}

          <S.Profile>
            <S.Name>{loginUser.name}</S.Name>
            <S.FollowlWrap>
              <S.Follower>
                팔로워 <span>0</span>
              </S.Follower>
              <S.Following>
                팔로잉 <span>0</span>
              </S.Following>
            </S.FollowlWrap>
          </S.Profile>
        </S.ProfileWrap>
        <S.updateProfileBtn>프로필 설정</S.updateProfileBtn>

        <S.UserUtilWrap>
          <S.UserUtilItem>
            주문조회 <span>0</span>
          </S.UserUtilItem>
          <S.UserUtilItem>
            쿠폰 <span>0</span>
          </S.UserUtilItem>
          <S.UserUtilItem>
            마일리지 <span>0</span>
          </S.UserUtilItem>
        </S.UserUtilWrap>

        <div>
          {/* <div>
            <button>Tab1</button>
            <button>Tab2</button>
          </div> */}
          <S.postWrap>
            {myStyleItem?.map((item) => (
              <>
                <S.Card key={item.id}>
                  <S.CardFigure>
                    <S.IconMore src="/img/ico_img_more.svg" />
                    <S.CardImg src={item.imgThumb} alt={`Item ${item.id}`} />
                  </S.CardFigure>
                </S.Card>
              </>
            ))}
          </S.postWrap>
        </div>

        <div>
          <S.LogoutButton onClick={logOut}>로그아웃</S.LogoutButton>
        </div>
      </S.Container>
    </>
  );
};

export default Mypage;
