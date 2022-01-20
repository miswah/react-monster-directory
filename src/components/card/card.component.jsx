import React from "react";

import "./card.styles.css";

export const Card = (props) => {
  console.log(props.number);
  return (
    <div className="card-container">
      <img className="card-image" src={`https://robohash.org/${props.number}?set=set2`} alt="monster" />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};
