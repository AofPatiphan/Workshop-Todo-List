import EditTodo from './EditTodo';

function TodoItem(props) {
  const handleClickDelete = () => {
    props.deleteTodo(props.todoItem.id);
  };

  const handleClickToggle = () => {
    props.updateTodo(props.todoItem.id, { completed: !props.todoItem.completed });
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
        props.todoItem.completed ? 'success' : 'warning'
      }`}
    >
      {/* <EditTodo /> */}
      <span>{props.todoItem.title}</span>
      <div className="btn-group">
        <button className="btn btn-info rounded-0" onClick={handleClickToggle}>
          <i className={`bi bi-toggle-${props.todoItem.completed ? 'on' : 'off'}`} />
        </button>
        <button className="btn btn-danger rounded-0" onClick={handleClickDelete}>
          <i className="bi bi-trash" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

