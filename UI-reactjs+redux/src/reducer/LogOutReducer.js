import { LOGOUT_SUCCESS } from "../actions/types";

const initialState = {
  message: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        message: action.payload
      });

    default:
      return state;
  }
};

export default reducer;
