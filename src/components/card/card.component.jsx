import React from "react";

import "./card.style.css";

export const Card = props => (
  <div className="card-container">
    {/* take rundom imgs from robohash */}
    {/* passing in the url the id for unique imgs */}
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
