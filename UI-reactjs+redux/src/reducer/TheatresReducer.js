import { FETCH_THEATRES } from "../actions/types";

const initialState = {
  theatreData : []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THEATRES : 
    return Object.assign({}, state, {
        theatreData: action.payload
      });

    default:
      return state;
  }
};

export default reducer;
