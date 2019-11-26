import { combineReducers } from 'redux'
import LogInReducer from './LogInReducer'
import SignUpReducer from './SignUpReducer'
import LogOutReducer from "./LogOutReducer";
import TheatresReducer from "./TheatresReducer"
import SeatsReducer from "./SeatsReducer";
import NewMoviesReducer from "./NewMoviesReducer";

export default combineReducers({
  SignUpReducer : SignUpReducer,
  LogInReducer : LogInReducer,
  LogOutReducer :LogOutReducer,
  TheatresReducer : TheatresReducer,
  SeatsReducer : SeatsReducer,
  NewMoviesReducer : NewMoviesReducer
})