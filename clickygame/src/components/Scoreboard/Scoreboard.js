import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  <div className="scoreboard">
    <p>Score: {props.score} / 12</p>
  </div>
);

export default Scoreboard;