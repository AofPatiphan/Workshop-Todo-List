import { useContext, useState } from 'react';
import EditTodo from './EditTodo';
import { TodoListContext } from '../contexts/TodoListContext';
import axios from 'axios';

function TodoItem({ todo: { title, completed, id } }) {
    const { deleteTodo, status } = useContext(TodoListContext);
    const [visible, setVisible] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleClickToggle = async () => {
        status(completed, id);
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
