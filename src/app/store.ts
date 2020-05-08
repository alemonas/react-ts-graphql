import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../redux/reducers/postReducer';
import entriesReducer from '../redux/entriesSlice';
import logger from 'redux-logger';

const reduxMiddlewares = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    entries: entriesReducer,
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
