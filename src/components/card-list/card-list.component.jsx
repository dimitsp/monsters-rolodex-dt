import React from "react";
import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const Cardlist = props => {
  console.log("props ", props);

  return (
    <div className="card-list">
      {props.monsters.map(character => (
        <Card key={character.id} monster={character} />
      ))}
    </div>
  );
};
