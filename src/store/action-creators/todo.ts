import {Dispatch} from "redux";
import {TodoActions, TodoActionsTypes} from "../../types/todo";
import axios from "axios";


export const fetchTodos = (page = 1, limit: number = 10) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({type: TodoActionsTypes.FETCH_TODOS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            });
            setTimeout(() => {
                dispatch({type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: TodoActionsTypes.FETCH_TODOS_ERROR,
                payload: "Упс..."
            })
        }
    }
};

export function setTodoPage(page: number): TodoActions {
    return {type: TodoActionsTypes.SET_TODOS_PAGE, payload: page}


}
