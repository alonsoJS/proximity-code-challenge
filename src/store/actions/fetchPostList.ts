import { Action } from "../types";
import { SET_POST_LIST } from "./actions";
import { randomizeObjectList } from "../../utils/randomizeObjectList";

export const fetchPostList = async (): Promise<Action> => {
  const api = `${process.env.REACT_APP_BASE_ENDPOINT_URL}/posts`;
  const rawResponse = await fetch(api);
  const response = await rawResponse.json()

  return {
    type: SET_POST_LIST,
    payload: randomizeObjectList(response)
  };
};
