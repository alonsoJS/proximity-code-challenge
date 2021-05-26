import { Action } from "../types";
import { userList } from '../initialState'
import { SET_USER_LIST } from "../actions/actions";

const initialState = {
  userList
}

export const usersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER_LIST:
      return {
        ...state,
        userList: action.payload
      };
    default:
      return state;
  }
};
