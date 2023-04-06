import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {

//   const count = useSelector((state)=>(state.counter.value))

  return (
    <div>
        <button>
            Increament
        </button>

        <br/><br/>

        <div>
            {}
        </div>

        <br/><br/>

        <button>
            Decreament
        </button>
    </div>
  )
}

export default Counter