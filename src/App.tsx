import { useEffect } from 'react';
import { Router } from './shared';
import { GlobalStyles } from './styles';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/modules';
import { getUsers } from './api';
import { UserType } from './@types';

function App() {
  const dispatch = useDispatch();

  const initialUser: UserType = {
    id: '',
    name: '',
    height: '',
    weight: '',
    profileImg: '',
  };

  const fetchLoginUser = async (id: string | null) => {
    try {
      const userData = await getUsers();
      const foundUser = userData.find((user) => user.id === id);

      if (foundUser) {
        dispatch(setUser(foundUser));
      } else {
        console.error('계정을 찾지 못했습니다.');
      }
    } catch (error) {
      console.error('fetchUser', error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchLoginUser(user.email);
      } else {
        dispatch(setUser(initialUser));
        console.log('logout');
      }
    });
  }, []);

  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;
