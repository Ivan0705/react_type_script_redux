import {Dispatch} from "redux";
import {UserAction, UserActionUsers} from "../reducers/userReducers";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionUsers.FETCH_USERS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                dispatch({type: UserActionUsers.FETCH_USERS_SUCCESS, payload: response.data});
            }, 1200)
        } catch (e) {
            dispatch({
                type: UserActionUsers.FETCH_USERS_ERROR,
                payload: "Ошибка при загрузке пользователей"
            })
        }
    }
};
