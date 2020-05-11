import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    loadPostsSuccess: (state, { payload }: PayloadAction<IPost[]>) => {
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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(loadPostsAsync())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
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
