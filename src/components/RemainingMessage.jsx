import { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
function RemainingMessage() {
    const { todoList } = useContext(TodoListContext);

    const pendingTodoList = todoList.filter((item) => !item.completed);

    return (
        <div className="mt-4 py-3 text-center bg-dark text-white">
            {`${pendingTodoList.length} of ${todoList.length} Remaining`}
        </div>
    );
}

export default RemainingMessage;
