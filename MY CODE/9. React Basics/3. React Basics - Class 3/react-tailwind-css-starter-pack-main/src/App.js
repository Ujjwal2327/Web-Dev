import { useState } from "react";
import "./App.css";

function App() {
  // let cnt = 0;
  const [cnt, setCnt] = useState(0);
  function decreamentHandler(){
    setCnt(cnt-1);
  }
  function increamentHandler(){
    setCnt(cnt+1);
  }
  function resetHandler(){
    setCnt(0);
  }

  return (
    <div className="w-full h-[100vh] flex justify-center gap-10 items-center bg-[#344151] flex-col  ">
      <div className=" text-[#0398d4] text-2xl font-medium " >Increament & Decreament</div>
      <div className=" bg-white flex justify-center gap-12 py-3 rounded-sm text-25px text-[#344151] " >
        <button onClick={decreamentHandler} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl  " >- </button>
        <div className=" font-bold gap-12 text-5xl ">{cnt}</div>
        <button onClick={increamentHandler} className=" border-l-2 text-center w-20 border-[#bfbfbf] text-5xl  " > + </button>
      </div>
      <button onClick={resetHandler} className=" bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg " >Reset</button>
    </div>
  );
}

export default App;
