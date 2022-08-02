import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import "./pageStyle/CreateBlog.css";

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/", blog);
      navigate("/");
    } catch {
      console.log("Error for createPost");
    }
  };

  return (
    <>
    <div className="create-section">
      <div className="header-text">
        <h1>Create Blog</h1>
      </div>
      <form className="create-container" onSubmit={handleSubmit}>
        <div className="create-form-control">
          <label htmlFor="title">
            <input
              type="text"
              placeholder="Title"
              className="create-input"
              name="title"
              onChange={handleChange}
              value={blog.title}
              required
            />
          </label>
        </div>
        <div className="create-form-control">
          <label htmlFor="content">
            <textarea
              type="text"
              placeholder="content"
              className="create-input-content"
              name="content"
              onChange={handleChange}
              value={blog.content}
              required
            ></textarea>
          </label>
        </div>
        <div className="create-form-control">
          <label htmlFor="Author">
            <input
              type="text"
              placeholder="Author"
              className="create-input"
              name="author"
              onChange={handleChange}
              value={blog.author}
              required
            />
          </label>
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreateBlog;
