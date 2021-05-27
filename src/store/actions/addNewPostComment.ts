import { Action, Comment } from "../types";
import { ADD_COMMENTS } from "./actions";

export const addNewPostComment = (commentInfo: Comment): Action => {
  return {
    type: ADD_COMMENTS,
    payload: {
      comments: [commentInfo]
    }
  };
};
