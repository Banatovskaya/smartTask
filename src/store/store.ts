import { configureStore} from '@reduxjs/toolkit';
import { postAPI } from '../services/postServise';
import usersListReducer from './users.slice';
import filtersReducer from './filter.slice'

export const store = configureStore({
  reducer: {
      [postAPI.reducerPath]: postAPI.reducer,
      usersListReducer,
      filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postAPI.middleware),
devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
