import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StyleItem } from '../../@types';

const initialState: StyleItem = {
  id: '',
  userId: '',
  imgSrc: [],
  imgThumb: '',
  content: '',
  postDate: '',
  tag: [],
  comments: [],
};

const writeSlice = createSlice({
  name: 'writeSlice',
  initialState,
  reducers: {
    setWriteData: (state, action: PayloadAction<StyleItem>) => {
      state = action.payload;
      return state;
    },
  },
});

export default writeSlice.reducer;
export const { setWriteData } = writeSlice.actions;
