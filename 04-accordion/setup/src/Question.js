import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

//create function Question and pass in the destructured props for use in the markup
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false); //set up the toggle state for showing the information onclick
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* onclick pass in the opposite of whatever showInfo state currently is */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* set up conditional to decide what icon to show. If we have a true state add minus icon and vice a versa*/}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
