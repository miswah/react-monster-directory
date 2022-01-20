import React from "react";
import "./style.css";
import { Card } from "./card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} number={Math.floor(Math.random() * (69 - 2 + 1) + 2)}></Card>;
      })}
    </div>
  );
};
