import { createSlice } from '@reduxjs/toolkit';
import { SetUserAction, UserState } from '../../@types';

const initialState: UserState = {
  id: '',
  name: '',
  weight: '',
  height: '',
  profileImg: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: SetUserAction) => {
      return { ...state, ...action.payload };
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
