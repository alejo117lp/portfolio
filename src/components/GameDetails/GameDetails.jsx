import React from "react";

const GameDetails = (props) => {
  return(
    <div className="principal-container">
      <h1>{props.name}</h1>
      <section className="game-summary">
        <p>{props.description}</p>
      </section>
    </div>
  )
};

export default GameDetails;