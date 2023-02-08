import {useTypedSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";
import * as React from "react";
import {useEffect} from "react";


export const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo);
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5, 6];


    useEffect(() => {
        fetchTodos(page, limit
        )
    }, [pages]);
    if (loading) {
        return <h1>Идёт загрузка!</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                todos.map((todo) =>
                    <div key={todo.id}>{todo.id} - {todo.title}</div>)
            }

            <div style={{display: "flex"}}>
                {pages.map((p, index) =>
                    <div key={index} onClick={() => {
                        setTodoPage(p)
                    }} style={{border: p === page ? '5px solid red' : '1px gray solid'}}>
                        {p}
                    </div>)}
            </div>
        </div>
    )
};