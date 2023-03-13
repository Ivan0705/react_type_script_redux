import {
    fetchUserErrorActionCreators,
    fetchUsersActionCreators,
    fetchUserSuccessActionCreators
} from "../action_types/user-action-types";
import axios from "axios";
import {IUser} from "../../IModel/IUser";
import {Dispatch} from "redux";

export const fetchUsers: Function | any = () => {
    return async function (dispatch: Dispatch) {
        try {
            dispatch(fetchUsersActionCreators());

            const usersFromAPI = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

            setTimeout(() => {
                    dispatch(fetchUserSuccessActionCreators(usersFromAPI.data))
                },
                1000);
        } catch (e) {
            const error: string = 'Произошла ошибка при загрузке списка пользователей из базы данных...';

            dispatch(fetchUserErrorActionCreators(error))
        }
    }
};
