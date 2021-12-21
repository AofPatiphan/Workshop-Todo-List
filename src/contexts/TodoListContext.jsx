import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
const TodoListContext = createContext();

function TodoListContextProvider(props) {
    const [todoList, setTodoList] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');

    // Get data
    useEffect(() => {
        const fetchTodo = async () => {
            const res = await axios.get('http://localhost:8080/todos');
            setTodoList(res.data.todos);
        };
        fetchTodo();
    }, []);

    const addTodo = async ({ title }) => {
        const res = await axios.post('http://localhost:8080/todos', {
            title: title,
            completed: false,
        });
        const nextTodo = [res.data.todo, ...todoList];
        console.log(res.data);
        setTodoList(nextTodo);
    };

    const updateTodo = async (id, value) => {
        const idx = todoList.findIndex((item) => item.id === id);
        const newTodoList = [...todoList];
        if (idx !== -1) {
            newTodoList[idx] = { ...newTodoList[idx], ...{ title: value } };
        }
        console.log(newTodoList[idx]);
        const res = await axios.put(
            `http://localhost:8080/todos/${id}`,
            newTodoList[idx]
        );
        setTodoList(newTodoList);
    };

    const deleteTodo = async (id) => {
        const res = await axios.delete(`http://localhost:8080/todos/${id}`);
        const newTodo = todoList.filter((item) => item.id !== id);
        setTodoList(newTodo);
    };

    return (
        <TodoListContext.Provider
            value={{
                todoList,
                addTodo,
                setTodoList,
                updateTodo,
                deleteTodo,
                title,
                setTitle,
                text,
                setText,
                status,
                setStatus,
            }}
        >
            {props.children}
        </TodoListContext.Provider>
    );
}

export default TodoListContextProvider;
export { TodoListContext };
