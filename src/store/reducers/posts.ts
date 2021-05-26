import { Action } from "../types";
import { commentList, postList } from '../initialState'
import {SET_COMMENT_LIST, SET_POST_LIST} from "../actions/actions";

const initialState = {
  commentList,
  postList
}

export const postsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_POST_LIST:
      return {
        ...state,
        postList: action.payload
      };
    case SET_COMMENT_LIST:
      return {
        ...state,
        commentList: action.payload
      }
    default:
      return state;
  }
};
