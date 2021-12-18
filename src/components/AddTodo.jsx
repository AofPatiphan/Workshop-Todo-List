import { useState } from 'react';

function AddTodo(props) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === '') {
      return setError('Title is required.');
    }
    props.createTodo(title);
    setError('');
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className={`form-control rounded-0 ${error && 'is-invalid'}`}
            value={title}
            onChange={handleChange}
          />
          <button className="btn btn-success rounded-0">
          <i class="bi bi-plus-lg"></i>
          </button>
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
