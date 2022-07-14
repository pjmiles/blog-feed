import { useState } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import './SideBar.css'

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
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
      <div className="sidebar" style={{width: isOpen ? "300px" : "50px"}}>
        <div className="sidebar-top">
            <h1 className="logo" style={{display: isOpen ? "block" : "none"}}>PJMBlog</h1>
            <div className="bars" style={{marginLeft: isOpen ? "50px" : "0px"}}>
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItems.map((item, index) => (
                <NavLink to={item.path} key={index} className="sidebar-link" activeClassName="active">
                    <div className="side-icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                </NavLink>
            ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
