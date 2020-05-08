import * as types from './actionTypes';
import * as postsApi from '../../api/postApi'; 

export function loadPostsSuccess(posts: any) {
  return { type: types.LOAD_POSTS_SUCCESS, posts};
}

export function loadPosts() {
  return function(dispatch: any) {
    return postsApi
      .getPosts()
      .then(posts => {
        dispatch(loadPostsSuccess(posts))
      })
      .catch(error => {
        throw error;
      });
  };
}