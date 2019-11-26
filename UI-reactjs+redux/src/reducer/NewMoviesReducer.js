import {ADDMOVIES_INPUTS, ADD_MOVIES, FETCH_MOVIES } from "../actions/types";

const initialState = {
  addmovieInputs: [],
  message: "",
  fetchedMovies : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDMOVIES_INPUTS:
      const name = action.payload.name;
      const value = action.payload.value;
      return {
        ...state,
        addmovieInputs: {
          ...state.addmovieInputs,
          [name]: value
        }
      };
    case ADD_MOVIES:
      return Object.assign({}, state, {
        message: action.payload.message
      });
      case FETCH_MOVIES:
      return Object.assign({}, state, {
        fetchedMovies: action.payload
      });

     
    default:
      return state;
  }
};

export default reducer;
