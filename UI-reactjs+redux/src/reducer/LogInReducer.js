import {LOGIN_INPUTS, LOGIN_SUCCESS } from "../actions/types";

const initialState = {
  loginInputs: [],
  message: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INPUTS:
      const name = action.payload.name;
      const value = action.payload.value;
      return {
        ...state,
        loginInputs: {
          ...state.loginInputs,
          [name]: value
        }
      };
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        message: action.payload
      });

    default:
      return state;
  }
};

export default reducer;
