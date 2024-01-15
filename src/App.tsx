import { useEffect } from 'react';
import { Router } from './shared';
import { GlobalStyles } from './styles';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/modules';
import { getUsers } from './api';

function App() {
  const dispatch = useDispatch();

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
      if (user) fetchLoginUser(user.email);
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
