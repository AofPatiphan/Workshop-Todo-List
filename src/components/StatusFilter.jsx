import { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
function StatusFilter() {
    const { setStatus } = useContext(TodoListContext);

    return (
        <div className="btn-group ms-3">
            <input
                type="radio"
                className="btn-check"
                id="all"
                name="status"
                defaultChecked
                // value=""
                onChange={() => setStatus('')}
            />
            <label
                className="btn btn-outline-secondary rounded-0"
                htmlFor="all"
            >
                <i className="bi bi-list-check" />
            </label>
            <input
                type="radio"
                className="btn-check"
                id="done"
                name="status"
                value="true"
                onChange={() => setStatus('true')}
            />
            <label
                className="btn btn-outline-secondary rounded-0"
                htmlFor="done"
            >
                <i className="bi bi-clipboard-check" />
            </label>
            <input
                type="radio"
                className="btn-check"
                id="doing"
                name="status"
                value="false"
                onChange={() => setStatus('false')}
            />
            <label
                className="btn btn-outline-secondary rounded-0"
                htmlFor="doing"
            >
                <i className="bi bi-clipboard" />
            </label>
        </div>
    );
}

export default StatusFilter;
