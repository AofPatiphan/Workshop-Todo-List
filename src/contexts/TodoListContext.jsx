import axios from 'axios';
import { createContext, useState, useEffect, useReducer } from 'react';
const TodoListContext = createContext();

//ACTION
//Add_TODO
//TOGGLE_STATUS
//DELETE_TODO
//UPDATE_TODO
//FETCH_TODO

// const initial = [];

const todoReducer = (state, action) => {
    // action { type: "ADD_TODO", value: { title: "Homework", id: "abcdef", completed: "false" } }

    // // IF ELSE
    // if (action.type === 'ADD_TODO') {
    //     // return nextState
    // } else if (action.type === 'TOGGLE_STATUS') {
    //     // return nextState
    // } else if (action.type === 'DELETE_TODO') {
    //     // return nextState
    // } else if (action.type === 'UPDATE_TODO') {
    //     // return nextState
    // } else if (action.type === 'FETCH_TODO') {
    //     // return nextState
    // } else {
    // }

    // SWITCHCASE
    switch (action.type) {
        case 'ADD_TODO':
            return action.payload.todos;
        case 'TOGGLE_STATUS':
        case 'DELETE_TODO':
            return action.payload.todos;
        case 'UPDATE_TODO':
            return action.payload.todos;
        case 'FETCH_TODO':
            return action.payload.todos;
        default:
            return state;
    }
};

function TodoListContextProvider(props) {
    const [todoList, dispatch] = useReducer(todoReducer, []);

    // dispatch({ type: 'FETCH_TODO', payLoad: [] })  //สั่งให้เกิดการเปลี่ยนแปลง state

    // const [todoList, setTodoList] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // const [status, setStatus] = useState('');

    // Get data
    useEffect(() => {
        const fetchTodo = async () => {
            const res = await axios.get('http://localhost:8080/todos');
            dispatch({
                type: 'FETCH_TODO',
                payload: { todos: res.data.todos },
            });
            // setTodoList(res.data.todos);
        };
        fetchTodo();
    }, []);

    const addTodo = async ({ title }) => {
        const res = await axios.post('http://localhost:8080/todos', {
            title: title,
            completed: false,
        });
        const nextTodo = [res.data.todo, ...todoList];
        dispatch({
            type: 'ADD_TODO',
            payload: { todos: nextTodo },
        });
        // setTodoList(nextTodo);
    };

    const updateTodo = async (id, value) => {
        const idx = todoList.findIndex((item) => item.id === id);
        const newTodoList = [...todoList];
        if (idx !== -1) {
            newTodoList[idx] = { ...newTodoList[idx], ...{ title: value } };
        }
        // console.log(newTodoList[idx]);
        const res = await axios.put(
            `http://localhost:8080/todos/${id}`,
            newTodoList[idx]
        );
        dispatch({
            type: 'ADD_TODO',
            payload: { todos: newTodoList },
        });
        // setTodoList(newTodoList);
    };

    const deleteTodo = async (id) => {
        const res = await axios.delete(`http://localhost:8080/todos/${id}`);
        const newTodo = todoList.filter((item) => item.id !== id);
        dispatch({
            type: 'ADD_TODO',
            payload: { todos: newTodo },
        });
        // setTodoList(newTodo);
    };

    const status = async (completed, id) => {
        const statusTodo = [...todoList];
        const idx = statusTodo.findIndex((item) => item.id === id);
        if (idx !== -1) {
            statusTodo[idx] = {
                ...statusTodo[idx],
                ...{ completed: !statusTodo[idx].completed },
            };
            console.log(statusTodo[idx]);
        }

        try {
            const res = await axios.put(
                `http://localhost:8080/todos/${id}`,
                statusTodo[idx]
            );
            dispatch({
                type: 'TOGGLE_STATUS',
                payload: { todos: statusTodo },
            });
            // setTodoList(statusTodo);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <TodoListContext.Provider
            value={{
                todoList,
                addTodo,
                // setTodoList,
                updateTodo,
                deleteTodo,
                title,
                setTitle,
                text,
                setText,
                // status,
                // setStatus,
                status,
            }}
        >
            {props.children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;
export { TodoListContext };
