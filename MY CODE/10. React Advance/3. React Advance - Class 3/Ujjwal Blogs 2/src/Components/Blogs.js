import React, { useContext, useEffect } from 'react'
import {AppContext} from '../Context/AppContext'
import Card from './Card';
import Loading from './Loading'

const Blogs = () => {

  const {isLoading, setIsloading, blogs, currentPage} = useContext(AppContext);
  console.log('inside Blogs');
  console.log(blogs);
  console.log(blogs);
  



  return (
    <div className="flex flex-col items-center pt-[100px] pb-[90px] gap-3 w-11/12 max-w-[675px]">
    {
      isLoading===true ?
      <Loading/>
      :
      (
        <div className="flex flex-col gap-8">
        {
          blogs.map((blog)=>(<Card details={blog} key={blog.id} />))
        }
        </div>
      )
    }

    </div>
  )
}

export default Blogs