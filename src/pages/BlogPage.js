import { useEffect, useState } from "react";
import axiosInstance  from '../api/axios'
import "./pageStyle/BlogPage.css";

const BlogPage = () => {
  const [displayBlogs, setDisplayBlogs] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data } = await axiosInstance.get()
        setDisplayBlogs(data.getBlogPost.docs)
        console.log(data)
      } catch {
        console.log("Error occured")
      }
    }
    getBlog()
  }, [])



  return (
    <div className="blog">
      <div className="blog-header-text">
        <p>Blogs...</p>
      </div>
      <div className="blog-container">
        <p className="blog-title">Title</p>
        <p className="blog-content">Content</p>
        <p className="blog-author">Author</p>
      </div>

      <div className="delete-btn-container">
        <button className="delete-btn">delete</button>
      </div>
    </div>
  );
};

export default BlogPage;