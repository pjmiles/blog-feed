import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Blog from "./pages/BlogPage";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
