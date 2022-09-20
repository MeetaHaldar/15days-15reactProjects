import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section>
      <section className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
    
            {showInfo ? <AiOutlineMinus size={25} /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </section>
    </section>
  );
};

export default Question;
