import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Footer = () => {

  const {currentPage, totalPages, currentPageHandler} = useContext(AppContext);

  return (
    <div className="bg-white w-full flex justify-center fixed bottom-0 py-2 border-t-2 border-slate-300">
      <div className='w-11/12 max-w-[675px] flex flex-wrap justify-between items-center '>
        <div className='flex gap-3 flex-wrap'>
          {
            currentPage>1 &&
            <button onClick={()=>{currentPageHandler(currentPage-1)}}  className=" border-2 border-slate-300 px-4 py-1 rounded-md">Previous</button>
          }

          {
            currentPage<totalPages &&
            <button onClick={()=>{currentPageHandler(currentPage+1)}}  className=" border-2 border-slate-300 px-4 py-1 rounded-md">Next</button>
          }
        </div>

        <p className=' font-semibold text-sm'>
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Footer