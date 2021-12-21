import { useContext, useState } from 'react';
import EditTodo from './EditTodo';
import { TodoListContext } from '../contexts/TodoListContext';
import axios from 'axios';

function TodoItem({ todo: { title, completed, id } }) {
    const { setTodoList, todoList, deleteTodo } = useContext(TodoListContext);
    const [visible, setVisible] = useState(false);

    const handleClickToggle = async () => {
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
            setTodoList(statusTodo);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
                completed ? 'success' : 'warning'
            }`}
        >
            {visible ? (
                <EditTodo
                    todo={{ title, completed, id }}
                    setVisible={setVisible}
                />
            ) : (
                <>
                    <span onClick={() => setVisible(true)}>{title}</span>
                    <div className="btn-group">
                        <button
                            className="btn btn-info rounded-0"
                            onClick={handleClickToggle}
                        >
                            <i
                                className={`bi bi-toggle-${
                                    completed ? 'on' : 'off'
                                }`}
                            />
                        </button>
                        <button
                            className="btn btn-danger rounded-0"
                            onClick={() => deleteTodo(id)}
                        >
                            <i className="bi bi-trash" />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoItem;
