import { createSlice } from '@reduxjs/toolkit';
import { SetUrlAction, UrlState } from '../../../@types';

const initialState: UrlState = {
  prevUrl: '',
  currentUrl: '',
};

const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    setUrl: (state, action: SetUrlAction) => {
      state.prevUrl = action.payload.prevUrl;
      state.currentUrl = action.payload.currentUrl;
    },

    setCurrentUrl: (state, action: SetUrlAction) => {
      const excludedKeywords = ['login', 'write', 'signup'];

      if (excludedKeywords.some((keyword) => action.payload.currentUrl?.includes(keyword))) {
        return;
      }

      state.currentUrl = action.payload.currentUrl;
    },

    setPrevUrl: (state, action: SetUrlAction) => {
      state.prevUrl = action.payload.prevUrl;
    },
  },
});

export default urlSlice.reducer;
export const { setUrl, setPrevUrl, setCurrentUrl } = urlSlice.actions;
