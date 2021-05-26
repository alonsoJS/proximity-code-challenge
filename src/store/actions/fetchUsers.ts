import { Action } from "../types";
import { SET_USER_LIST } from "./actions";

export const fetchUserList = async (): Promise<Action> => {
  const api = 'https://jsonplaceholder.typicode.com/users';
  const rawResponse = await fetch(api);
  const response = await rawResponse.json()

  return {
    type: SET_USER_LIST,
    payload: response
  };
};
