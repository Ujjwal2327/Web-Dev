import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {apiUrl, filterData} from "./data";
import {toast} from "react-toastify";
import Spinner from "./Components/Spinner";

const App = ()=>{

  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async()=>{
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      // save data in a variable
      setCourses(output.data);
    }
    catch(error){
      toast.error('Something Went Wrong In Network');
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);


  return( 
  <div className=" flex flex-col min-h-screen bg-bgDark2" >
    <Navbar/>

    <div className="   " >
      <Filter filterData = {filterData} category={category} setCategory={setCategory} />

      <div className=" w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] " >
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>

  </div>
  );
};

export default App;


