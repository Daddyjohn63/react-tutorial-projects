import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  //function to remove a tour, added here because that is where our data is in state. BUT we will need to invoke it in the Tour component. How to pass this down to Tour component to be invoked??
  const removeTour = id => {
    //we will need the id so we know what to filter out.
    const newTours = tours.filter(tour => tour.id !== id); //newTours now represents the new state.
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    //fetch data
    try {
      const response = await fetch(url);
      const tours = await response.json(); //parse
      // console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours(); //invoke
  }, []); //add dependency array so it loads only once

  if (loading) {
    //data not arrived yet
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    //data arrived
    <main>
      {/* pass tours into props for the Tours component  and the removeTour function (you can pass functions in Props !!!*/}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
