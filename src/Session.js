import React from "react";
import Question from "./Question";
import Timer from "./Timer";
import "./App.css";

const Session = () => (
  <div className="m-8">
    <div className="flex flex-row justify-around">
      <p>1/10 Question</p>
      <Timer />
    </div>
    <div>
      <Question />
    </div>
  </div>
);

export default Session;
