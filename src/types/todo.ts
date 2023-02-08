export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionsTypes {
    FETCH_TODOS = "FETCH_TODODS",
    FETCH_TODOS_SUCCESS = "FETCH_TODODS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODODS_ERROR",
    SET_TODOS_PAGE = "SET_TODOS_PAGE"
}

export interface FetchAction {
    type: TodoActionsTypes.FETCH_TODOS
}

export interface FetchSuccessAction {
    type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}

export interface FetchErrorAction {
    type: TodoActionsTypes.FETCH_TODOS_ERROR,
    payload: string | null
}

export interface SetTodoPage {
    type: TodoActionsTypes.SET_TODOS_PAGE,
    payload: number
}

export type TodoActions =
    FetchAction
    | FetchSuccessAction
    | FetchErrorAction
    | SetTodoPage;
