import Tasks from "./Tasks";
//import loggedReducer from "./islogged";
import { combineReducers } from "redux";

const rootReducers = combineReducers({ tasks: Tasks });

export default rootReducers;
