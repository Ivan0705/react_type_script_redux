import {EnUsersActions} from "../../types/UserTypes";
import {IUser} from "../../IModel/IUser";

export const fetchUsersActionCreators = () => ({
    type: EnUsersActions.FETCH_USERS
});

export const fetchUserSuccessActionCreators = (users: IUser[]) => ({
    type: EnUsersActions.FETCH_SUCCESS_USERS,
    users: users
});

export const fetchUserErrorActionCreators = (error: string) => ({
    type: EnUsersActions.FETCH_ERROR_USERS,
    error: error
});
