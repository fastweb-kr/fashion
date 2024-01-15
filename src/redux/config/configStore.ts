import { configureStore } from '@reduxjs/toolkit';
import { urlSlice, userSlice } from '../modules';

const store = configureStore({
  reducer: {
    url: urlSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
