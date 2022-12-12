import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>; // ... destructure so that all the properties from the object are available to me in the Tour component. Also pass in the removeTour function from App.js, so it now can be accessed in the Tour component.
        })}
      </div>
    </section>
  );
};

export default Tours;
