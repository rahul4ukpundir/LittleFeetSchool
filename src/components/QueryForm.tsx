

const QueryForm = () => {
  return (
      <div>
    <form>
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" className="form-control" placeholder="Full Name" />
      </div>
      <div className="form-group">
        <label>Mobile No</label>
        <input type="text" className="form-control" placeholder="Mobile No" />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label>Query</label>
        <textarea
          className="form-control"
          rows={5}
          placeholder="Please write your query..."
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    <br/>
    <br/>
    </div>
  );
};

export default QueryForm;
