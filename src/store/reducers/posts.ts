import { Action } from "../types";
import { commentList, postList } from '../initialState'
import {
  ADD_COMMENTS,
  SET_COMMENT_LIST,
  SET_POST_LIST
} from "../actions/actions";

const initialState = {
  commentList,
  postList
}

export const postsReducer = (state = initialState, {type, payload}: Action) => {
  switch (type) {
    case SET_POST_LIST:
      return {
        ...state,
        postList: payload
      };
    case SET_COMMENT_LIST:
      return {
        ...state,
        commentList: payload
      };
    case ADD_COMMENTS:
      return {
        ...state,
        commentList: [
          ...state.commentList,
          ...payload?.comments
        ]
      };
    default:
      return state;
  }
};
