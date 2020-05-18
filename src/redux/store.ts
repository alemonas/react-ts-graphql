import { Action, configureStore, getDefaultMiddleware, ThunkAction, } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from '.';

const reduxMiddlewares = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: rootReducer,
  middleware: reduxMiddlewares, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
