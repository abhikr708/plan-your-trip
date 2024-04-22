import React from "react";
import data from './data';
import Tours from "./components/Tours";
import { useState } from 'react';


const App = () => {
  // copy the data into tours variable
  const [tours, setTours] = useState(data);

  // when clicked on not interested button the id of that tour will be sent to remove tour function
  function removeTour(id){
    // in the newTours object we will only keep the tours with different id from the id passed as parameter
    const newTours = tours.filter(tour => tour.id!==id);
    setTours(newTours);
  }
  if(tours.length==0){
    // return the NO TOURS LEFT UI
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        {/* refresh button will again set the data in to tours object */}
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      {/* tours data is sent to Tours component using tours props  */}
      {/* we have to pass removeTour function as prop as remove tour function is called in a separate component */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
