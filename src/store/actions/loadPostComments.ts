import { Action } from "../types";
import { ADD_COMMENTS } from "./actions";

export const loadPostComments = async (postId: number): Promise<Action> => {
  const api = `${process.env.REACT_APP_BASE_ENDPOINT_URL}/post/${postId}/comments`;
  const rawResponse = await fetch(api);
  const payload = {
    comments: await rawResponse.json()
  };

  return {
    type: ADD_COMMENTS,
    payload
  };
};
