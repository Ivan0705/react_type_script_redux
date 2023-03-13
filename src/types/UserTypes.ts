import {IUser} from "../IModel/IUser";

export enum EnUsersActions {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_SUCCESS_USERS = 'FETCH_SUCCESS_USERS',
    FETCH_ERROR_USERS = 'FETCH_ERROR_USERS'
}

export interface IUserState {
    users: Array<IUser>,
    isLoading: boolean,
    error: string | null
}

export interface IFetchUsers {
    type: EnUsersActions.FETCH_USERS
}

export interface IFetchSuccessUsers {
    type: EnUsersActions.FETCH_SUCCESS_USERS,
    users: IUser[]
}

export interface IFetchErrorUsers {
    type: EnUsersActions.FETCH_ERROR_USERS,
    error: string | null
}

export type UserActionTypes = IFetchUsers | IFetchSuccessUsers | IFetchErrorUsers;
