import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../app/store';
import * as postsApi from '../api/postApi'; 

interface EntriesState {
  entries: object[];
}

const initialState: EntriesState = {
  entries: [],
};

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    loadEntries: (state, entries: any) => {
      return { ...state, entries};
    },
  },
});

export const { loadEntries } = entriesSlice.actions;

export const loadEntriesAsync = (): AppThunk => dispatch => {
  return postsApi
    .getPosts()
    .then(posts => {
      dispatch(loadEntries(posts))
    })
    .catch(error => {
      throw error;
    });
};

export default entriesSlice.reducer;

// import * as types from './actionTypes';
// import * as postsApi from '../../api/postApi'; 

// export function loadPostsSuccess(posts: any) {
//   return { type: types.LOAD_POSTS_SUCCESS, posts};
// }

// export function loadPosts() {
//   return function(dispatch: any) {
//     return postsApi
//       .getPosts()
//       .then(posts => {
//         dispatch(loadPostsSuccess(posts))
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }