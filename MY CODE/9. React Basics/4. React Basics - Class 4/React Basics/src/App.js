import React, { useEffect, useState } from "react";

const App = () => {
  const [text,setText] = useState('');

  // // variation 1 every render
  // useEffect(()=>{
  //   console.log("UI rendering done");
  // })

  // // variation 2
  // useEffect(()=>{
  //   console.log("UI rendering done")
  // },[]);

  // // variation 3  on first render + whenever dependency changes
  // useEffect(()=>{
  //   console.log('change Observed')
  // }, [text])

  // variation 4  to handle unmounting of a component
  useEffect(()=>{

    console.log('listener added');    //second this will run
    
    return ()=>{  // first this will run
      console.log('listener removed');
    }
  },[text])

  function changeHandler(event){
    setText(event.target.value)
    console.log(text);
  }

  return (
  <div>
    <input type="text" onChange={changeHandler}></input>
  </div>
  );
};

export default App;
