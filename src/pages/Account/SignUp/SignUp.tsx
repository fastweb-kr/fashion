import { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './SignUp.styled';
import useGoToHome from '../../../hooks/useGoToHome';
import { UserType } from '../../../@types';
import { addUser } from '../../../api';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const SignUp = () => {
  const initialUser: UserType = {
    id: '',
    name: '',
    profileImg: '',
    height: '',
    weight: '',
  };

  const [newUser, setNewUser] = useState(initialUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const goToHome = useGoToHome();

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
    if (name == 'height') {
      setHeight(value);
    }
    if (name == 'weight') {
      setWeight(value);
    }
  };

  const emailToUserName = (email: string | null) => (email ? email.split('@')[0] : null);

  const SignUp = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const updatedNewUser = { ...newUser, id: email, name: emailToUserName(email), height, weight };
      await createUserWithEmailAndPassword(auth, email, password);

      await addUser(updatedNewUser);
      goToHome();
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          alert('이메일을 정확하게 입력해주세요');
          break;
        case 'auth/weak-password':
          alert('비밀번호는 6자리 이상 입력해주세요');
          break;
      }
    }
  };

  return (
    <>
      <S.Container>
        <S.Title>회원가입</S.Title>

        <S.Form onSubmit={SignUp}>
          <S.InputText type="text" name="email" value={email} placeholder="아이디 (이메일)" onChange={onChange} required></S.InputText>
          <S.InputText type="text" name="password" value={password} placeholder="비밀번호" onChange={onChange} required></S.InputText>
          <S.Label>추가정보 (선택)</S.Label>
          <S.InputText type="text" name="height" value={height} placeholder="키 (cm)" onChange={onChange}></S.InputText>
          <S.InputText type="text" name="weight" value={weight} placeholder="몸무게 (kg)" onChange={onChange}></S.InputText>

          <S.ButtonLogin>회원가입</S.ButtonLogin>
        </S.Form>

        {/* <S.SnsLoginWrap>
          <S.LoginBadge>
            3초만에 시작하기
            <S.BadgeArrow />
          </S.LoginBadge>
          <S.KakaoLogin>카카오로 시작하기</S.KakaoLogin>
          <S.NaverLogin>네이버로 시작하기</S.NaverLogin>
        </S.SnsLoginWrap> */}
      </S.Container>
    </>
  );
};

export default SignUp;
