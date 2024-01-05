import { configureStore } from '@reduxjs/toolkit';
import { writeSlice, urlSlice } from '../modules';

const store = configureStore({
  reducer: {
    url: urlSlice,
    writeData: writeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
