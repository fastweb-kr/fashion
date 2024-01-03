import * as S from './Login.styled';

const Login = () => {
  return (
    <>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.InputWrap>
          <S.InputText type="text" placeholder="아이디 (이메일)"></S.InputText>
          <S.InputText type="text" placeholder="비밀번호"></S.InputText>
          <S.ButtonLogin>로그인</S.ButtonLogin>
        </S.InputWrap>

        <S.SnsLoginWrap>
          <S.LoginBadge>
            3초만에 시작하기
            <S.BadgeArrow />
          </S.LoginBadge>
          <S.KakaoLogin>카카오로 시작하기</S.KakaoLogin>
          <S.NaverLogin>네이버로 시작하기</S.NaverLogin>
          <S.EmailLogin>이메일로 회원가입</S.EmailLogin>
        </S.SnsLoginWrap>
      </S.Container>

      <S.FindAccountWrap>
        <button>아이디 (이메일) 찾기</button>
        <button>비밀번호 찾기</button>
      </S.FindAccountWrap>
    </>
  );
};

export default Login;
