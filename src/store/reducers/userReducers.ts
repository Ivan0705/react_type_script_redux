interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;

export enum UserActionUsers {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersAction {
    type: UserActionUsers.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionUsers.FETCH_USERS_SUCCESS;
    payload: any[]
}

interface FetchUsersErrorAction {
    type: UserActionUsers.FETCH_USERS_ERROR;
    payload: string
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action: UserAction): UserState | undefined => {
    switch (action.type) {
        case UserActionUsers.FETCH_USERS:
            return {loading: true, error: null, users: []};
        case UserActionUsers.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload};
        case UserActionUsers.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []};
        default:
            return state;
    }
};
