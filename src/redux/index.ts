import { combineReducers, Reducer } from 'redux';

import postsReducer from './postsSlice';

const rootReducer: Reducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
