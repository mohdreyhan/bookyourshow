import { SELECT_SEATS, RESERVED_SEATS } from "../actions/types";

const initialState = {
  selectedSeats: [],
  reservedmsg : "",
  updatedSeats : []

};

const reducer = (state = initialState, action) => {
  var updatedArray = [...state.selectedSeats];
  switch (action.type) {
    case SELECT_SEATS:
      if (!state.selectedSeats.includes(action.payload.value)) {
        updatedArray.push(action.payload.value);
      } else if (updatedArray.includes(action.payload.value)) {
        const variable = updatedArray.findIndex(
          item => item === action.payload.value
        );
        updatedArray.splice(variable, 1);
      }
      return { ...state, selectedSeats: updatedArray };
    case RESERVED_SEATS: 
    return Object.assign({}, state, {
      reservedmsg: action.payload.message,
      updatedSeats : action.payload.results
    });
    default:
      return state;
  }
};

export default reducer;
