import React, { useState } from "react";
import data from "./data"
import Tours from "./Components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  
  if(tours.length === 0){
    function setAllDate(){
      setTours(data);
    }

    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={setAllDate} className="refresh-btn">Refresh</button>
      </div>
    )
  }

  return (
  <div className="App">
    <Tours tours={tours} removeTour={removeTour} ></Tours>
  </div>
  )
};

export default App;
