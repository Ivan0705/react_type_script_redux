import {bindActionCreators, Dispatch} from "redux";
import *as UsersCreators from "../store/action-creators/fetchUsers";

export const userDispatchHook = (dispatch: Dispatch) => {
    return bindActionCreators(UsersCreators, dispatch)
};
