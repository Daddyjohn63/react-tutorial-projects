import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  //set up state passing in 'data'.
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {/* map over the data as 'question' and pass as props question.id and detructure question to pass in all properties to SingleQuestion */}
          {questions.map(question => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
