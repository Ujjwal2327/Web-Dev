import { useContext, useEffect } from "react";
import Blogs from "../Components/Blogs";
import Footer from '../Components/Footer'
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";

export default function HomePage() {

  const{fetchBlogs, currentPage} = useContext(AppContext);



  return (
    
    <div className="flex flex-col items-center">
      <Header/>

      <Blogs/>

      <Footer/>
    </div>


  );
}
