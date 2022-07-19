import "./pageStyle/CreateBlog.css";

const CreateBlog = () => {
  
  return (
    <div className="create-section">
        <div className="header-text">
          <h2>Create Blog</h2>
        </div>
      <form className="create-container">
        <div className="create-form-control">
          <label htmlFor="title">
            <input type="text" placeholder="Title" className="create-input" />
          </label>
        </div>
        <div className="create-form-control">
          <label htmlFor="content">
            <input type="text" placeholder="content" className="create-input-content" />
          </label>
        </div>
        <div className="create-form-control">
          <label htmlFor="Author">
            <input type="text" placeholder="Author" className="create-input" />
          </label>
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
