function StatusFilter(props) {
    const handleChange = e => {
      const value = e.target.value;
      props.setSearchStatus(!value ? value : value === 'true');
    };
    return (
      <div className="btn-group ms-3">
        <input
          type="radio"
          className="btn-check"
          id="all"
          name="status"
          defaultChecked
          onChange={handleChange}
          value=""
        />
        <label className="btn btn-outline-secondary rounded-0" htmlFor="all">
          <i className="bi bi-list-check" />
        </label>
        <input
          type="radio"
          className="btn-check"
          id="done"
          name="status"
          value="true"
          onChange={handleChange}
        />
        <label className="btn btn-outline-secondary rounded-0" htmlFor="done">
          <i className="bi bi-clipboard-check" />
        </label>
        <input
          type="radio"
          className="btn-check"
          id="doing"
          name="status"
          value="false"
          onChange={handleChange}
        />
        <label className="btn btn-outline-secondary rounded-0" htmlFor="doing">
          <i className="bi bi-clipboard" />
        </label>
      </div>
    );
  }
  
  export default StatusFilter;
  