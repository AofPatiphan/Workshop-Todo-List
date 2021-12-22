import { useContext, useState } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';

function AddTodo() {
    const { addTodo, title, setTitle } = useContext(TodoListContext);

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            return setError('Title is required.');
        }
        addTodo({ title });
        setError('');
        setTitle('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className={`form-control rounded-0 ${
                            error ? 'is-invalid' : ''
                        }`}
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setError('');
                        }}
                    />
                    <button className="btn btn-success rounded-0">
                        <i className="bi bi-plus-lg"></i>
                    </button>
                    <div className="invalid-feedback">{error}</div>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;
