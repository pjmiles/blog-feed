import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import "./pageStyle/BlogPage.css";

const BlogPage = () => {
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [page, setPage] = useState(1);
  let navigate = useNavigate()

  const getBlog = async () => {
    try {
      const { data } = await axiosInstance.get();
      const allPost = data.getBlogPost.docs
      setDisplayBlogs((prevPost) => [...prevPost, ...allPost]);
      loadMore()
    } catch {
      console.log("Error occured");
    }
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleScroll = (e) => {
    if(window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight) {
        getBlog()
      }
  }

  useEffect(() => {
    getBlog();
    window.addEventListener('scroll', handleScroll)
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete("/" + id); 
    } catch {
      console.log("Error for delete");
    }
    navigate("/")
  };

  return (
    <div className="blog">
      <div className="blog-header-text">
        <p>Blogs...</p>
      </div>
      {displayBlogs.map((blogPost) => {
        return (
          <>
            <div className="blog-container">
              <p className="blog-title">Title: {blogPost?.title}</p>
              <p className="blog-content">
                Content: <br />
                {blogPost?.content}
              </p>
              <p className="blog-author">Author: {blogPost?.author}</p>
              <div className="delete-btn-container">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(blogPost._id)}
                >
                  delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BlogPage;
