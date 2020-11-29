
import { TYPE_SAVE_USER_DETAILS } from "../action/User";

const initialStateUser = {
    userData: []
};

export function userDataOperations(state = initialStateUser, action) {
  switch (action.type) {
    
    case TYPE_SAVE_USER_DETAILS: {
      return Object.assign({}, state, {
        userData: action.value
      });
    }
    default:
      return state;
  }
}
