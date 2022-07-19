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

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete("/" + id)
    } catch {
      console.log("Error for delete")
    }
  }

  return (
    
    <div className="blog">
      <div className="blog-header-text">
        <p>Blogs...</p>
      </div>
      {displayBlogs.map((blogPost) => {
        return (
          <>
          <div className="blog-container">
            <p className="blog-title">{blogPost?.title}</p>
            <p className="blog-content">{blogPost?.content}</p>
            <p className="blog-author">{blogPost?.author}</p>
          </div>

          <div className="delete-btn-container">
            <button className="delete-btn" onClick={()=> handleDelete(blogPost._id)}>delete</button>
          </div>        
        </>
        );
      })}
    </div>
  );
};

export default BlogPage;
