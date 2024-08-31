import { configureStore} from '@reduxjs/toolkit';
import { postAPI } from '../services/postServise';

export const store = configureStore({
  reducer: {
      [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postAPI.middleware),
devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
