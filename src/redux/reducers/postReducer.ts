import * as types from '../actions/actionTypes';

const initialState = {
  posts: []
};

export default function postReducer(state = initialState.posts, action: any) {
  console.log('action', action);
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
}
