import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import logger from 'redux-logger';

const reduxMiddlewares = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: reduxMiddlewares, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
