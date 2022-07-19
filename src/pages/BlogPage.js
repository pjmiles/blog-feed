import "./pageStyle/BlogPage.css";

const BlogPage = () => {
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

      <div>
        <button className="delete-btn"></button>
      </div>
    </div>
  );
};

export default BlogPage;
