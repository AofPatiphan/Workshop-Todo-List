import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div className="shadow">
      <ul className="list-group rounded-0">
        {props.todoList.map(item => (
          <TodoItem todoItem={item} key={item.id} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
