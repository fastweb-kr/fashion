import { ChangeEvent, useState } from 'react';
import * as S from './Login.styled';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = () => {
    navigate('/signup');
  };

  return (
    <>
      <S.Container>
        <S.Title>로그인</S.Title>
        <S.Form>
          <S.InputText type="text" name="email" value={email} placeholder="아이디 (이메일)" onChange={onChange} required></S.InputText>
          <S.InputText type="text" name="password" value={password} placeholder="비밀번호" onChange={onChange} required></S.InputText>
          <S.ButtonLogin onClick={signIn}>로그인</S.ButtonLogin>
        </S.Form>

        <S.SnsLoginWrap>
          <S.LoginBadge>
            3초만에 시작하기
            <S.BadgeArrow />
          </S.LoginBadge>
          <S.KakaoLogin>카카오로 시작하기</S.KakaoLogin>
          <S.NaverLogin>네이버로 시작하기</S.NaverLogin>
          <S.EmailLogin onClick={signUp}>이메일로 회원가입</S.EmailLogin>
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
