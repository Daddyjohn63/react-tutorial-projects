import React, { useState } from "react";

//object was destructured in Tours component, so we have access to all the individual properties. Also, passing in removeTour function.
const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false); //toggle state
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {/* if state is true, then all text, if not substring */}
          {readMore ? info : `${info.substring(0, 200)}...`}

          {/* on click set state to opposite of what state currently is. */}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        {/* invoke removeTour on click and pass in the id */}
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
