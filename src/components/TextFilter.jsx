import { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
function TextFilter() {
    const { text, setText } = useContext(TodoListContext);

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control rounded-0"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                className="btn btn-secondary rounded-0"
                onClick={() => setText('')}
            >
                <i className="bi bi-x-lg"></i>
            </button>
        </div>
    );
}

export default TextFilter;
