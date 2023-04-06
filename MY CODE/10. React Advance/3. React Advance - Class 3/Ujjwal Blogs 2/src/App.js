import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import BlogPage from "./Pages/BlogPage";

export default function App() {

  const{fetchBlogs, currentPage} = useContext(AppContext);



  return (
    
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/blog/:blogId' element={<BlogPage/>} />
      <Route path='/categories/:category' element={<CategoryPage/>} />
      <Route path='/tags/:tag' element={<TagPage/>} />
    </Routes>

  );
}
