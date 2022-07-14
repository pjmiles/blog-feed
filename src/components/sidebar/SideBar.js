import { FaHome, FaBars } from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import './SideBar.css'

const SideBar = ({ children }) => {
  const menuItems = [
    {
      path: "/",
      name: "Blogs",
      icon: <FaHome />,
    },
    {
      path: "/create",
      name: "CreateBlog",
      icon: <ImBlogger2 />,
    },
  ];
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-top">
            <h1 className="logo">PJMBlog</h1>
            <div className="bars">
                <FaBars />
            </div>
        </div>
        {
            menuItems.map((item, index) => (
                <NavLink to={item.path} key={index} className="sidebar-link">
                    <div className="side-icon">{item.icon}</div>
                    <div className="link-text">{item.name}</div>
                </NavLink>
            ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
