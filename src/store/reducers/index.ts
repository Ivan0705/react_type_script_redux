import {combineReducers} from "redux";
import {usersReducers} from "./usersReducer";

export const rootReducers = combineReducers({
    users: usersReducers
});
