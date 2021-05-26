import { combineReducers } from 'redux';
import { postsReducer } from "./posts";
import { usersReducer } from "./users";


export const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});
