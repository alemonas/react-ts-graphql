import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { getPosts, IPost } from '../api/blogApi';

export interface IPostsState {
  hasErrors: boolean;
  loading: boolean;
  data: IPost[];
}

const initialState: IPostsState = {
  hasErrors: false,
  loading: false,
  data: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (state) => {
      state.loading = true;
    },
    loadPostsSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    loadPostsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure,
} = postsSlice.actions;

export const postsSelector = (state: any) => state.posts;

export const loadPostsAsync = (): AppThunk => async dispatch => {
  dispatch(loadPosts());

  try {
    const response = await getPosts();
    dispatch(loadPostsSuccess(response));
  } catch(error) {
    dispatch(loadPostsFailure())
  }
};

export default postsSlice.reducer;
