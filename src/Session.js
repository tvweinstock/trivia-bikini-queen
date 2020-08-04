import React from "react";
import Question from "./Question";
import Timer from "./Timer";
import "./App.css";

const Session = () => (
  <div>
    <p>1/10 Question</p>
    <Timer />
    <Question />
  </div>
);

export default Session;
