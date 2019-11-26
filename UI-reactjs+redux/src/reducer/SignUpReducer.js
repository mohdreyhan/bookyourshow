import {SIGNIN_INPUTS, ADD_USER } from "../actions/types";

const initialState = {
  signinInputs: [],
  message: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_INPUTS:
      const name = action.payload.name;
      const value = action.payload.value;
      return {
        ...state,
        signinInputs: {
          ...state.signinInputs,
          [name]: value
        }
      };
    case ADD_USER:
      return Object.assign({}, state, {
        message: action.payload
      });

    default:
      return state;
  }
};

export default reducer;
