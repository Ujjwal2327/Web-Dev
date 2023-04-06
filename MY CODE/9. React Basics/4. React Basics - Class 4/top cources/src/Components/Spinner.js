import React from 'react'

const Spinner = () => {
  return (
    <div className=" space-y-2 " >
        <div className='spinner'></div>
        <p className=" text-bgDark text-lg font-semibold " >Loading...</p>
    </div>
  )
}

export default Spinner;