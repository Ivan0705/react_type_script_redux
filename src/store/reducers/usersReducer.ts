import {EnUsersActions, IUserState, UserActionTypes} from "../../types/UserTypes";

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: null
};

export const usersReducers = (state = initialState, action: UserActionTypes): IUserState => {
    switch (action.type) {
        case EnUsersActions.FETCH_USERS:
            return {
                ...state, isLoading: true, error: null,
            };
        case EnUsersActions.FETCH_SUCCESS_USERS:
            return {
                ...state, isLoading: false, error: null, users: action.users
            };
        case EnUsersActions.FETCH_ERROR_USERS:
            return {
                ...state, isLoading: false, error: action.error
            };
        default:
            return state;
    }
};
