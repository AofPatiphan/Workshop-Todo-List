import { useContext, useState } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';

function EditTodo({ todo: { title, completed, id }, setVisible }) {
    const { updateTodo } = useContext(TodoListContext);
    const [editText, setEditText] = useState(title);

    const handleChange = (e) => {
        setEditText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editText) {
            updateTodo(id, editText);
            setVisible(false);
        }
    };

    return (
        <form className="flex-grow-1" onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className={`form-control rounded-0 ${
                        editText ? '' : 'is-invalid'
                    }`}
                    value={editText}
                    onChange={handleChange}
                />
                <button className="btn btn-primary rounded-0">
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button
                    className="btn btn-danger rounded-0"
                    onClick={() => setEditText(title)}
                >
                    <i className="bi bi-x-lg"></i>
                </button>
                <div className="invalid-feedback">Please enter edit todo</div>
            </div>
        </form>
    );
}

export default EditTodo;
