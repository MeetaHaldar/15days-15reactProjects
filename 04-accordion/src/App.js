import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
function App() {
  const [questions] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>Questions and Answers</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
