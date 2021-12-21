import { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
import TodoItem from './TodoItem';

function TodoList() {
    const { todoList, text, status } = useContext(TodoListContext);

    return (
        <div className="shadow">
            <ul className="list-group rounded-0">
                {todoList.map((el) => {
                    if (el.title.toLowerCase().indexOf(text) === -1) {
                        return null;
                    }
                    if (el.completed === false && status === 'true') {
                        return null;
                    }
                    if (el.completed === true && status === 'false') {
                        return null;
                    }
                    return <TodoItem todo={el} key={el.id} />;
                })}
            </ul>
        </div>
    );
}

export default TodoList;
