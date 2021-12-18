function EditTodo() {
    return (
      <form className="flex-grow-1">
        <div className="input-group">
          <input type="text" className="form-control rounded-0" />
          <button className="btn btn-primary rounded-0">
            <i className="far fa-edit" />
          </button>
          <button className="btn btn-danger rounded-0">
            <i className="fas fa-times" />
          </button>
        </div>
      </form>
    );
  }
  
  export default EditTodo;
  