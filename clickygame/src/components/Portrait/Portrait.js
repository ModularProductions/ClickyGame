import React from "react";
import "./Portrait.css";

const Portrait = props => (
  <div className="portrait" position={props.position}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Portrait;
